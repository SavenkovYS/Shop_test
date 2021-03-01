import React from 'react'

export default function ProductCard({url, name, price}) {
    return (
        <li className="product-card">
            <div className="product-card__img-container">
                <img src={url} className="product-card__img" />
            </div>
            <div className="product-card__content-container">
                <a href="#" className="product-card__name">{name}</a>
                <p className="product-card__price">{price}</p>
            </div>
            <a href="#" className="product-card__button--likes product-card__button" aria-label="Like">
                <span className="product-card__likes-count">likes</span>
            </a>
            <a href="#" className="product-card__button--comments product-card__button" aria-label="Read Comments">
                 <span className="product-card__comments-count">120</span>
            </a>
            <a href="#" className="product-card__add">Add to Cart</a>
        </li> 
    )
} 