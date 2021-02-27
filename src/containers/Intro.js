import React from 'react'

import PromoItem from '../components/PromoItem'

export default function Intro() {
    return (
        <section className="intro">
            <h2 className="visually-hidden">Hot offer</h2>
            <PromoItem title="Summer Collection" text="25% off" link="Details" />
        </section>
    )
}