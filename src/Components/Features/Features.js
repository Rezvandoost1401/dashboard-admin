import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Feature.css'

export default function Features() {
    return (
        <div className='Features'>
            <div className='featuresItem'>
                <span className='featureTitle'>Revanue</span>
                <div className='featureDetails'>
                    <h3 className='featureValue'>$2,415</h3>
                    <span className='featureRate'>-11.4</span>
                    <ArrowDownwardIcon className='rateIcon negative'/>
                </div>
                <span className='featureSub'>Compared to last month</span>
            </div>
            <div className='featuresItem'>
                <span className='featureTitle'>Sales</span>
                <div className='featureDetails'>
                    <h3 className='featureValue'>$4,415</h3>
                    <span className='featureRate'>-1.4</span>
                    <ArrowDownwardIcon className='rateIcon negative'/>
                </div>
                <span className='featureSub'>Compared to last month</span>
            </div>
            <div className='featuresItem'>
                <span className='featureTitle'>Cost</span>
                <div className='featureDetails'>
                    <h3 className='featureValue'>$2,225</h3>
                    <span className='featureRate'>+2.4</span>
                    <ArrowUpwardIcon className='rateIcon'/>
                </div>
                <span className='featureSub'>Compared to last month</span>
            </div>
        </div>
    )
}
