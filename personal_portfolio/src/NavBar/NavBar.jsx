import React, {useState} from 'react'
import {GiLeafSwirl} from 'react-icons/gi'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'
import './NavBar.scss'

const lists = [ 
  {tag: 'About', id: '#About'}, 
  {tag: 'Services', id: '#Services'}, 
  {tag: 'Projects', id: '#Projects'}, 
  {tag: 'Skills', id: '#Skills'}, 
  {tag: 'Contact', id: '#Contact'}]


  const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className='navBar'>
        <div className='logo'>
          <GiLeafSwirl />
        </div>
    
        
          <ul className='navList'>
            {lists.map(({tag, id}) => (<a href={id}>{tag}</a>))}
          </ul>
        
  
        <a href='#' className='btn'>Resumé</a>
  
        
          <div className='menu'>

            
            <AiOutlineMenu 
              title='menu'
              // onClick={toggleNavbar}
            />

          </div>


        
      </div>
    );
  }

export default NavBar