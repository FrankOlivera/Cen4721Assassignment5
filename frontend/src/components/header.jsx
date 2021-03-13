import React, {Component} from 'react';

class Header extends Component {

    function = () =>{
        alert(" English:\nTranslate: Click for translation to appear in Chat.\n Clear Chat: Double Click to clear chat.\n" +
            "\nEspanol:\nTraducir: haga clic para que la traducción aparezca en el chat.\nBorrar chat: haga doble clic para borrar el chat.")
    }

    render(){
        return (
            <div style={{backgroundColor: '#17a2b8'}} className="container-fluid">
                <div className="row">
                    <div className="col" style={{padding: 10}}>
                        <a target="_blank" href="https://campusmap.ufl.edu/#/" style={{padding: 20}}>
                            <label style={{outline: "solid", marginTop: 10}} className="btn btn-info bi-map-fill" > Map</label>
                        </a>
                        <a onClick={this.function}>
                            <label style={{outline: "solid", marginTop: 10}} className="btn btn-info bi-question-circle" > Help</label>
                        </a>
                    </div>
                </div>
            </div>

        );

    }
}
export default Header;