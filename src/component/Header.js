import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/header.module.css';
import { BiSearch } from 'react-icons/bi';
import { BiHelpCircle } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import { GoPersonFill } from 'react-icons/go'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useAuthContext} from '../context/AuthContext'
import { login, logout, onUserStateChange } from '../api/firebase'

export default function Header() {
  const mainMenus=[
    {index:0,path:'/speakers',text:'SPEAKERS'},
    {index:1,path:'/headphones',text:'HEADPHONES'},
    {index:2,path:'#',text:'60 YEARS OF LOUD'}
  ]
  const {user} = useAuthContext()

  return (
      <header>
        <nav className={styles.mainmenu}>
          <h1 className={styles.logo}><a href='/'><img src='/images/marshall_logo_white.svg' alt="마샬"/></a></h1>
          <ul className={styles.menu_list}>
          {
                    mainMenus.map((item)=>(
                        <li key={item.index}><Link to={item.path}>{item.text}</Link></li>
                    ))
                }
          </ul>
          <ul className={styles.servies_menu}>
            <li><BiSearch/></li>
            <li><BiHelpCircle/></li>
            <li><FaShoppingCart/></li>
            {
              user ?
                <li onClick={logout}><GoPersonFill/>
              </li>
              :
                <li onClick={login}><GoPerson/>
                </li>
            }
            <li>USA/EN<i><RiArrowDownSLine/></i></li>
          </ul>
        </nav>
      </header>
  )
}
