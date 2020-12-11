import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function CitySelect() {
    const arr = ['', 'city1', 'city2', 'city3']
    const [city, setCity] = useState('')
    return (
        <div className='welcome-splash-wrapper'>
            <div className='welcome-splash-message'>
                <h1>Welcome!</h1>
                <div className='city-select-wrapper'>
                    <h3>Select your city: </h3>
                    <select onChange={e=>setCity(e.currentTarget.value)}>
                        {arr.map(val=> <option value={val}>{val}</option>)}
                    </select>
                </div> 
            </div>
            <div className='change-cities-link'>
                <Link to={{pathname: city.length > 1 ? 'dash' : '', state: {city},}}>
                    Submit
                </Link>
            </div>

        </div>
    )
}