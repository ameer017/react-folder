import React from 'react'
import {ImFacebook, ImTwitter, ImWhatsapp} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import './Contact.scss'

const Contact = () => {
  return (
    <div>
        <ul className='socialBtns'>
            <li className='socialBtn'><ImFacebook /></li>
            <li className='socialBtn'><BsInstagram/></li>
            <li className='socialBtn'><ImTwitter /></li>
            <li className='socialBtn'><ImWhatsapp /></li>
        </ul>
    </div>
  )
}

export default Contact