import React from 'react'

export default function ProductCard({url, name, price}) {
    return (
        <li className="product-card">
            <img src={url} className="product-card__img" />
            <a href="#" className="product-card__name">{name}</a>
            <p className="product-card__price">{price}</p>
            <a href="#" className="product-card__likes trend__button" aria-label="Like">
                <span className="product-card__likes-count">123</span>
            </a>
            <a href="#" className="product-card__comments product-card__button" aria-label="Read Comments">
                 <span className="product-card__comments-count"> 123</span>
            </a>
            <a href="#" className="product-card__comment product-card__button">Add to Cart</a>
        </li> 
    )
} 