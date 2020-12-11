import React from 'react'
import Header from './header'
import Content from './content'

export default function MainPage(props) {
    const {location} = props
    const {city} = location.state
    return (
        <div>
            <Header city={city}/>
            <Content city={city}/>
        </div>
    )
}