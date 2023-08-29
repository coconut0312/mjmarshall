import React from 'react'
import styles from './styles/mobilemain.module.css'

export default function Discoverspeakers() {
  return (
    <>
    <section className={styles.main02}>
        <div className={styles.title_box}>
          <h3 className={styles.section_title}>DISCOVER OUR SPEAKERS</h3>
          <p className={styles.section_subtitle}>Enjoy Marshall sound at home and on the road</p>
        </div>
        
        <ul className={styles.speakers}>
          <li>
            <div className={styles.speakers_img1}></div>
            <p className={styles.speakers_name}>MIDDLENTON</p>
            <p className={styles.speakers_pay}>$359.99</p>
            </li>
          <li>
          <div className={styles.speakers_img2}>
            <span>LIMITED<i>EDITION</i></span>
          </div>
            <p className={styles.speakers_name}>EMBERTON<br/>DIAMOND JUBILEE</p>
            <p className={styles.speakers_pay}>$179.99</p>
            </li>
          <li>
          <div className={styles.speakers_img3}></div>
            <p className={styles.speakers_name}>WILLEN</p>
            <p className={styles.speakers_pay}>$119</p>
            </li>
          <li>
          <div className={styles.speakers_img4}></div>
            <p className={styles.speakers_name}>ACTTON III</p>
            <p className={styles.speakers_pay}>$329</p>
            </li>
        </ul>
        <ul className={styles.speakers_list}>
          <li></li>
          <li></li>
        </ul>
        <div className={styles.speakers_discover}>
          <ul className={styles.speakers_discover_box}>
            <li>
              <div className={styles.speakers_discover_img1}></div>
              <h2>HOME SPEAKERS</h2>
              <button>DISCOVER THE LINE-UP</button>
            </li>
            <li>
              <div className={styles.speakers_discover_img2}></div>
              <h2>PORTABLE SPEAKERS</h2>
              <button>DISCOVER THE LINE-UP</button>
            </li>
          </ul>
        </div>
        <div className={styles.speakers_visual}>
          <h3 className={styles.all_product}>All speakers</h3>
          <p>View more</p>
        </div>

      </section>
    </>
  )
}
