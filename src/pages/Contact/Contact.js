import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Back from '../../assets/Back'
import './contact.scss'

function Contact() {
  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    try {
      axios('https://api.extrazone.com/promotions?Id=' + location.state.Id, {
        headers: {
          "X-Country-Id": "TR",
          "X-Language-Id": "TR",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          setData(response.data)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])
  if (data) {
    return (
      <div className='mx-auto'>
        <Card className='banner mx-auto' style={{ width: '24rem' }}>
          <Card.Img variant="top" src={data.ImageUrl} />
            <div className='banner__logo w-100 d-flex justify-content-between'>
              <img src={data.BrandIconUrl} />
              <p className='mx-2 mt-4'>
                {data.RemainingText}
              </p>
            </div>
            <Card.Body className='text-center'>
              <Card.Title className='text-center'>{data.Title}</Card.Title>
              <span className="fs-4" style={{ color: data.PromotionCardColor }}>Daha Daha</span>
            </Card.Body>
        </Card>
          <div className='mt-5' dangerouslySetInnerHTML={{ __html: data.Description }} />
          <button className='join__button'>
             Hemen Katıl
          </button>
          <div className='turn__back' onClick={() => navigate(-1)}>
            <Back />
          </div>
        </div>
    )
  }
  return (
    <Spinner className='text-center' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Contact