
// import React, { useEffect, useState } from 'react'
// import styles from './styles/speakers.module.css'
// import { Link, useNavigate } from 'react-router-dom'
// import useProducts from '../hooks/useProducts'



// export default function Speakerslist() {
//   const [allProducts]= useProducts();

//   const categories=[
//     {index:0, text:'ALL'},
//     {index:1, text:'HOME'},
//     {index:2, text:'PORTABLE'},
//     {index:3, text:'LIMITED EDITION'},
//   ]
//   const [selectCategory,setSelectCategory]=useState(categories[0].text)//선택한 카테고리 이름을 저장.

//   const [categoryItems,setCategoryItems] =useState([])
  
//   useEffect(()=>{
//     if(selectCategory==='ALL'){
//       setCategoryItems(allProducts)
//     }else{
//       const categoryItems=allProducts.filter((item)=>(item.category===selectCategory))
//       setCategoryItems(categoryItems)
//     }
//   },[selectCategory,allProducts])
  
//   const navigate=useNavigate()

//   return (
//     <>
//     <section className={styles.speakers_title}>
//       <p>Enjoy Marshall sound at home and on the road</p>
//       </section>
//       <section className={styles.speakers_product}>
//       <ul className={styles.speakers_product_all_list}>
//         {
//           categories.map((item)=>(
//             <li
//               key={item.index}
//               onClick={() => setSelectCategory(item.text)}
//               className={`${styles.categoryItem} ${selectCategory === item.text ? styles.selectedCategory : ''}`}
//             >
//               <Link>{item.text}</Link>
//             </li>
//           ))
//         }
//       </ul>
//       <div className={styles.speakers_product_box}>
//       <p>{selectCategory}</p></div>
//       <ul className={styles.speakers_product_home_list}>
//       {categoryItems.map((item) => (
//       <li key={item.id} onClick={() => {
//         navigate(`/speakers/${item.id}`)
//       }}>
//         <Link>
//         <img src={item.image} alt={item.name}/>
//           <ul className={styles.product_color}>
//                 {item.colors.map((color, index) => (
//                   <li key={index}>
//                     <button>{color}</button>
//                   </li>
//                 ))}
//               </ul>
//           <div className={styles.product_text_box}>
//           <span>{item.name}</span>
//           <p>$ {item.price}</p>
//           </div>
//         </Link>
//       </li>
//   ))}
//       </ul>
//       </section>
//     </>
//   )
// }


import React from 'react';

export default function HomeProducts({ categoryItems, navigate }) {
  return (
    <ul>
      {categoryItems.map((item) => (
        <li key={item.id} onClick={() => navigate(`/speakers/${item.id}`)}>
         <img src={item.image} alt={item.name} />
          <div>
            <span>{item.name}</span>
            <p>$ {item.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}