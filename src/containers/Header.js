import React, {useState} from 'react'

import categories from '../data/categories'

export default function Header() {
    const [inputData, setInputData] = useState({search: '', category: 'Collection'})

    function handleChange(event) {
        const {name, value} = event.target
        setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }

    return (
        <header className="page-header">
            <nav className="main-nav">
                <a className="main-nav__logo">Big Shop</a>
                <div className="main-nav__container">
                    <form className="main-nav__form" action="#" method="GET">
                        <label className="main-nav__search-label" htmlFor="search" aria-label="Search"></label>
                        <input 
                            className="main-nav__search" 
                            type="search" 
                            name="search"
                            placeholder="Search"
                            id="search"
                            value={inputData.search}
                            onChange={handleChange}
                        />
                        <select name="category" className="main-nav__list" value={inputData.category} onChange={handleChange}>
                            <option hidden disabled className="main-nav__item">
                                Collection
                            </option> 
                        {categories.map(category => (
                            <option key={category.id} className="main-nav__item">
                                {category.name}
                            </option>  
                        ))}
                        </select>
                    </form>
                </div>
            </nav>
        </header>
    )
}