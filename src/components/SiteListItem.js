import React from 'react'

export default function SiteListItem({children}) {
    return (
        <li className="site-list__item">
            <a href="#" className="site-list__link">{children}</a>
        </li>
    )
}