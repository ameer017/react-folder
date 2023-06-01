import './App.css';
// import Home from './Home/Home';
import HelloWorld from './Components/HelloWorld';


function App() {
  return (
    <div className="App">
      <h1>Hello world, this is my first react <ion-icon name="logo-react" className="icon"></ion-icon> code!!.</h1>

      {/* <Home/> */}
      <HelloWorld/>
    </div>
  );
}

export default App;
