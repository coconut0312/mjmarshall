import React from 'react'
import styles from './styles/mobilemain.module.css'

export default function Livingwithpride() {
  return (
    <>
    <section className={styles.main04}>
        <div className={styles.living_with_pride}>
          <div className={styles.living_img}></div>
          <div className={styles.living_text_box}>
            <p className={styles.living_text_title}>
            LIVING WITH PRIDE
            </p>
            <p className={styles.living_text}>
            1977 was a defining year for gay rights in America, and the sound of disco was part of the movement In 1969, the Stonewall Riots marked the foundation of the modern gay rights movement in the USA. Three years later, following the Eisenstadt v. Baird case, the Supreme Court ruled for free access to birth control. All of a sudden, America was in the midst of a major sexual awakening.
            </p>
            <button className={styles.find_out_more}>FIND OUT MORE</button>
          </div>
        </div>
      </section>
    </>
  )
}