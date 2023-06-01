import { useState, useEffect } from "react";

function WeatherFunction ({location}) {
    const [data, setData] = useState({});



    useEffect(() => {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=5bce7cbe4bad478fb3f115809231204&q=London&aqi=no`
        fetch(apiUrl)
        .then((res) => res.json())
        .then(obj => console.log(obj))
        .then(obj => setData(obj))

    }, [])
    

    if(!data) {
        return <></>
    }

    return(
        <div className="card">
            {/* <img src={data.current.icon} alt="Current Logo" /> */}
            <div className="data">
                <h5 className="setData">{}</h5>
                {console.log(data.current)}
            </div>
            <ul className="listGroup">
                {/* <li className="listItem">Temp: {data.current.temp_c}</li>
                <li className="listItem">{data.current.weather_description}</li>
                <li className="listItem">Wind: {data.current.wind_mph}</li>
                <li className="listItem">Humidity: {data.current.humidity}</li> */}
            </ul>
        </div>
    )
}

export default WeatherFunction