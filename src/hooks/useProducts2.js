import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useProducts() {
    const [portableProducts, setAllProducts]=useState([])
  
    useEffect(()=>{
      axios.get('/data/portable.json').then((res)=>{
        setAllProducts(res.data)
      })
    },[])
  return (
    [portableProducts]
  )
}