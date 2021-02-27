import React from 'react'

export default function FooterListItem({children}) {
    return (
        <li className="page-footer__item">
            <a href="#" className="page-footer__link">{children}</a>
        </li>
    )
}