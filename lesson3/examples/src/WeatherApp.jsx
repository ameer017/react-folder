import { useState, useRef } from "react";
import './WeatherApp.scss'
import logo from './logo.svg'

function WeatherApp () {
    const [location, setLocation] = useState('')
    const locationInput = useRef(null)

   const handleClick = (e) => {
        e.preventDefault();
        console.log('active')
        setLocation(locationInput.current.value)
   }

    return(
        <>
            <div className="container">
                <div className="rowJustify">
                    <div>
                        <h2 className="title"><span className="one">DLT</span> <span className="two">Africa</span> Weather App</h2>
                        <form className="content">
                            <input type='text' className="formControl" ref={locationInput} />

                            <div className="btnCon">
                                <button className="btn"><img src={logo} onClick={handleClick} alt="logo"/></button>    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WeatherApp