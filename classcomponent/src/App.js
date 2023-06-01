import { useState } from 'react';
import React from 'react';
// import Welcome from './Components/Welcome';
import './App.css';
// import AboutList from './AboutList';
import Navbar from './Navbar/Navbar';
// import About from './LastClassList';
import About from './About/About ';
// import AddItem from './AddItem';
import AutoItem from './AutoItem';

const App = () => {
  const [list, setList] = useState([{title: 'Home'}, {title: 'About'}, {title: 'Contact'}])

  function updateList(newList) {
    setList([...list, newList])
  }
    // const list = ['Home', 'About', 'Contact']
    return (

      <div className='aboutCon'>
        {/* <Welcome /> */}
        <Navbar title="Congratulations"/>

        <About 
          title = "Logo"
          items = {list}
        />
        {/* <AboutList /> */}

        {/* <AddItem buttonText='Add Item' onSubmit={updateList} /> */}
        <AutoItem buttonText='Add Item' onSubmit={updateList}/>
      </div>
    )
    
  
}

export default App