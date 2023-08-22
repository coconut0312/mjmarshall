import React from 'react'
import { Outlet } from 'react-router-dom'
import MainWrap from './MainWrap'
import MobileHeader from '../component/MobileHeader'
import MobileFooter from '../component/MobileFooter'

export default function Root() {
  return (
    <>
        <MobileHeader/>
        <MainWrap>
        <Outlet/>
        </MainWrap>
        <MobileFooter/>
    </>
  )
}