import React from 'react'

import ProductCard from '../components/ProductCard'

export default function Trend() {
    return (
        <section className="trend">
            <div className="trend__container">
                <h2 className="trend__title">Trendy Arrivals</h2>
                <ul className="trend__list">
                    <ProductCard url="public/img/bag-1.png" name="Black Genuine Leather Bags " price="$ 23.20" />
                    <ProductCard url="public/img/bag-2.png" name="Fashion Red Leather Bags" price="$ 20.16" />
                    <ProductCard url="public/img/bag-3.png" name="Fashion Genuine Leather Bags" price="$ 30.14" />
                    <ProductCard url="public/img/bag-4.png" name="Simply Leather Bags" price="$ 15.20 " />
                    <ProductCard url="public/img/bag-5.png" name="New Fashion Leather Bags" price="$ 25.20 " />
                    <ProductCard url="public/img/bag-6.png" name="Single Hand Models Bags" price="$ 17.6" />
                </ul>
            </div>
        </section>
    )
}