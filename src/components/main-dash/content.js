import React, {useState, useEffect} from 'react'

import Chart from './chart'

export default function Content(props) {
    // index from city name - idealy would be position in array
    const idx = Number(props.city.split('city')[1]) -1
    // data for table columns and rows
    const reportArrRow = [' ', '# of Permits', 'Value', 'Avg Val/Permit']
    const reportArrCol = ['Residential', 'Commercial', 'Total']
    // idealy would import cityData from db
    const cityData = [[[7, 1600], [3, 450]], [[4, 750], [8, 900]], [[16, 2400], [28, 4800]]]
    // residential is index 0 of inner array, commercial is index 1
    const residArr = cityData[idx][0]
    // get rounded down average of value/permit and push
    residArr.push(Math.floor(residArr[1]/residArr[0]))
    const commerArr = cityData[idx][1]
    commerArr.push(Math.floor(commerArr[1]/commerArr[0]))
    // totals array for bottom table row
    const totals = [residArr[0] + commerArr[0], residArr[1] + commerArr[1]]
    totals.push(Math.floor(totals[1]/totals[0]))
    const [chartType, setChartType] = useState('all')
    const [countChart, setCountChart] = useState('none')
    const [totalChart, setTotalChart] = useState('none')
    const [averageChart, setAverageChart] = useState('none')

    // update state and chart class names to change which charts are viewed on select change
    useEffect(()=>{
        if (chartType === 'all'){
            setCountChart('block')
            setTotalChart('block')
            setAverageChart('block')
        }
        if (chartType === 'count'){
            setCountChart('block')
            setTotalChart('none')
            setAverageChart('none')
        }
        if (chartType === 'total'){
            setCountChart('none')
            setTotalChart('block')
            setAverageChart('none')
        }
        if (chartType === 'average'){
            setCountChart('none')
            setTotalChart('none')
            setAverageChart('block')
        }
    }, [chartType])

    return (
        <div className='content-wrapper'>
            <div className='report-wrapper'>
                <div className='report-title'>
                    Report for {props.city}
                </div>
                <div className='report-content'>
                    <div className='report-columns'>
                        {reportArrRow.map(el=><div className='report-item'>{el}</div>)}
                    </div>
                    <div className='report-row-wrapper'>
                        <div className='report-row-titles'>
                            {reportArrCol.map(el=><div className='report-item'>{el}</div>)}
                        </div>
                        <div className='report-row-content'>
                            {[...residArr, ...commerArr, ...totals].map(el=><div className='report-item'>{el}</div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='chart-selector'>
                Which Chart?
                <select onChange={e=>setChartType(e.currentTarget.value)}>
                    <option value='all'>All</option>
                    <option value='count'>Permit Count</option>
                    <option value='total'>Total Value</option>
                    <option value='average'>Average Value</option>
                </select>
            </div>
            <div className='charts-wrapper'>
                <div className='chart-wrapper' style={{display: `${countChart}`}}>
                    <Chart title='Total Permits' residItm={residArr[0]} commerItm={commerArr[0]} totalItm={totals[0]} dollar={false} average={false}/>
                </div>
                <div className='chart-wrapper' style={{display: `${totalChart}`}}>
                    <Chart title='Total Value' residItm={residArr[1]} commerItm={commerArr[1]} totalItm={totals[1]} dollar={true} average={false}/>
                </div>
                <div className='chart-wrapper' style={{display: `${averageChart}`}}>
                    <Chart title='Average Value' residItm={residArr[2]} commerItm={commerArr[2]} totalItm={residArr[2]+commerArr[2]} dollar={true} average={totals[2]} />
                </div>
            </div>
        </div>
    )
}