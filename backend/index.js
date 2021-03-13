const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();


//PORT STUFF
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);

//USED TO CALL PYTHON FUNCTIONS
const {spawn} = require('child_process');

//configure body parser(npm)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/translation', (req, res,next) => {

    let translation = req.body["title"];

    // spawn new child process to call the python script
    const python = spawn('python', ['main.py', translation, req.body["lang"]]);

    // collect data from script
    python.stdout.on('data', function (data) {
        translation = data.toString();
        console.log(translation);
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.json(translation);
    });

    console.log('post called');
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
