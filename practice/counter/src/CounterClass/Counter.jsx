import React from 'react'
import './Counter.css'

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {count: 0}
    }

    toDown() {
        this.setState({count: this.state.count - 1})
        document.querySelector('.forCount').style.backgroundColor = 'red';
        if(this.state.count === 0) {
            this.setState(false)
        }
    }

    toUp() {
        this.setState({count: this.state.count + 1})
        document.querySelector('.forCount').style.backgroundColor = 'green'
    }

    reset() {
        this.setState({count: this.state.count === 0})
        document.querySelector('.forCount').style.backgroundColor = '#6e8586'
    }

    render() {

        return(
            <div className='forCount'>

                <h1>{this.state.count}</h1>

                <div className='btn'>
                    <button onClick={() => {this.toDown()}}>-</button>
                    <button onClick={() => {this.toUp()}}>+</button>
                </div>
                <button onClick={() => {this.reset()}}><ion-icon name="reload-circle-outline"></ion-icon></button>
            </div>
        )    
    }
}

export default Counter