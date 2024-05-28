import React from 'react'

import './category.css'
import MultiRangeSlider from './props/MultiRangeSlider'
import Accordion from './props/Accordion'
import ProduceInput from './props/ProduceInput';
import img1 from '../assets/saksı1.jpg'
import img2 from '../assets/saksı2.jpg'
import img3 from '../assets/fow3.webp'
import { Link } from 'react-router-dom';

const Category = ({ data, addToCart }) => {




    const images = [
        { source: img1, models: [img1, img2, img3, img3], discount: '%80', name: 'Eşmeya Saksısı', price: '67,90' },
        { source: img2, models: [img1, img2, img3, img3], title: 'Öne Çıkanlar', name: 'Saksı2', price: '63,90' },
        { source: img3, models: [img1, img2, img3, img3], discount: '%70', name: 'Eşme', price: '67,90' },
        { source: img3, models: [img1, img2, img3, img3], discount: '%40', name: 'Eşmeya Saksısı', price: '67,90' },
        { source: img2, models: [img1, img2, img3, img3], discount: '%60', name: 'Eşmeya Saksısı' },
        { source: img1, models: [img1, img2, img3, img3], title: 'Öne Çıkanlar', name: 'Eşmeya Saksısı' },
        { source: img2, models: [img1, img2, img3, img3], title: 'Öne Çıkanlar', name: 'Eşmeya Saksısı' },
        { source: img1, models: [img1, img2, img3, img3], discount: '%50', name: 'Eşmeya Saksısı' },
        { source: img3, models: [img1, img2, img3, img3], discount: '%20', name: 'Eşmeya Saksısı' },

    ];

    // const handleAddToCart = (product) => {
    //     addToCart(product);
    // };
    return (
        <div className='itemcategory'>
            <div className="container">

                <div className="headlink">
                    <ul>
                        <li><a href="/">Anasayfa</a></li>
                        <li>Ürünler</li>

                    </ul>
                </div>

                <div className="item-categories">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 ">
                        <div className="... categories-left">


                            {data.map((data) => (
                                <Accordion
                                    key={data.key}
                                    title={data.brand}
                                    data={data.models}
                                    isOpen={data.isOpen}

                                />
                            ))}
                            <div className="filtercon">
                                <p>Fiyat Aralığı</p>
                                <MultiRangeSlider
                                    min={0}
                                    max={1000}
                                />
                                <button className='filter-button'>FİLTRELE</button>
                            </div>
                        </div>
                        <div className="col-span-2 ... categories-main">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5  ">

                                {images.map((image, index) => (
                                    <div key={index} className="... shopping-categories">
                                        <Link to='/product'>
                                            <img key={index} src={image.source} alt={`Fotoğraf ${index + 1}`} className='product-images' />
                                        </Link>
                                        {image.title && <div className='produce-title'>{image.title}</div>}
                                        {image.discount && <div className='produce-discount'>{image.discount}</div>}
                                        <div className="item-about">
                                            <h1>{image.name}</h1>
                                            <p>Aechmea Blue Rain</p>
                                            <ul>
                                                {image.models.map((model, modelIndex) => (
                                                    <li key={modelIndex} >
                                                        <img src={model} alt="models" className='item-model-images' />

                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="item-price">98,00₺   <span>67,90₺</span></p>
                                            <div className="product-input-button">
                                                <ProduceInput onQuantityChange={(quantity) => addToCart(image, quantity)} />
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Category