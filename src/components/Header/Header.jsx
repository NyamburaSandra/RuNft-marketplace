import React from 'react'
import './header.css'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS =[
    {
        display:'Home',
        url:'./home'
    },
    {
        display:'Market',
        url:'./market'
    },
    {
        display:'Create',
        url:'./create'
    },
    {
        display:'Contact',
        url:'./contact'
    }
    
]

const Header = () => {
  return (
  <header className="header">
  <Container>
    <div className='navigation'>
<div className="logo">
    <h2 className='d-flex gap-2 align-items-center'>
        <span>
            <i class="ri-fire-fill"></i>
        </span>
          RuNfts
    </h2>
</div>
<div className='nav_menu'>
    <ul className="nav_list">
        {
            NAV_LINKS.map((item, index)=>(
                <li className="nav_item" key={index}>
                   <NavLink to ={item.url} className={navClass=>navClass.isActive?'active':''}>{item.display}</NavLink>  
                </li>
            ))}
    </ul>
</div>

<div className='nav_right d-flex align-items-center gap-5'>
    <button className='btn d-flex gap-2 align-items-center'>
    <span>
                <i class="ri-wallet-3-line"></i>
            </span>
        <Link to='/wallet'> Connect Wallet </Link>
  </button>
    <span className='mobile_menu'>
        <i class="ri-menu-line"></i>
    </span>
</div>
    </div>
  </Container>
  </header>
  )
}
export default Header;