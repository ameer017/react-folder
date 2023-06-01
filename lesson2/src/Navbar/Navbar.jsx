import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className='nav'>
        <div className="container">
            <a href="https://www.google.com/">Hey Guys, Lets Celebrate: {props.title}</a>
        </div>
    </nav>
  )
}

export default Navbar