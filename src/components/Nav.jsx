import React from 'react'
import Paginate from './Paginate'

function Nav() {
  return (
    <nav className='nav-container'>
        <div className="logo-container">
            <img src="../public/logo.webp" alt="dragon ball logo" className='logo'/>
        </div>
        <div className="title">
            <h1>Dragon Ball <span>Super</span></h1>
        </div>
       <Paginate/>
    </nav>
  )
}

export default Nav