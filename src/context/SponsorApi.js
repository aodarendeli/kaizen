import React, { useState, useEffect } from 'react'
import { ApiContext } from './ApiContext'
import axios from 'axios'
function SponsorApi({ children }) {
  const [sponsor, setSponsor] = useState([])
  useEffect(() => {
    axios('https://api.extrazone.com/tags/list', {
      headers: {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          setSponsor(res.data);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 
  return (
    <ApiContext.Provider value={[sponsor, setSponsor]}>
      {children}
    </ApiContext.Provider>
  )
}
export default SponsorApi