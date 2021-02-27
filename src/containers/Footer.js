import React from 'react'

import FooterListItem from '../components/FooterListItem'
import SocialListItem from '../components/SocialListItem'

export default function Footer() {
    return (
        <footer className="page-footer">
            <p className="page-footer__logo">Big Shop</p>
            <ul className="page-footer__list">
                <FooterListItem>Man</FooterListItem>
                <FooterListItem>Woman</FooterListItem>
                <FooterListItem>Kids</FooterListItem>
                <FooterListItem>Bags</FooterListItem>
                <FooterListItem>Watches</FooterListItem>
                <FooterListItem>Toys</FooterListItem>
            </ul>
            <ul className="page-footer__social social__list">
                <SocialListItem social="facebook" />
                <SocialListItem social="google" />
                <SocialListItem social="instagram" />
                <SocialListItem social="twitter" />
            </ul>
            <small className="page-footer__copyright"> © Copyright 2017. Big Shop by Victor Themes </small>
        </footer>
    )
}