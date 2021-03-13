import React, {Component} from 'react';
import Button from "./button";

class TEXT_BOXES extends Component{

    state = {
        englishChatText: [],
        spanishChatText: [],
        englishChatTranslation: "",
        spanishChatTranslation: "",
        count: 0
    }

    Change = () =>{
    }

    ClearEnglish = () =>{
        this.setState(this.state.englishChatText = []);
    }

    ClearSpanish = () =>{
        this.setState(this.state.spanishChatText = []);
    }

    LogEnglish = () =>{
        if(document.getElementById("englishText").value === "") {
            alert("Must enter text to translate!");
            return;
        }

        fetch('/translation', {
            method: 'POST',
	        body: JSON.stringify({
                title: document.getElementById("englishText").value,
                lang: 'es'
	        }),
	        headers: {
		        'Content-type': 'application/json; charset=UTF-8'
            }
            })
                .then(res => res.json())
                .then(translation => {this.setState({
                    englishChatTranslation: translation
                })})
                .then(r => {
                    this.state.spanishChatText.push("Ingles: " + this.state.englishChatTranslation)
                    this.state.englishChatText.push("English: " + document.getElementById('englishText').value)
                    this.setState({
                    englishChatText : this.state.englishChatText,
                    spanishChatText : this.state.spanishChatText
                 })})
                .then(e => {
                    document.getElementById('englishText').value = ""
                })
        console.log("getEnglishTranslation called");
    }

    LogSpanish = () => {
        if(document.getElementById("spanishText").value === "") {
            alert("Debe ingresar texto para traducir!");
            return;
        }

        fetch('/translation', {
            method: 'POST',
	        body: JSON.stringify({
                title: document.getElementById("spanishText").value,
                lang: 'en'
	        }),
	        headers: {
		        'Content-type': 'application/json; charset=UTF-8'
            }
            })
                .then(res => res.json())
                .then(translation => {this.setState({
                    spanishChatTranslation: translation
                })})
                .then(r => {
                    this.state.spanishChatText.push("Español: " + document.getElementById('spanishText').value)
                    this.state.englishChatText.push("Spanish: " + this.state.spanishChatTranslation)
                    this.setState({
                    englishChatText : this.state.englishChatText,
                    spanishChatText : this.state.spanishChatText
                 })})
                .then(e => {
                    document.getElementById('spanishText').value = ""
                })
            console.log("getSpanishTranslation called");
    }

    render() {

        const whiteText ={
            color: '#050505',
            backgroundColor: '#d3e0ea'
        }

        const textAreaStyle = {
            padding: 10,
            margin: 10

        }

        const center = {
            textAlign: 'center',
            backgroundColor: '#d3e0ea',
            padding: 5,
            margin: 10
        }

        const chatBoxes = {
            flex: 1,
            flexWrap: 'wrap',
            overflowX: 'scroll',
            overflowY: 'scroll',
            backgroundColor :  "#f6f5f5",
            wordWrap: 'break-word',
            textAlign: 'left'
        }

        const chatBoxes2 = {
            flex: 1,
            flexWrap: 'wrap',
            overflowX: 'scroll',
            overflowY: 'scroll',
            backgroundColor :  "#f6f5f5",
            wordWrap: 'break-word',
            textAlign: 'left',
            marginRight: 30
        }

        const {englishChatText} = this.state;
        const {spanishChatText} = this.state;

        return (
            <div style={center}>
                <div className="container-fixed" style={center}>

                    {/*Language Text*/}
                    <div className="row">
                        <div className="col-sm" style={whiteText}>
                            <b>Language: English</b>
                        </div>
                        <div className="col-sm" style={whiteText}>
                            <b>Idioma: Español</b>
                        </div>
                    </div>

                    {/*Input Text Boxes*/}
                    <div className="row">
                        <textarea className="col-sm" id="englishText" style={textAreaStyle}>

                        </textarea>
                        <textarea className="col-sm" id="spanishText" style={textAreaStyle}>

                        </textarea>
                    </div>

                    {/*Interaction Buttons*/}
                    <div className="row">
                        <div className="col-sm">
                            <button className="btn btn-primary" style={{margin: 10}} onClick={this.LogEnglish}>
                                Click to Translate
                            </button>
                            <button className="btn btn-danger" onDoubleClick={this.ClearEnglish}>
                                Clear Chat
                            </button>
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary" style={{margin: 10}} onClick={this.LogSpanish}>
                                Haga Clic para Traducir
                            </button>
                            <button className="btn btn-danger" onDoubleClick={this.ClearSpanish}>
                                Vacie la Conversacion
                            </button>
                        </div>
                    </div>

                    {/*Chat Logs*/}
                    <div className="row" style={textAreaStyle}>
                        <div className="col-sm" style={chatBoxes2}> Chat: <br/>
                        {englishChatText.map((item) => {
                            return(
                                <p style={{margin:5, padding: 0}}>
                                    <Button/>
                                    {item}
                                </p>
                            );
                        })}
                        </div>
                       <div className="col-sm" style={chatBoxes}> Conversación: <br/>
                        {spanishChatText.map((item) => {
                            return(
                                <p style={{margin:5, padding: 0}}>
                                    <Button/>
                                    {item}
                                </p>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TEXT_BOXES;