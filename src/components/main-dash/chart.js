import React from 'react'
import ChartItem from './chart-item'

export default function Chart(props) {
    const {title, residItm, commerItm, totalItm, dollar} = props

    return (
        <div>
            {title}
            <div className='chart' >
                <ChartItem itm={residItm} totalItm={totalItm} dollar={dollar} term='Residential'/>
                <ChartItem itm={commerItm} totalItm={totalItm} dollar={dollar} term="Commercial" />
                <ChartItem itm={commerItm + residItm} totalItm={totalItm} dollar={dollar} term='Total'/>
            </div>
        </div>
    )
}