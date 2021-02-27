import React from 'react';

import TabButton from '../components/TabButton'
import ProductCard from '../components/ProductCard'

export default function Showcase() {
    return (
        <section className="showcase">
            <h2 className="showcase__title">Our Showcase</h2>
            <div className="showcase__tab">
                <TabButton>Fashion</TabButton>
                <TabButton>Furnitures</TabButton>
                <TabButton isActive>Watches</TabButton>
                <TabButton>Mobile</TabButton>
                <TabButton>Cloth</TabButton>
                <TabButton>Toys</TabButton>
            </div> 
            <ul className="showcase__list">
                <ProductCard url="public/img/watch-1.png" name="Fashion Genuine Chain Watch" price="$ 25.36" />
                <ProductCard url="public/img/watch-2.png" name="Fashion Silver Chain Watch" price="$ 35.24" />
                <ProductCard url="public/img/watch-3.png" name="Fashion Black Chain Watch" price="$ 42.32" />
                <ProductCard url="public/img/watch-4.png" name="Fashion Chain Watch" price="$ 23.12" />
                <ProductCard url="public/img/watch-5.png" name="Fashion Lether  Watch" price="$ 15.20" />
                <ProductCard url="public/img/watch-6.png" name="Fashion Forign Watch" price="$ 36.12" />
            </ul>
        </section>
    )
}       