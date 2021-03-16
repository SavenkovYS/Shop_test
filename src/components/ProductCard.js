import React, {useState} from 'react'

export default function ProductCard({url, name, price}) {
    const [isHovered, setIsHovered] = useState(false)

    const addToCart = isHovered && <a href="#" className="product-card__add">Add to Cart</a>
    const likes = isHovered && (
        <a href="#" className="product-card__button--likes product-card__button" aria-label="Like">
            <span className="product-card__likes-count">122</span>
        </a>)

    const comments = isHovered && (
        <a href="#" className="product-card__button--comments product-card__button" aria-label="Read Comments">
            <span className="product-card__comments-count">120</span>
        </a>)

    return (
        <article 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            className="product-card"
        >
            <div className="product-card__img-container">
                <img src={url} className="product-card__img" />
            </div>
            <div className="product-card__content-container">
                <a href="#" className="product-card__name">{name}</a>
                <p className="product-card__price">{price}</p>
            </div>
            {likes}
            {comments}
            {addToCart}
        </article> 
    )
} 