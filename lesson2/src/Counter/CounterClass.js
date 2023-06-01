import React, {Component} from "react";
import './Counter.css'

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.startAt
        }

        this.countDown = this.countDown.bind(this)
        this.countUp = this.countUp.bind(this)

    }
    
    countDown (e) {
        this.setState({counter:this.state.counter - this.props.countBy})
    }
    

    countUp (e) {
        this.setState({counter:this.state.counter + this.props.countBy})
    }

    reset (e) {
        this.setState({counter:this.state.counter === 0})
    }
    
    
    
    static defaultProps = {
        startAt : 0,
        countBy: 1
    }
        
        
    render(){
        return(
            <div className="forCount">
                <div className="para">
                    <p>startAt: {this.props.startAt}</p>
                    <p>startBy: {this.props.countBy}</p>
                </div>
                
                <h4 className="text">{this.state.counter}</h4>

                <button className='primaryBtn' onClick={() => {this.countDown()}}>-</button> 

                <button className='secondaryBtn' onClick={() => {this.countUp()}}>+</button>

                <br />

                <button className='secondaryBtn' onClick={() => {this.reset()}}>Reset</button>

            </div>
        )
    }
}

export default CounterClass