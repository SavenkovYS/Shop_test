import React from 'react'

export default function Intro() {
    return (
        <section className="intro">
            <h2 className="visually-hidden">Hot offer</h2>
            <div className="intro__container">
                <h3 className="intro__subtitle">Summer <span>Collection</span></h3>
                <p className="intro__text">25% <span>off</span></p>
                <a href="#" className="intro__link"><span>Details</span></a>
            </div>
        </section>
    )
}