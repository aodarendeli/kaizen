import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../context/ApiContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './sponsor.scss';

function Sponsor() {
    const [sponsor, setSponsor] = useContext(ApiContext)
    const [selected, setSelected] = useState(null)
    const setHandleClick = (item) => {
        setSelected(item)
    }
    return (
        <div className='mt-5 mb-5 d-flex'>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {sponsor.map(item => {
                    return (
                        <SwiperSlide key={item.Id}>
                            <div className={selected != item.Id ? "d-flex sponsor__product justify-content-around" : "d-flex sponsor__changeProduct justify-content-around"}  onClick={()=> setHandleClick(item.Id)}>
                                <img className='tag-img' src={item.IconUrl} />
                                <p className='tag-name noselect'>{item.Name} </p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}

export default Sponsor