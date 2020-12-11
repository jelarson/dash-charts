import React from 'react'
import ChartItem from './chart-item'

export default function Chart(props) {
    const {title, residItm, commerItm, totalItm, dollar, average} = props

    return (
        <div>
            {title}
            <div className='chart' >
                <ChartItem itm={residItm} totalItm={totalItm} dollar={dollar} average={average} term='Residential'/>
                <ChartItem itm={commerItm} totalItm={totalItm} dollar={dollar} average={average} term="Commercial" />
                <ChartItem itm={commerItm + residItm} totalItm={totalItm} dollar={dollar} average={average} term='Total'/>
            </div>
        </div>
    )
}