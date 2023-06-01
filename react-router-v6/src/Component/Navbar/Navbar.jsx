import React from 'react'
import './Navbar.scss'
import {Link } from 'react-router-dom'

const Navbar = (navList) => {
    const navLists = ['About', 'Stack', 'Contact']

    // const listItems = navList.map((item, index) => {
    //     return (
    //         <li key={index}>
    //             <Link to={`${item}`}>{item}</Link>
    //         </li>
    //     )
    // })

  return (
    <nav>
        <div className='logo'>
            <h3 className='title'><span className='one'>DLT</span> <span className='two'>Africa</span></h3>
            <small>...innovating through web3</small>
        </div>

        <ul className="appNavList">
            <li>
                <Link to="/">Home</Link>
            </li>
            {/* {listItems} */}
            {navLists.map((list, index) => 
            <li key={index}><Link to={`${list}`}>{list}</Link></li>
            )}
        </ul>


        <a href="#" className='btn'>Get Started</a>
    </nav>
  )
}

export default Navbar