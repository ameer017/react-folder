// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import Herosection from './Herosection/Herosection';

import Counter from './Counter/Counter';
import CounterClass from './Counter/CounterClass';


function App() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <div>
        <Navbar title="Congratulations"/>
        <Herosection />

          

          <Counter />
          <CounterClass />
      </div>
    </div>
  );
}



export default App;
