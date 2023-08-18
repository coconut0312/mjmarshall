import React, { useEffect, useState } from 'react'
import styles from './women.module.css'
import { Link, useNavigate } from "react-router-dom";
import useProducts from '../hook/useProducts';


export default function Women() {
  const [allProducts] = useProducts()

  const categories=[
    {index:0, text:'ALL'},
    {index:1, text:'N°5'},
    {index:2, text:'COCO MADEMOISELLE'}
  ]

  const [selectCategory, setSelectCategorys] = useState(categories[0].text)

  const [categoryItems, setCategoryItems] = useState([])

  useEffect(()=>{
    if(selectCategory==='ALL'){
      const womenItems = allProducts.filter((item)=>(item.gender==="women"))
      setCategoryItems(womenItems)
    }
    else{
      const categoryItems = allProducts.filter((item)=>(item.category===selectCategory))
      setCategoryItems(categoryItems)
    }
  }, [selectCategory, allProducts])

  const navigate = useNavigate()

  return (
    <div className={styles.list_wrap}>
      <div className={styles.list_visual_wrap}>
        <img src='./images/women_visual.png'></img>
        <p id={styles.visual_title}>WOMEN</p>
      </div>
      <div id={styles.cate_menu}>
        <ul id={styles.catelist}>
          {/* <li>ALL</li>
          <li>N°5</li>
          <li>COCO MADEMOISELLE</li> */}
          {
            categories.map((item)=>(
              <li key={item.index} onClick={()=>{
                setSelectCategorys(item.text)
              }}><Link>{item.text}</Link></li>
            ))
          }
        </ul>
      </div>
      
      <div id={styles.prod_list}>
        <ul>
          {categoryItems.map((item)=>(
            <li key={item.id} onClick={() => {
              navigate(`/product_detail/${item.id}`)
          }}>
              <Link>
                <p className={styles.photo}>
                  <img src={item.image}></img>
                </p>
                <p className={styles.title}>{item.name}</p>
                <p className={styles.cate}>{item.cate}</p>
                <p className={styles.start}>starting from</p>
                <p className={styles.price}>{item.price}</p>
                <button className={styles.add_btn}>ADD TO BAG</button>
                {/* <img src='./images/n5parfumspray.png'></img>
                <Link to="/product_detail"><p className={styles.title}>N°5</p></Link>
                <p className={styles.cate}>Eau de Parfum Spray</p>
                <p className={styles.start}>starting from</p>
                <p className={styles.price}>$94</p>
                <button className={styles.add_btn}>ADD TO BAG</button> */}
              </Link>
            </li>
          ))}
          {/* <li>
            <img src='./images/n5_parfum.png'></img>
            <p className={styles.title}>N°5</p>
            <p className={styles.cate}>Eau Première Spray</p>
            <p className={styles.start}>starting from</p>
            <p className={styles.price}>$94</p>
            <button className={styles.add_btn}>ADD TO BAG</button> 
          </li>
       
          <li>
            <img src='./images/n5spray.png'></img>
            <p className={styles.title}>N°5</p>
            <p className={styles.cate}>Parfum</p>
            <p className={styles.start}>starting from</p>
            <p className={styles.price}>$140</p>
            <button className={styles.add_btn}>ADD TO BAG</button>
          </li>
          <li>
            <img src='./images/n5_Toilelet.png'></img>
            <p className={styles.title}>N°5</p>
            <p className={styles.cate}>Eau de Toilette Spray</p>
            <p className={styles.start}>starting from</p>
            <p className={styles.price}>$136</p>
            <button className={styles.add_btn}>ADD TO BAG</button>
          </li>
        
          <li>
            <img src='./images/cocoParfumSpray.png'></img>
            <p className={styles.title}>COCO MADEMOISELLE</p>
            <p className={styles.cate}>Eau de Parfum Spray</p>
            <p className={styles.start}>starting from</p>
            <p className={styles.price}>$94</p>
            <button className={styles.add_btn}>ADD TO BAG</button>
          </li>
          <li>
            <img src='./images/cocoSpray.png'></img>
            <p className={styles.title}>COCO MADEMOISELLE</p>
            <p className={styles.cate}>Eau de Parfum Intense Spray</p>
            <p className={styles.start}>starting from</p>
            <p className={styles.price}>$96</p>
            <button className={styles.add_btn}>ADD TO BAG</button>
          </li> */}
        </ul>
        
      </div>
    </div>
    
  )
}