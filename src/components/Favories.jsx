import React from 'react'
import ProduceInput from './props/ProduceInput'
import img1 from '../assets/saksı1.jpg'
import img2 from '../assets/saksı2.jpg'
import img3 from '../assets/fow3.webp'
const Favories = () => {

    const images = [
        { source: img1, models: [img1, img2, img3, img3], discount: '%80' },
        { source: img2, models: [img1, img2, img3, img3], title: 'Öne Çıkanlar' },
        { source: img3, models: [img1, img2, img3, img3], discount: '%70' },
    ]
    return (
        <div className="account-favories">
            <div className="container">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5  ">

                    {images.map((image, index) => (
                        <div className="... shopping-categories">

                            <img key={index} src={image.source} alt={`Fotoğraf ${index + 1}`} className='product-images' />

                            {image.title && <div className='produce-title'>{image.title}</div>}
                            {image.discount && <div className='produce-discount'>{image.discount}</div>}
                            <div className="item-about">
                                <h1>Eşmeya Saksısı</h1>
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
                                    <ProduceInput />

                                    {/* <div className='shopping-add'>
                                        <button className='shopping-add-btn'>SEPETE EKLE</button>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Favories