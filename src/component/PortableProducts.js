// import React from 'react'
// import styles from './styles/speakers.module.css'
// import useProducts from '../hooks/useProducts2'

// export default function Portable() {
//   const portableProducts = useProducts('portable');
//   return (
//     <>
//         {/* <div className={styles.speakers_promo}>
//         <p>Legendary sound, built for the road</p>
//         <span>The lastest member of our portaable line-up has arrived</span>
//       </div> */}
//       <section className={styles.speakers_product}>
//       <div className={styles.speakers_product_box}>
//       <ul className={styles.speakers_product_portable_list}>
//         <li>
//           <img src='/images/middleton-black.png'alt=''/>
//           <ul className={styles.product_color}>
//             <li><button>black</button></li>
//             <li><button>cream</button></li>
//           </ul>
//           <div className={styles.product_text_box}>
//           <span>MIDDLETON</span>
//           <p>$ 299.99</p>
//           </div>
//         </li>
//         <li>
//           <img src='/images/marshall-willen-black-brass.png'alt=''/>
//           <ul className={styles.product_color}>
//             <li><button>black</button></li>
//             <li><button>cream</button></li>
//           </ul>
//           <div className={styles.product_text_box}>
//           <span>WILLEN</span>
//           <p>$ 119</p>
//           </div>
//         </li>
//         <li>
//           <img src='/images/marshall-emberton-ii-black-brass.png'alt=''/>
//           <ul className={styles.product_color}>
//               <li><button>black</button></li>
//               <li><button>cream</button></li>
//           </ul>
//           <div className={styles.product_text_box}>
//           <span>EMBERTON II</span>
//           <p>$ 169.99</p>
//           </div>
//         </li>
//         <li>
//         <img src='/images/Thumbnail_Emberton_medium.png'alt=''/>
//         <ul className={styles.product_color}>
//             <li><button>black</button></li>
//             <li><button>white</button></li>
//           </ul>
//           <div className={styles.product_text_box}>
//           <span>EMBERTON</span>
//           <p>$ 149.99</p>
//           </div>
//         </li>
//         <li>
//         <img src='/images/marshall-stockwell-ii-black-brass.png'alt=''/>
//           <div className={styles.product_text_box}>
//           <span>STOCKWELL II</span>
//           <p>$ 219.99</p>
//           </div>
//         </li>
//         <li>
//         <img src='/images/marshall-kilburn-ii-black-brass.png'alt=''/>
//         <ul className={styles.product_color}>
//             <li><button>black</button></li>
//             <li><button>white</button></li>
//           </ul>
//           <div className={styles.product_text_box}>
//           <span>KILBURN II</span>
//           <p>$ 299.99</p>
//           </div>
//         </li>
//         <li>
//         <img src='/images/marshall-tufton-black-brass-portable-speaker.png'alt=''/>
//           <div className={styles.product_text_box}>
//           <span>TUFTON</span>
//           <p>$ 449.99</p>
//           </div>
//         </li>
//       </ul>
//       </div>
//       </section>
//     </>
//   )
// }

import React from 'react';

export default function PortableProducts({ categoryItems, navigate }) {
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