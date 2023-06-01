import React, {Component} from "react";
import AboutList from "./AboutList";
// import AddItem from "./AddItem";

class About extends Component {
        constructor(props){
            super(props);

            this.state = {
                newGuiter: '',
                items: [...props.items]
            }

            this.handleClick = this.handleClick.bind(this)
            this.handleChange = this.handleChange.bind(this)
        }

        handleClick(e) {
            e.preventDefault();
            let newGuiter = this.state.newGuiter
            // to add to our array of items
            this.setState({items: [...this.state.items, newGuiter], newGuiter : ''})
           
            }
        
        handleChange(e) {
            this.setState({newGuiter: e.target.value})

            // to add text to the array
        }

        render() {
            let items = this.state.items.map(item => 
            <AboutList text={item}/>
        )

        return (
            <>
                <div className="aboutCon">
                    <form>
                        <input type="text" className="controlInput" value={this.state.newGuiter} onChange={this.handleChange} />

                        <button className="btnFull" onClick={this.handleClick}>Add List</button>
                    </form>
                </div>
                <h3 className='text'>{this.props.title}</h3>
                <ul>{items}</ul>
                <div>
        </div>
            </>
        )
    }
}

export default About