import React, { useEffect, useState } from 'react'
import styles from './styles/speakers.module.css'
import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import axios from 'axios'


export default function Speakerslist() {
  const [allProducts]= useProducts();
  const categories=[
    {index:0, text:'ALL'},
    {index:1, text:'HOME'},
    {index:2, text:'PORTABLE'},
    {index:3, text:'LIMITED EDITION'},
  ]
  const [selectCategory,setSelectCategorys]=useState(categories[0].text)//선택한 카테고리 이름을 저장.

  // console.log(selectCategory)

  const [categoryItems,setCategoryItems] =useState([])
  
  useEffect(()=>{
    if(selectCategory==='ALL'){
      setCategoryItems(allProducts)
    }else{
      const categoryItems=allProducts.filter((item)=>(item.category===selectCategory))
      setCategoryItems(categoryItems)
    }
  },[selectCategory,allProducts])
  
  const navigate=useNavigate()
  return (
    <>
    <section className={styles.speakers_title}>
      <p>Enjoy Marshall sound at home and on the road</p>
      </section>
      <section className={styles.speakers_product}>
      <ul className={styles.speakers_product_all_list}>
        {
          categories.map((item)=>(
            <li key={item.index} onClick={()=>{
              setSelectCategorys(item.text)
            }}><Link>{item.text}</Link></li>
          ))
        }
        {/* <li>HOME</li>
        <li>PORTABLE</li>
        <li>LIMITED EDITION</li> */}
      </ul>
      <div className={styles.speakers_product_box}>
      <p>{selectCategory}</p>
      </div>
      </section>
      </>
      )
      }