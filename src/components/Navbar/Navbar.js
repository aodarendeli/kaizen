import React, { useState } from 'react'
import DahaDaha from '../../assets/DahaDaha'
import Profile from '../../assets/Profile'
import './index.css'

function Navbar() {
    const [handleClick, setHandleClick] = useState(false)
    return (
        <div className='d-flex justify-content-between'>
            <DahaDaha />
            <div className='d-flex'>
                <button onClick={() => setHandleClick(true)} className={handleClick ? 'd-none' : 'd-block login__button mx-3'}>
                    Giriş Yap
                </button>
                {handleClick ?
                    <div onClick={() => setHandleClick(false)} className='user__loginIcon d-flex justify-content-center align-items-center'>
                        <div className='bg__green'></div>
                        <Profile />
                    </div>
                    :
                    <div className='user__icon d-flex justify-content-center align-items-center'>
                        <Profile />
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar