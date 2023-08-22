import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/mobileheader.module.css';
import { login, logout, onUserStateChange } from '../api/firebase'
import { useAuthContext} from '../context/AuthContext'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function MobileHeader() {
  const mainMenus=[
    {index:0,path:'/speakers',text:'SPEAKERS'},
    {index:1,path:'/headphones',text:'HEADPHONES'},
    {index:2,path:'#',text:'60 YEARS OF LOUD'}
  ]
  const {user} = useAuthContext()

  return (
      <div className={styles.m_header}>
        <nav className={styles.mainmenu}>
          <ul className={styles.menu_list}>
                <li><GiHamburgerMenu/></li>
                <li><h1 className={styles.logo}><a href='/'><img src='/images/marshall_logo_white.svg' alt="마샬"/></a></h1></li>
                {
              user ?
                <li onClick={logout}><BsFillPersonFill/>{user.displayName}
              </li>
              :
                <li onClick={login}><BsFillPersonFill/>
                </li>
            }
          </ul>
        </nav>
      </div>
  )
}