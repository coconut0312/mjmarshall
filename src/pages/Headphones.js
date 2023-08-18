import React from 'react'
import styles from '../component/styles/headphones.module.css'

export default function Headphones() {
  return (
    <>
      <section className={styles.headphones_title}>
      <p>Boasting the biggest sound in the smallest package, Motif A.N.C. delivers on 
its promise. These true wireless headphones know that 
your music is everything, and that’s why their design puts it first.</p>
      </section>
      <section className={styles.headphones_product}>
      <ul className={styles.headphones_product_all_list}>
        <li className={styles.selected}>ALL</li>
        <li>IN-EAR HEADPHONES</li>
        <li>ON-EAR HEADPHONES</li>
        <li>OVER-EAR HEADPHONES</li>
      </ul>
      <div className={styles.headphones_product_box}>
      <p>IN-EAR HEADPHONES</p>
      </div>
      </section>
      </>
  )
}
