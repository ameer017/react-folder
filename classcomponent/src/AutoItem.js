import React from "react";

class AutoItem extends React.Component {

    constructor(props) {
        super(props);

        this.listName = React.createRef(null)
        this.listMaker = React.createRef(null)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();

        let title = this.listName.current.value
        let maker = this.listMaker.current.value
        this.props.onSubmit(
            {title, 
            maker}
        );

        this.listName.current.value = ''
        this.listMaker.current.value = ''
        this.listMaker.current.focus()
        
    }


    render(){
        return(
            <>
                <form className="aboutCon">
                    <div className="forInp">
                        <input type="text" className="controlInput" ref={this.listName} />
                    </div>

                    <div className="selInp">
                        <select ref={this.listMaker}>
                            <option value='&:nbsp'></option>
                            <option value='PRS'>PRS</option>
                            <option value='Fender'>Fender</option>
                            <option value='Gibson'>Gibson</option>
                        </select>
                    </div>

                    <button className="btnFull" onClick={this.handleClick}>{this.props.buttonText}</button>
                </form>
            </>
        )
    }
}

export default AutoItem