import React from 'react'
import NavBarAbout from '../NavBars/NavBarAbout/NavBarAbout';
import NavBarSearch from '../NavBars/NavBarSearch/NavBarSearch';
import { Outlet } from 'react-router-dom';
const HomeBeforeLogin = () => {
  return (
    <div>
<NavBarAbout/>
<NavBarSearch/>
<Outlet/>
    </div>
  )
}

export default HomeBeforeLogin
