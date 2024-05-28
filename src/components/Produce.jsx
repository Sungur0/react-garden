import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProduceInput from './props/ProduceInput';
import gridimg1 from '../assets/grid4.jpg'
import gridimg2 from '../assets/grid2.jpg'

import img1 from '../assets/seramik.webp'
import img2 from '../assets/seramik2.webp'
import img3 from '../assets/seramik3.webp'
import img4 from '../assets/seramik4.webp'
import img5 from '../assets/seramik5.webp'
import img6 from '../assets/seramik6.webp'
import pdetail from '../assets/plantdetail3.svg'
import pdetail2 from '../assets/plantdetail4.svg'
import './produce.css'

const Produce = () => {
    const productData = [
        { src: img1, title: 'Seramik Saksı5', desc: 'Aechmea Purle Rain', no: 1, color: '#4e172c', price: '50,00₺' },
        { src: img2, title: 'Seramik Saksı6', desc: 'Aechmea Purle Rain', no: 1, color: '#4e172c' },
        { src: img3, title: 'Seramik Saksı3', desc: 'Aechmea Yellow Rain', no: 2, color: '#fff200', price: '70,00₺' },
        { src: img4, title: 'Seramik Saksı4', desc: 'Aechmea Yellow Rain', no: 2, color: '#fff200' },
        { src: img5, title: 'Seramik Saksı2', desc: 'Aechmea Gray Rain', no: 3, color: '#909090' },
        { src: img6, title: 'Seramik Saksı1', desc: 'Aechmea Gray Rain', no: 3, color: '#909090' },
        { src: img6, title: 'Seramik Saksı3', desc: 'Aechmea Gray Rain', no: 3, color: '#909090' },
    ];

    const commentsData = [
        { name: 'Ahmet Tuna', comment: 'Muhteşem bir ürün herkese tavsiye ediyorum', },
        { name: 'Enis Ak', comment: 'Muhteşem bir ürün herkese tavsiye ediyorum', },
        { name: 'Umut Baran', comment: 'Muhteşem bir ürün herkese tavsiye ediyorum', }
    ]
    const colors = ['#909090', '#fff200', '#4e172c']


    const mainImageRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(colors[0]);






    useEffect(() => {
        const updateImage = () => {
            const mainImg = mainImageRef.current.querySelectorAll('.produce-main-img');
        
            mainImg.forEach((element) => {
                const width = element.offsetWidth;
                const aspectRatio = 2;
                const height = width / aspectRatio;

                element.style.height = height + 'px';
            });


        };

        window.addEventListener('resize', updateImage);
        updateImage();
        return () => {
            window.removeEventListener('resize', updateImage);
        };
    }, []);


    const handleThumbnailClick = (index) => {
        setRating(filteredImages[index].no)
        setActiveIndex(index < filteredImages.length ? index : 0);
    };


    const handleColorClick = (color) => {
        console.log(color)
        setSelectedColor(color);
        setActiveIndex(0);
    };


    const filteredImages = productData.filter((image) => image.color === selectedColor);

    console.log(filteredImages)
    const [rating, setRating] = useState(0);

    const handleMouseEnter = (star) => {
        setRating(star);
    };

    const handleMouseLeave = () => {
        if (rating === 0) {
            setRating(0);
        }
    };

    const handleClick = (star) => {
        setRating((prevRating) => (prevRating === star ? 0 : star));
    };
    const StarRating = () => {
        const [rating, setRating] = useState(0);

        const handleClick = (star) => {
            setRating(star);
        };

        return (
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <div
                        key={star}
                        onClick={() => handleClick(star)}
                        style={{
                            display: 'inline-block',
                            cursor: 'pointer',
                            color: star <= rating ? 'var(--secondarycolor)' : 'gray',

                        }}
                    >
                        {star <= rating ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>}

                    </div>
                ))}
            </div>
        );
    };


    const [activeButton, setActiveButton] = useState('explanation');


    const handleButtonClick = (section) => {
        setActiveButton(section);
    };
    return (
        <>
            <div className="produce-main">
                <div className="container">
                    <div className="headlink">
                        <ul>
                            <li><a href="/">Anasayfa</a></li>
                            <Link to='/categories'><li>Ürünler</li></Link>
                            <li>Eşmeya Saksısı</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                        <div className="...">
                            <div className="product-image-detail">
                                <div className="container">
                                    <img ref={mainImageRef} src={filteredImages[activeIndex].src} alt="Main" className='produce-main-img' />
                                    <div className="thumbnails" >
                                        {filteredImages.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image.src}
                                                alt={`img${index + 1}`}
                                                onClick={() => handleThumbnailClick(index)}
                                                className={activeIndex === index ? 'active' : 'deactivate'}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="...">
                            <div className="produce-details">
                                <h1>{filteredImages[activeIndex].title}</h1>
                                <p>{filteredImages[activeIndex].desc}</p>

                                <div className='produce-stars'>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <div
                                            className='product-star'
                                            key={star}
                                            onMouseEnter={() => handleMouseEnter(star)}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClick(star)}
                                            style={{
                                                display: 'inline-block',
                                                cursor: 'pointer',
                                                color: star <= rating ? '#FFD700' : 'gray',
                                            }}
                                        >
                                            {star <= rating ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>}
                                        </div>
                                    ))}
                                </div>
                                <ul>
                                    <li>Ürün Nu. : {productData[activeIndex].no}</li>
                                    <li>Kategori : Ürünler</li>
                                    <li>Mevcut :  <span>Stokta!</span></li>
                                    <li>
                                        <button>
                                            <p><i className="ri-heart-line" style={{ color: '#FD8406', }}></i>Favorilerime Ekle</p>
                                        </button>
                                    </li>
                                    <div className="detail-plant">
                                        <div className="planthow">
                                            <img src={pdetail} alt="deta1" />
                                            <div className="plant-detail-text">
                                                Güneş
                                            </div>
                                        </div>
                                        <div className="planthow">
                                            <img src={pdetail2} alt="deta2" />
                                            <div className="plant-detail-text">
                                                Haftada 1 defa sulayınız
                                            </div>
                                        </div>

                                    </div>
                                    <div className="product-price-detail">
                                        <div className="price-detail-text">
                                            <p className="item-price">98,00₺  </p>
                                            <span>67,90₺</span>
                                        </div>
                                        <div className="product-add">
                                        <ProduceInput />
                                        <div className='shopping-add'>
                                            <button className='shopping-add-btn'>SEPETE EKLE</button>
                                        </div>
                                        </div>
                                       
                                    </div>

                                    <div className="produce-color">
                                        <p>Renk *</p>
                                        <ul>
                                            {colors.map((color, index) => (
                                                <li
                                                    key={index}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => handleColorClick(color)}
                                                    className={selectedColor === color ? 'selected' : ''}
                                                ></li>
                                            ))}
                                        </ul>
                                    </div>

                                </ul>


                            </div>

                        </div>
                    </div>

                </div>

                <div className="shopping-list-banner">

                    <div className="container">
                        <h1>Birlikte alınan ürünler</h1>
                        <div className="shopping-blocks">

                            <div className="shopping-items" >
                                <div className="shopping1 " >
                                    <img src={img1} alt="" />
                                    <p>{productData[2].title}</p>
                                    <span>{productData[2].price}</span>
                                </div>
                                <span className='shopping-icon'>+</span>
                                <div className="shopping1">
                                    <img src={img3} alt="" />
                                    <p>{productData[0].title}</p>
                                    <span>{productData[0].price}</span>
                                </div>
                            </div>

                            <div className="shopping-total-price">
                                <h1>Toplam Fiyat</h1>
                                <p>120,00₺</p>
                                <div className='shopping-add'>
                                    <button className='shopping-add-btn'>SEPETE EKLE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-table">
                    <div className="container">
                        <div class="header-buttons">


                            <button
                                onClick={() => handleButtonClick('explanation')}
                                className={`explanationBtn ${activeButton === 'explanation' ? 'btnactive' : ''}`}
                            >
                                Açıklamalar
                            </button>
                            <button
                                onClick={() => handleButtonClick('comments')}
                                className={`commentsBtn ${activeButton === 'comments' ? 'btnactive' : ''}`}
                            >
                                Yorumlar
                            </button>

                        </div>
                    </div>



                    <div className={`explanationsec ${activeButton === 'explanation' ? 'd-block' : 'd-none'}`}>

                        <div className="container">
                            <div className="explanation">
                                <h1>LOREM IPSUM DOLOR</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam labore, quos est nulla odit error dolorem omnis sed tenetur magni velit aperiam totam iusto ad! Qui, dolore omnis, eius, quaerat iusto magnam deleniti alias suscipit iste voluptatum libero quos. Tempore aliquid error fugiat mollitia autem illum odit perferendis. In at ut reprehenderit quidem? Deserunt, quam ab ex, aliquid adipisci aspernatur soluta unde vel provident impedit, sit vero consequatur corrupti esse quasi odit minus illum ut? Iusto quaerat ea dolor. Hic, ab culpa, repellat odio ullam ducimus architecto amet quos cumque magni, delectus quo fugit maiores facilis similique? Facilis, unde! Eum dolorum doloribus ducimus consequatur fugit maxime architecto totam quisquam et atque ad praesentium sapiente numquam, error perferendis omnis libero officia. Dolore voluptatum vero voluptate modi, impedit sit repellendus laborum! Ducimus dolores, libero dolor architecto eius expedita illo soluta odit nihil sint accusamus numquam assumenda ipsam laudantium eum nisi officiis at.</p>
                                <br />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quo veritatis aut libero explicabo temporibus amet harum laboriosam, aliquam dolore quas eum debitis quae optio similique consectetur quos atque itaque repellat sunt eos mollitia labore iure? Sed, delectus illum! Incidunt nobis officia, id voluptas, ex ad facere dignissimos quos numquam possimus pariatur doloribus illo repellat, obcaecati nihil dolorem veniam tenetur nisi? Fugiat voluptate ratione facere, voluptas beatae dolore eos laborum obcaecati aliquid laudantium consectetur iusto, adipisci id placeat officiis, iste qui eligendi ex dolores minima repellendus quaerat est! Iste reprehenderit ullam corrupti ad nisi, doloremque ab ea? Ut est quasi totam, error molestias ea reprehenderit dolorum odio provident ab mollitia nobis inventore, odit commodi laborum corporis quisquam consectetur itaque accusantium reiciendis aperiam voluptatum minima? Cumque perferendis voluptas quidem dignissimos facere nobis, iusto ullam sed itaque? Tempora, ullam, ducimus pariatur quasi velit voluptatem quos eaque autem inventore deleniti molestiae tenetur unde.</p>
                            </div>

                            <div className="explanation-img">
                                <img src={gridimg2} alt="" />
                            </div>

                            <div className="explanation">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam labore, quos est nulla odit error dolorem omnis sed tenetur magni velit aperiam totam iusto ad! Qui, dolore omnis, eius, quaerat iusto magnam deleniti alias suscipit iste voluptatum libero quos. Tempore aliquid error fugiat mollitia autem illum odit perferendis. In at ut reprehenderit quidem? Deserunt, quam ab ex, aliquid adipisci aspernatur soluta unde vel provident impedit, sit vero consequatur corrupti esse quasi odit minus illum ut? Iusto quaerat ea dolor. Hic, ab culpa, repellat odio ullam ducimus architecto amet quos cumque magni, delectus quo fugit maiores facilis similique? Facilis, unde! Eum dolorum doloribus ducimus consequatur fugit maxime architecto totam quisquam et atque ad praesentium sapiente numquam, error perferendis omnis libero officia. Dolore voluptatum vero voluptate modi, impedit sit repellendus laborum! Ducimus dolores, libero dolor architecto eius expedita illo soluta odit nihil sint accusamus numquam assumenda ipsam laudantium eum nisi officiis at.</p>
                            </div>

                            <div className="explanation2">
                                <div className="explanation">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab fuga perspiciatis quod magni enim culpa ducimus autem. Odio beatae aperiam optio iste dolorum, magnam dolor quibusdam quis repudiandae nobis ab illo ducimus qui, voluptatibus eligendi at, odit eos praesentium laboriosam accusamus quaerat nemo esse expedita nostrum. Consequuntur quisquam laudantium, ipsa vitae dolorem itaque officia sed nam iste nemo at quam ullam accusantium temporibus omnis commodi ad, doloremque, culpa excepturi cumque. Ut consequatur aliquid, cum iste dolor accusantium ipsum reiciendis fugit magni, nisi nesciunt voluptatem libero distinctio labore consequuntur blanditiis corrupti molestiae totam mollitia explicabo? Ratione eaque ex fuga perspiciatis deleniti nulla id sequi! Nihil ab laudantium, dicta eius nemo natus!</p>

                                </div>
                                <div className="explanation-img">
                                <img src={gridimg1} alt="" />

                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={`comments ${activeButton === 'comments' ? 'd-block' : 'd-none'}`}>

                        <div className="container">
                            <div className="comment">
                                <ul>
                                    {commentsData.map((item, index) => (
                                        <div className="comment-item">
                                            <p>{item.name}<span>
                                                <StarRating />
                                            </span></p>
                                            <li
                                                key={index}
                                            >{item.comment}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}


export default Produce