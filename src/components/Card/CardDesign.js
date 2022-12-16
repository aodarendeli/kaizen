import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ApiContext } from '../../context/ApiContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './card.scss'
import { useNavigate } from 'react-router-dom'


function CardDesign() {
    const navigete = useNavigate()
    const [users, setUsers] = useContext(ApiContext)
    // const [promotion,setPromotion] = useContext(ApiContext)

    // useEffect(() => {
    //     console.log("promotion: => ",promotion)
    // }, [users])
    return (
        <div>
            <Swiper
                spaceBetween={100}
                slidesPerView={1.4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
             >
                {users.map((item, idx) => {
                    return (
                        <SwiperSlide key={item.Id}>
                            <Card  onClick={()=>navigete('/contact',{state:item})} className='banner' style={{ width: '24rem' }} key={idx}>
                                <Card.Img variant="top" src={item.ImageUrl} />
                                <div className='banner__logo w-100 d-flex justify-content-between'>
                                    <img src={item.BrandIconUrl} />
                                    <p className='mx-2 mt-4'>
                                        {item.RemainingText}
                                    </p>
                                </div>
                                <Card.Body className='text-center'>
                                    <Card.Title className='text-center'>{item.Title}</Card.Title>
                                    <span className="fs-4" style={{color: item.PromotionCardColor}}>Daha Daha</span>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default CardDesign