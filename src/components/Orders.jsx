import React from 'react'
import img1 from '../assets/saksı1.jpg'
// import ProduceInput from './props/ProduceInput'

const Orders = () => {
    return (
        <div className="orders">
            <div className="container">
                <div className="grid md:grid-cols-3">
                    <div className="...">
                        <img src={img1} alt="" />
                    </div>
                    <div className="... col-span-2 order-info">
                        <div className="grid grid-cols-1 " >
                            <div className="... order-info-main-top">
                                <div className="grid md:grid-cols-2 order-info-top">
                                    <div className="... order-top-left">
                                        <h2>Eşmeya Saksısı</h2>
                                        <ul>
                                            <li>Sipariş Numarası<span>431413412</span></li>
                                            <li>Oluşturma Tarihi<span>20.09.2021 14:43</span></li>
                                            <li>Durum <span>Sipariş Tamamlandı</span></li>
                                            <li>Ürün Nu<span>6</span></li>
                                            <li>Kategori<span>Ürünler</span></li>
                                            <li>Mevcut<span>Stokta!</span></li>
                                        </ul>
                                    </div>
                                    <div className="... order-top-right">
                                        <h2>50,00₺</h2>
                                        <div className="order-right-durum">
                                            <p>Durum</p>
                                            <span>Kargoya Verildi</span>
                                        </div>
                                        <div className="order-price-input">
                                            <div className="order-product">
                                                <span>Adet :</span>  <div className="input-quantity">
                                                    <input
                                                        type="number"
                                                        // value={quantity}
                                                        min="1"
                                                        max="10"
                                                        // onChange={handleQuantityChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className='shopping-add'>
                                                <button className='shopping-add-btn'>KARGO TAKİP</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="... order-adress-list">
                                <div className="grid md:grid-cols-2">
                                    <div className="... invoice-adress">
                                        <h2>Fatura Adresi</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ullam.</p>
                                        <span>132131251</span>
                                    </div>
                                    <div className="... shipping-adress ">
                                        <h2>Gönderi Adresi</h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, ullam.</p>
                                        <span>132131251</span>
                                    </div>
                                </div>
                            </div>
                            <div className="... order-footer">
                                <div className="repeat-order">
                                    <a href="/">
                                        SİPARİŞİ TEKRARLA
                                    </a>
                                </div>
                                <div className="product-total-price">
                                    <ul>
                                        <li>Ara Toplam <span>40,64 TL</span> </li>
                                        <li>İndirim <span>-9,23 TL</span> </li>
                                        <li>KDV %18 <span>33,5 TL</span> </li>
                                        <li>Kargo <span>0 TL</span> </li>
                                        <li>Toplam <span>50,00 TL</span> </li>
                                    </ul>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders