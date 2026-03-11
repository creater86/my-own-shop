import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate()

  const [search,setSearch] = useState("")
  const [menuOpen,setMenuOpen] = useState(false)

  const handelclick = () => {
    if(search===''){
      alert('search input required')
      return
    }
    navigate(`/?search=${search}`)
    setSearch('')
  }

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }

  return (
    <>

      {/* SIDEBAR */}

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        <h3>Categories</h3>

        <Link to="/" onClick={()=>setMenuOpen(false)}>Men</Link>

        <Link to="/womenDress" onClick={()=>setMenuOpen(false)}>Women</Link>

        <p>T-Shirts</p>
        <p>Shirts</p>
        <p>Jeans</p>
        <p>Hoodies</p>

      </div>

      {/* OVERLAY */}

      {menuOpen && <div className="overlay" onClick={()=>setMenuOpen(false)}></div>}

      <div className='position'>

        <section className='header'>

          {/* MENU ICON */}

          <HiMenuAlt2 className='menu' onClick={toggleMenu}/>

          <div className='left-side'>
            <h2><Link to="/">MEN</Link></h2>
            <h2><Link to="/womenDress">WOMEN</Link></h2>
          </div>

          <div className='center-logo'>
            <img src='/RuleBreakers.jpeg' alt='WELCOME RULEBREAKER'/>
            <img src='/butterflyb.png' className='butterfly' alt='🦋'/>
          </div>

          <section className='right-container'>

            <section className='search-bar'>
              <input
                className='input'
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                   onKeyDown={(e)=>{
                if(e.key==='Enter')
                navigate(`/?search=${search}`)
                
              }}
              />
              <FaSearch className="search-icon" onClick={handelclick}/>
            </section>

            <FaShoppingCart
              className='cart'
              tabIndex='0'
              onClick={()=>navigate("/navigation")}
           
            />

          </section>

        </section>

      </div>

    </>
  )
}

export default Header