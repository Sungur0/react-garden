import React from 'react'
import { Link } from 'react-router-dom'

const Delivery = () => {
    return (
        <div className="delivery">
            <div className="container delivery-bg">
                <h2>Adres seçiniz</h2>
                <div className="grid lg:grid-cols-3 ">
                    <div className="... col-span-2">
                        <div className="order-adress-list delivery-adress">
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
                        <span className='adress-edit'>Düzenle</span>
                        <div className="new-adress-button">
                            <button className='add-new-adress'>Yeni adres ekle</button>
                        </div>
                    </div>
                    <div className="... col-span-2 lg:col-span-1">
                        <div className="order-summary">
                            <div className="summary-header">
                                <h2>Sipariş Özeti</h2>
                            </div>
                            <div className="summary-product-total-price">
                                <ul>
                                    <li>Ara Toplam <span>90,00 TL</span> </li>
                                    <li>İndirim <span>-9,23 TL</span> </li>
                                    <li>KDV <span>33,5 TL</span> </li>
                                    <div className="coupon-input">
                                        <input type="text" name='coupon' id='coupon' placeholder='Kupon Kodu' />
                                        <button className='shopping-add-btn'>KULLAN</button>
                                    </div>
                                    <li className='total-price'>Toplam <span>50,00 TL</span> </li>
                                </ul>
                                <Link to='/shopping/card-information'> <button className='continue-btn'>DEVAM ET</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery