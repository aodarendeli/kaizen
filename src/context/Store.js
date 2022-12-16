import React, { useState, useEffect } from 'react'
import { ApiContext } from './ApiContext'
import axios from 'axios'
function Store({ children }) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios('https://api.extrazone.com/promotions/list?Channel=PWA', {
      headers: {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          setUsers(res.data);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <ApiContext.Provider value={[users, setUsers]}>
      {children}
    </ApiContext.Provider>
  )
}
export default Store