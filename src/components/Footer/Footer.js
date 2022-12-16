import React, { useState } from 'react'
import './footer.scss'
import Portal from '../../assets/Portal'
import Kesfet from '../../assets/Kesfet'
import Star from '../../assets/Star'

function Footer() {
    return (
        <div className='container'>
        <div className='footer d-flex justify-content-between mt-3 align-items-center text-center'>
            <div className='tab-svg'>
                <Kesfet  />
                <p className='tab-text noselect' >KEŞFET</p>
            </div>
            <div className='tab-svg'>
                <Portal />
            </div>
            <div className='tab-svg'>
                <Star />
                <p className='tab-text noselect' >DAHA CÜZDAN</p>
            </div>
        </div>
        </div>
    )
}

export default Footer