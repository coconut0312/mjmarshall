import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import MainWrap from './MainWrap'

export default function Root() {
  return (
    <div>
        <Header/>
        <MainWrap>
        <Outlet/>
        </MainWrap>
        <Footer/>
    </div>
  )
}
