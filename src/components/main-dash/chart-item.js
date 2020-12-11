import React from 'react'

export default function ChartItem(props) {
    const {itm, totalItm, term, dollar, average} = props
    let tempItm = average && term === 'Total' ? average : itm
    return (
        <div className='chart-item-wrapper'>
            <div className='chart-item'>
                <div className='bar' style={{height: `${(tempItm/totalItm)*180}px`}}>
                    {dollar ? `$${tempItm}` : tempItm}
                </div>
                {term}
            </div>
        </div>
    )
}