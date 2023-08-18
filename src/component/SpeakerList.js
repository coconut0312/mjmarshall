
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/speakers.module.css';
import useProducts from '../hooks/useProducts';

export default function Speakerslist() {
  const [allProducts] = useProducts();

  const categories = [
    { index: 0, text: 'ALL' },
    { index: 1, text: 'HOME' },
    { index: 2, text: 'PORTABLE' },
    { index: 3, text: 'LIMITED EDITION' },
  ];
  const [selectCategory, setSelectCategory] = useState(categories[0].text);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    if (selectCategory === 'ALL') {
      setCategoryItems(allProducts);
    } else {
      const categoryItems = allProducts.filter((item) => item.category === selectCategory);
      setCategoryItems(categoryItems);
    }
  }, [selectCategory, allProducts]);

  const navigate = useNavigate();

  return (
    <>
      <section className={styles.speakers_title}>
        <p>Enjoy Marshall sound at home and on the road</p>
      </section>
      <section className={styles.speakers_product}>
        <ul className={styles.speakers_product_all_list}>
          {categories.map((item) => (
            <li
              key={item.index}
              onClick={() => setSelectCategory(item.text)}
              className={`${styles.categoryItem} ${selectCategory === item.text ? styles.selectedCategory : ''}`}
            >
              <Link>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.speakers_product_box}>
          <p>{selectCategory}</p>
        </div>
      </section>

      <ul className={styles.speakers_product_home_list}>
      
      {categoryItems.map((item) => (
      
      <li key={item.id} onClick={() => {
        navigate(`/productdetail/${item.id}`)
      }}>
        <Link>
        <img src={item.image} alt={item.name}/>
        <ul className={styles.product_color}>
        </ul>
          <div className={styles.product_text_box}>
          <span>{item.name}</span>
          <p>$ {item.price}</p>
          </div>
        </Link>
      </li>
  ))}
      </ul>
    </>
  );
}
{/*초기 html */}

     {/* <li>
         <Link to='/productdetail'>
          <img src='/images/marshall-acton-iii-black.png'alt=''/>
          <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>cream</button></li>
            <li><button>brown</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>ACTON III</span>
          <p>$ 279.99</p>
          </div>
          </Link>
        </li> 
        <li>
          <img src='/images/marshall-stanmore-iii-black.png'alt=''/>
          <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>cream</button></li>
            <li><button>brown</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>STANMORE III</span>
          <p>$ 379.99</p>
          </div>
        </li>
        <li>
          <img src='/images/marshall-woburn-iii-black.png'alt=''/>
          <ul className={styles.product_color}>
              <li><button>black</button></li>
              <li><button>cream</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>WOBURN III</span>
          <p>$ 579.99</p>
          </div>
        </li>
        <li>
        <img src='/images/marshall-acton-ii-black.png'alt=''/>
        <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>white</button></li>
            <li><button>brown</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>ACTON II BLUETOOTH</span>
          <p>$ 279.99</p>
          </div>
        </li>
        <li>
        <img src='/images/pl-marshall-speakers-stanmore-ii-black.png'alt=''/>
        <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>white</button></li>
            <li><button>brown</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>STANMORE II BLUETOOTH</span>
          <p>$ 379.99</p>
          </div>
        </li>
        <li>
        <img src='/images/pl-marshall-speakers-woburn-ii-black.png'alt=''/>
        <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>white</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>WOBURN II BLUETOOTH</span>
          <p>$ 549.99</p>
          </div>
        </li>
        <li>
        <img src='/images/Uxbridge-black-PLP-Google.png'alt=''/>
        <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>white</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>UXBRIDGE VOICE<br></br>WITH GOOGLE ASSISTANT</span>
          <p>$ 219.99</p>
          </div>
        </li>
        <li>
        <img src='/images/Uxbridge-Balck-PLP-Alexa.png'alt=''/>
        <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>white</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>UXBRIDGE VOICE<br></br>WITH AMAZON ALEXA</span>
          <p>$ 219.99</p>
          </div>
        </li> */} 


        {/* <section className={styles.speakers_product}> */}
    {/* <div className={styles.speakers_product_box}> */}
      {/* <ul className={styles.speakers_product_portable_list}>
        <li>
          <img src='/images/middleton-black.png'alt=''/>
          <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>cream</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>MIDDLETON</span>
          <p>$ 299.99</p>
          </div>
        </li>
        <li>
          <img src='/images/marshall-willen-black-brass.png'alt=''/>
          <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>cream</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>WILLEN</span>
          <p>$ 119</p>
          </div>
        </li>
        <li>
          <img src='/images/marshall-emberton-ii-black-brass.png'alt=''/>
          <ul className={styles.product_color}>
              <li><button>black</button></li>
              <li><button>cream</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>EMBERTON II</span>
          <p>$ 169.99</p>
          </div>
        </li>
        <li>
        <img src='/images/Thumbnail_Emberton_medium.png'alt=''/>
        <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>white</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>EMBERTON</span>
          <p>$ 149.99</p>
          </div>
        </li>
        <li>
        <img src='/images/marshall-stockwell-ii-black-brass.png'alt=''/>
          <div className={styles.product_text_box}>
          <span>STOCKWELL II</span>
          <p>$ 219.99</p>
          </div>
        </li>
        <li>
        <img src='/images/marshall-kilburn-ii-black-brass.png'alt=''/>
        <ul className={styles.product_color}>
            <li><button>black</button></li>
            <li><button>white</button></li>
          </ul>
          <div className={styles.product_text_box}>
          <span>KILBURN II</span>
          <p>$ 299.99</p>
          </div>
        </li>
        <li>
        <img src='/images/marshall-tufton-black-brass-portable-speaker.png'alt=''/>
          <div className={styles.product_text_box}>
          <span>TUFTON</span>
          <p>$ 449.99</p>
          </div>
        </li>
      </ul> */}
      {/* </div> */}
      {/* </section> */}
        
        
        {/* <section className={styles.limited_edition}>
        <div className={styles.limited_edition_box}>
          <div className={styles.limited_edition_img}>
          <span>LIMITED<i>EDITION</i></span>
          <img src='/images/plp-diamond-jubilee-emberton-v2.png' alt=''/>
          </div>
          <div className={styles.limited_edition_text}>
          <span>EMBERTON<br></br>DIAMOND JUBILEE</span>
          <p>$179.99</p>
          </div>
        </div>
      </section> 
     */}


     
      {/* {!isLimitedCategory && (
          <Link to="/speakers/`${item.id}`">
            <section className={styles.limited_edition}>
            <div className={styles.limited_edition_box}>
          <div className={styles.limited_edition_img}>
          <span>LIMITED<i>EDITION</i></span>
          <img src='/images/plp-diamond-jubilee-emberton-v2.png' alt=''/>
          </div>
          <div className={styles.limited_edition_text}>
          <span>EMBERTON<br></br>DIAMOND JUBILEE</span>
          <p>$179.99</p>
          </div>
        </div>
        </section>
          </Link>
        )} */}