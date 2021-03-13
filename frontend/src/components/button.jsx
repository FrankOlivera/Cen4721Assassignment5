import React, {Component} from 'react';


class Header extends Component {

    constructor() {
        super();
        this.state = {id: Header.uniqueIds++};
    }


    static uniqueIds = 0;

    function = () => {
        if(document.getElementById(this.state.id).className === "btn btn-danger bi-hand-thumbs-down-fill")
            document.getElementById(this.state.id).className="btn btn-success bi-hand-thumbs-up-fill"
        else
            document.getElementById(this.state.id).className="btn btn-danger bi-hand-thumbs-down-fill"
        this.setState(document)
    }

    render(){
        return(
            <div className="btn-group mr-2" role="group">
                <button type="button" className="btn btn-success bi-hand-thumbs-up-fill" id={this.state.id} onClick={this.function}/>
            </div>
        );
    }
}
export default Header;