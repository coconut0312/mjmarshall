import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import MainWrap from './MainWrap'

export default function Root() {
  return (
    <>
        <Header/>
        <MainWrap>
        <Outlet/>
        </MainWrap>
        <Footer/>
    </>
  )
}
