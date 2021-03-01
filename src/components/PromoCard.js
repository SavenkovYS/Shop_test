import React from 'react'

export default function PromoCard({title, text, link}) {
    return (
        <article className="promo-item">
            <h3 className="promo-item__title">{title}</h3>
            <p className="promo-item__text">{text}</p>
            <a href="#" className="promo-item__link">{link}</a>
        </article>
    )
}