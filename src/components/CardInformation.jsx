import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CardInformation = () => {
    const [cardNumber, setCardNumber] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 16);
        setCardNumber(inputValue);
    };
    return (
        <div className="card-information">
            <div className="container">
                <h2>Ödeme bilgilerini giriniz</h2>
                <div className="grid lg:grid-cols-3">
                    <div className="col-span-2 ... card-bg">
                        <div className="card-info">
                            <div className="card-number">
                                <label htmlFor="creditCardInput">Kart Numarası</label>
                                <input
                                    id="creditCardInput"
                                    type="text"
                                    value={cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                                <div className="card-owner-name">
                                <label htmlFor="creditCardName">Kart Üzerindeki İsim ve Soyisim</label>
                            <input
                                id="creditCardName"
                                type="text"
                            />
                                </div>
                          
                            <div className="card-input-holder">
                                <div className="card-expration-date">
                                    <label htmlFor="cardExprationDate">Son Kullanma Tarihi</label>
                                    <input type="text" id='cardExprationDate' />
                                </div>
                                <div className="card-cvc">

                                    <label htmlFor="cardExprationDate">Kart Güvenlik Kodu (CVC)</label>
                                    <input type="text" id='cardExprationDate' />
                                    <span>CVC Nedir?</span>
                                </div>
                            </div>
                            
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
                                    <div className="info-form-input">
                                    <input type="checkbox" id='infoForm'  checked/>
                                    <label htmlFor="infoForm">Ön Bilgilendirme Formunu ve Satış Sözleşmesini okudum ve kabul ediyorum   </label>
                                    </div>
                                    <div className="secure-input">

                                    <input type="checkbox" id='secure'  checked/>
                                    <label htmlFor="secure">3D Secure Kullanmak İstiyorum. </label>
                                </div>
                                  
                                </ul>
                                <Link to='/success'>
                                <button className='continue-btn'>SİPARİŞİ TAMAMLA</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInformation