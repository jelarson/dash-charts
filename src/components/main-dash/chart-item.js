import React from 'react'

export default function ChartItem(props) {
    const {itm, totalItm, term, dollar} = props
    return (
        <div className='chart-item-wrapper'>
            <div className='chart-item'>
                <div className='bar' style={{height: `${(itm/totalItm)*180}px`}}>
                    {dollar ? `$${itm}` : itm}
                </div>
                {term}
            </div>
        </div>
    )
}