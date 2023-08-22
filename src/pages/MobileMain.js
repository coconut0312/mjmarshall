import React from 'react'
import MobileMainvisual from '../component/MobileMainvisual'
import MobileDiscovers from '../component/MobileDiscovers'
import MobileDiscoverh from '../component/MobileDiscoverh'
import MobileLiving from '../component/MobileLiving'
import MobileSignup from '../component/MobileSignup'

export default function MobileMain() {
  return (
    <main>
      <MobileMainvisual/>
      <MobileDiscovers/>
      <MobileDiscoverh/>
      <MobileLiving/>
      <MobileSignup/>
    </main>
  )
}
