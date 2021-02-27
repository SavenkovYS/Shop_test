import React from 'react'

import SiteList from '../components/SiteList'

export default function Header() {
    return (
        <header className="page-header">
            <nav className="main-nav">
                <a className="main-nav__logo">Big Shop</a>
                <div className="main-nav__container">
                    <input 
                        className="main-nav__search" 
                        type="search" 
                        name="search"
                        placeholder="Search"
                    />
                    <SiteList />
                </div>
            </nav>
        </header>
    )
}