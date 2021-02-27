import React from 'react'

import SiteListItem from './SiteListItem'

export default function SiteList(props) {
    return (
        <ul className="site-list">
            <SiteListItem>Man</SiteListItem>
            <SiteListItem>Woman</SiteListItem>
            <SiteListItem>Kids</SiteListItem>
            <SiteListItem>Bags</SiteListItem>
            <SiteListItem>Watches</SiteListItem>
            <SiteListItem>Toys</SiteListItem>
        </ul>
    )
}