import React, {Component} from 'react';

class Formbutton extends Component {



    render(){
        return (
            <footer>
                <div>
                    <div style={{bottom:5,right:5, position:"absolute"}}>
                        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <label style={{outline: "solid", marginTop: 10}} className="btn btn-info bi-play" > Complete Survey</label>
                        </a>
                    </div>
                </div>
            </footer>
        );

    }
}
export default Formbutton;