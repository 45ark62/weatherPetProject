import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <header>
            <Link to="/">Главная</Link>
            <Link to="/search-history">История поиска</Link>
        </header>
        <Outlet/>
        <footer>2025</footer>
    </>
    
  )
}

export default Layout