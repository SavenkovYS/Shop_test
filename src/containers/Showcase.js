import React, {useState} from 'react';

import catalogueCategories from '../data/catalogueCategories'
import products from '../data/showcaseCatalogue'
import ProductCard from '../components/ProductCard'

export default function Showcase() {
    const [currentCategory, setCurrentCategory] = useState('watches')

    function handleClick(evt) {
        setCurrentCategory(evt.target.value.toLowerCase())
    }

    return (
        <section className="showcase">
            <div className="showcase__container">
                <h2 className="showcase__title">Our Showcase</h2>
                <div className="showcase__tab">
                    {catalogueCategories.map(category => (
                        <div key={category.id} >
                            <label 
                            className={`showcase__tab-label ${category.name.toLocaleLowerCase() === currentCategory ? 'showcase__tab-label--active' : ''}`}
                            htmlFor={category.name}>
                                {category.name}
                            </label>
                            <input 
                                onClick={handleClick}
                                className="visually-hidden" 
                                type="radio" 
                                name="tab-button" 
                                id={category.name} 
                                value={category.name}
                            />
                        </div>
                    ))}
                </div> 
                <div className="showcase__list">
                    {products.filter(product => product.category === currentCategory)
                    .map(products => (
                        <ProductCard key={products.id} url={products.img} name={products.name} price={products.price} />
                    ))}
                </div>
            </div>
        </section>
    )
}       