import React from 'react'
import styles from '../components/css/productsdetail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useProducts from '../hooks/useProducts'




export default function ProductsDetail() {
    // const [productId, setProductId]=useState()
    
    // const navigate = useNavigate()
    
    // const changeId=(e)=>{
    //     setProductId(e.target.value)
    // }

    // const submitId=()=>{
    //     navigate(`/speakers/${productId}`)
    // }


  const {productId}=useParams();
  const [allProducts]=useProducts();
  const [productItem, setProductItem]=useState([]);
  useEffect(()=>{
    const productItem=allProducts.filter((item)=>item.id===productId)
    setProductItem(productItem)
  },[allProducts])


  return (
    <div>Productdetail2 {productId}</div>
  )
}
