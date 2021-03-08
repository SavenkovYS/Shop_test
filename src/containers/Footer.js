import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import categories from '../data/categories'
import socialList from '../data/socialList'

export default function Footer() {
    return (
        <footer className="page-footer">
            <div className="page-footer__container">
                <p className="page-footer__logo">Big Shop</p>
                <ul className="page-footer__list">
                    {categories.map(category => (
                        <li key={category.id} className="page-footer__item">
                            <a href="#" className="page-footer__link">{category.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="social">
                    <ul className="page-footer__social social__list">
                        {socialList.map(item => (
                            <li key={item.id} className={`social__item social__item--${item.name}`}>
                                <a href="#" className="social__link" aria-label={item.name}>
                                    {ReactHtmlParser(item.img)}
                                </a> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="page-footer__copyright-container">
                <small className="page-footer__copyright-text"> © Copyright 2017. Big Shop by Victor Themes </small>
            </div>
        </footer>
    )
}