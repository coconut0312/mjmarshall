import React from 'react'
import styles from './styles/mobilemain.module.css'

export default function Discoverheadphones() {
  return (
    <>
<section className={styles.main03}>

  <div className={styles.title_box}>
    <h3 className={styles.section_title}>DISCOVER OUR HEADPHONES</h3>
    <p className={styles.section_subtitle}>Head on your next adventure with a set that always sounds GOOD</p>
  </div>
  
  <ul className={styles.headphones}>
    <li>
      <div className={styles.headphones_img1}></div>
      <p className={styles.headphones_name}>MIDDLENTON</p>
      <p className={styles.headphones_pay}>$359.99</p>
      </li>
    <li>
    <div className={styles.headphones_img2}>
    <span className={styles.limited}>LIMITED<i>EDITION</i></span>
    </div>
      <p className={styles.headphones_name}>EMBERTON<br/>DIAMOND JUBILEE</p>
      <p className={styles.headphones_pay}>$179.99</p>
      </li>
    <li>
    <div className={styles.headphones_img3}>
    <span className={styles.limited}>LIMITED<i>EDITION</i></span>
    </div>
      <p className={styles.headphones_name}>WILLEN</p>
      <p className={styles.headphones_pay}>$119</p>
      </li>
    <li>
    <div className={styles.headphones_img4}></div>
      <p className={styles.headphones_name}>ACTTON III</p>
      <p className={styles.headphones_pay}>$329</p>
      </li>
  </ul>
  <ul className={styles.headphones_list}>
    <li></li>
    <li></li>
  </ul>
  <div className={styles.headphones_discover}>
    <ul className={styles.headphones_discover_box}>
      <li>
        <div className={styles.headphones_discover_img1}></div>
        <h2>IN-EAR HEADPHONES</h2>
        <button>DISCOVER THE LINE-UP</button>
      </li>
      <li>
        <div className={styles.headphones_discover_img2}></div>
        <h2>ON-EAR HEADPHONES</h2>
        <button>DISCOVER THE LINE-UP</button>
      </li>
      <li>
        <div className={styles.headphones_discover_img3}></div>
        <h2>OVER-EAR HEADEPHONES</h2>
        <button>DISCOVER THE LINE-UP</button>
      </li>
    </ul>
  </div>
  <div className={styles.headphones_visual}>
    <h3 className={styles.all_product}>All headphones</h3>
    <p>View more</p>
  </div>

</section>
    </>
  )
}