import React from 'react'
import styles from './styles/main.module.css'

export default function MobileSignup() {
  return (
    <>
    <section className={styles.main05}>
        
        <div className={styles.sign_up}>
          <div className={styles.sign_up_text_box}>
            <p className={styles.sign_up_title}>SIGN UP OUR NEWSLETTER</p>
            <p className={styles.sign_up_text}>Get 10% off on your first order.<br></br>
Coupon shared through email.</p>
            {/* <input className={styles.sign_up_email} type='text'>your email address goes here</input> */}
            <input className={styles.newsletter_form_email} type="email" placeholder="Your email address goes here" name="newsletterEmail" required=""></input>
            <button className={styles.sign_up_email_btn} type='submit'>SUBSCRIBE</button>
          </div>
          <div className={styles.privacy_policy}>
            <p className={styles.privacy_policy_text}>By subscribing you accept our</p>
            <a href='https://www.marshallheadphones.com/us/en/privacy-policy/privacy-policy.html'>Privacy policy.</a>
          </div>
        </div>
        
        </section>
    </>
  )
}
