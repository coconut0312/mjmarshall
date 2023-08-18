import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useProducts() {
    const [homeProducts, setAllProducts]=useState([])
  
    useEffect(()=>{
      axios.get('/data/home.json').then((res)=>{
        setAllProducts(res.data)
      })
    },[])
  return (
    [homeProducts]
  )
}