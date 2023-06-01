import React from 'react'
import './About.css'
import AboutList from '../AboutList';


const About = (props) => {
    const items = props.items;
    const itemsListed = items.map((item, i) => 
        <AboutList text={item.title} key={i}/>
    )

  return (
    <div>
        <h3 className='text'>{props.title}</h3>
        <ul>{itemsListed}</ul>

        {/* <AboutList /> */}
    </div>
  )
}

export default About