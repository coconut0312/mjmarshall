// import React from 'react'
// import styles from './styles/speakers.module.css'
// import useProducts from '../hooks/useProducts3'

// export default function Limited() {
//   const limitedEditionProducts = useProducts('limitedEdition');
//   return (
//     <>
//     <section className={styles.limited_edition}>
//         <div className={styles.limited_edition_box}>
//           <div className={styles.limited_edition_img}>
//           <span>LIMITED<i>EDITION</i></span>
//           <img src='/images/plp-diamond-jubilee-emberton-v2.png' alt=''/>
//           </div>
//           <div className={styles.limited_edition_text}>
//           <span>EMBERTON<br></br>DIAMOND JUBILEE</span>
//           <p>$179.99</p>
//           </div>
//         </div>
//       </section> 

//     </>
//   )
// }
import React from 'react';

export default function LimitedProducts({ categoryItems, navigate }) {
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
