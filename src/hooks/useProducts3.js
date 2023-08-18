import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useProducts() {
    const [limitedEdition, setAllProducts]=useState([])
  
    useEffect(()=>{
      axios.get('/data/limitedEdition.json').then((res)=>{
        setAllProducts(res.data)
      })
    },[])
  return (
    [limitedEdition]
  )
}