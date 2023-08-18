import React from 'react'
import styles from './styles/footer.module.css'
import { BsSpotify } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

export default function Footer() {
  return (
      <footer>
        <div className={styles.footer_contents}>
        <div className={styles.footer_box}>
      
      <div className={styles.footer_ul_box}>
       <div className={styles.footer_header}>
        <a href='/'>Customer service</a>
        </div> 
        <ul className={styles.footer_list}>
          <li>Contact us</li>
          <li>About Mashall group</li>
          <li>Business customers</li>
          <li>Authorised retailers  </li>
          <li>Deliveries</li>
          <li>Exchange and return</li>
          <li>User manuals</li>
          <li>Counterfeit products</li>
          <li>Complaints product</li>
          <li>Help center</li>
        </ul>
        </div>

        <div className={styles.footer_ul_box}>
        <div className={styles.footer_header}>
          <a href='/'>Policies</a>
        </div>
        <ul className={styles.footer_list}>
          <li>Security</li>
          <li>Terms of use</li>
          <li>Terms of purchase</li>
          <li>Payment methods</li>
          <li>Declaration of conformity</li>
          <li>Global warranty</li>
          <li>Privacy policy</li>
          <li>Gdpr</li>
          <li>Cookies</li>
          <li>Commitnent to accessibility</li>
        </ul>
        </div>

        <div className={styles.footer_ul_box}>
        <div className={styles.footer_header}>
          <a href='/'>Editorials</a>
          </div>
        <ul className={styles.footer_list}>
          <li>Never stop listening</li>
          <li>Backstage</li>
          <li>Press room</li>
        </ul>
        </div>

        <div className={styles.footer_ul_box}>
        <div className={styles.footer_header}>
        <a href='/'>Speaker</a>
        </div>
        <ul className={styles.footer_list}>
          <li>Portable bluetooth speakers</li>
          <li>Outdoor speakers</li>
          <li>Party speakers</li>
          <li>Weatherproof speakers</li>
        </ul>
        </div>
        <div className={styles.footer_ul_box}>
        <div className={styles.footer_header}>
        <a href='/'>Safe payments</a>
        </div>
        <ul className={styles.footer_list}>
          <li>We provide the following payment methods</li>
          <ul className={styles.footer_payments}>
          <li><img src='/images/mastercard.svg' alt='마스터카드'/></li>
          <li><img src='/images/Visa.svg' alt='비자'/></li>
          <li><img src='/images/american_express.svg' alt='아메리칸익스프레스'/></li>
          <li><img src='/images/discover.svg' alt='디스커버'/></li>
          <li><img src='/images/Maestro.svg' alt='마에스트로'/></li>
        </ul>
        </ul>
        </div>
        
        </div>
        <div className={styles.footer_box02}>
          <p>ⓒ2023 MASHALL GROUP. ALL RIGHTS RESERVED. ORG. NR 5567574610</p>
          <img src='/images/marshall_logo_white.svg' alt='마샬로고'/>
          <ul>
            <li><BsSpotify/></li>
            <li><BsFacebook/></li>
            <li><AiOutlineInstagram/></li>
            <li><BsPinterest/></li>
          </ul>
        </div>
        </div>
      </footer>
  )
}
