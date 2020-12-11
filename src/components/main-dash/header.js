import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
    return (
        <div className='title-wrapper'>
            <div className='page-title'>
                {props.city}
            </div>
            <div className='change-cities-link'>
            <Link to={{pathname:'/'}}>
                Change City
            </Link>
            </div>
        </div>
    )
}