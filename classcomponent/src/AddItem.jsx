import React, {Component} from "react";

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem : ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.newItem)

        this.setState ({
            newItem: ''
        })
    }
    handleChange(e) {this.setState({newItem: e.target.value})}
    
    render() {

        return(
            <>
                <div className="addCon">
                    <form>
                        <input type="text" className="controlInput" value={this.state.newItem} onChange={this.handleChange} />

                        <button className="btnFull" onClick={this.handleClick}>{this.props.buttonText}</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddItem