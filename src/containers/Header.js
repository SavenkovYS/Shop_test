import React from 'react'

import categories from '../data/categories'

export default function Header() {
    return (
        <header className="page-header">
            <nav className="main-nav">
                <a className="main-nav__logo">Big Shop</a>
                <div className="main-nav__container">
                    <label className="main-nav__search-label" for="search" aria-label="Search"></label>
                    <input 
                        className="main-nav__search" 
                        type="search" 
                        name="search"
                        placeholder="Search"
                        id="search"
                    />
                    <select className="main-nav__list">
                        <option className="main-nav__item" selected>
                            Collection
                        </option> 
                    {categories.map(category => (
                        <option key={category.id} className="main-nav__item">
                            {category.name}
                        </option>  
                    ))}
                    </select>
                </div>
            </nav>
        </header>
    )
}