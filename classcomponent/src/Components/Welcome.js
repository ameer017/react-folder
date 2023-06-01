import { Component } from "react";

class Welcome extends Component {
    
    render() {
        const text = 'Welcome to class component'
        return <div className="App">
            <h1>{text}</h1>
        
        </div>
    }
}

export default Welcome