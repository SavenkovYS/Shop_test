import React from 'react'

export default function FooterListItem({social}) {
    const className = social ? `social__item--${social}` : ""
    return (
        <li className={`social__item ${className}`}>
            <a href="#" className="social__link" aria-label={social}></a>
        </li>
    )
}