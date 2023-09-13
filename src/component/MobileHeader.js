import React, { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/mobileheader.module.css';
import { login, logout, onUserStateChange } from '../api/firebase'
import { useAuthContext} from '../context/AuthContext'
import { GoPerson } from 'react-icons/go'
import { GoPersonFill } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { gsap } from 'gsap';

export default function MobileHeader(){
  const mainMenus=[
    {index:0,path:'/mobilespeakers',text:'SPEAKERS'},
    {index:1,path:'/mobileheadphones',text:'HEADPHONES'},
    {index:2,path:'#',text:'60 YEARS OF LOUD'}
  ]
  const { user } = useAuthContext();

 const menuIcon=useRef();
 const closeBtn=useRef();
 const menuWrap=useRef();
 const grayLayer=useRef();
 

 useEffect(()=>{
    menuWrap.current.style.left = '-60vw';
    menuWrap.current.style.display = 'none';
    grayLayer.current.style.display = 'none';
}, []);


const menuOpen = useCallback(() => {
  gsap.set('body,html', { overflow: 'hidden' });
  grayLayer.current.style.display = 'block';
  menuWrap.current.style.display = 'block';
  gsap.to(menuWrap.current, {left: 0, duration: 0.5, ease: 'power1.out' });
}, []);

const menuClose = useCallback(() => {
  grayLayer.current.style.display = 'none';
  gsap.to(menuWrap.current, {left: '-60vw',duration: 0.5,ease: 'power1.out', onComplete: () => {
      menuWrap.current.style.display = 'none';
      gsap.set('body,html', { overflow: 'visible' });
    },
  });
}, []);

  return (
      <div id={styles.m_header}>
        
        <ul id={styles.menu_list}>
                <li ref={menuIcon} onClick={menuOpen}><GiHamburgerMenu/></li>
                <li><h1 className={styles.logo}><a href='/'><img src='/images/marshall_logo_white.svg' alt="마샬"/></a></h1></li>
                {
              user ?
                <li onClick={logout}><GoPersonFill/>
              </li>
              :
                <li onClick={login}><GoPerson/>
                </li>
            }
          </ul>

        <nav id={styles.mobilemenu} ref={menuWrap}>
          <span id={styles.mobileclose_btn} ref={closeBtn} onClick={menuClose}><IoClose/></span>
          <div id={styles.mobilemenu_inner}>
            <p>HELLO</p>
            <p>ENJOY WITH MARSHALL</p>            
            <ul id={styles.mobileloginmenu}>
              <button>WITH GOOGLE</button>
          </ul>
          
          <ul id={styles.mobilemenu_list}>        
                            {
                                mainMenus.map((item)=>(
                                    <li key={item.index}><Link to={item.path}>{item.text}</Link></li>
                                            
                                ))
                            }                    
                         
                        </ul>

          </div>
        </nav>
        <div id={styles.mobile_grayLayer} ref={grayLayer}></div> 
      </div>
  )
}