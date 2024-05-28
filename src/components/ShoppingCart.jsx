import React from 'react'
import './shoppingcart.css'
import { Link } from 'react-router-dom'
const ShoppingCart = ({ cartItems, onItemRemove, calculateTotalPrice, handleQuantityChange }) => {
    return (
        <div className="shopping-cart">
            <div className="container shopping-cart-bg">
                <h2>Tüm ürünlerin seçimini kaldır</h2>
                <div className="row">
                    <div className="col-md-9">
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>
                                        <div className="item-cart-products">
                                            <div className="cart-image">
                                                <img key={index} src={item.source} alt={`Fotoğraf ${index + 1}`} className='cart-item-images' />
                                            </div>
                                            <div className=" shopping-cart-order">
                                                <div className="cart-order-header">
                                                    <h2>{item.name}</h2>

                                                </div>
                                                <ul>
                                                    <li>Ürün Nu<span>6</span></li>
                                                    <li>Kategori<span>Ürünler</span></li>
                                                    <li>Mevcut<span>Stokta!</span></li>
                                                </ul>
                                            </div>
                                            <div className=" cart-order-price">
                                                <div className="card-order-button">
                                                    <h2>{item.price}</h2>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                                                        min="1"
                                                        max="10" // veya başka bir değer
                                                    />
                                                </div>

                                                <button onClick={() => onItemRemove(index)}><span >Sil<i className="ri-close-circle-line"></i></span></button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        ) : (
                            <div className="empty-cart-message">Sepetiniz boş.</div>
                        )}
                    </div>
                    <div className="col-md-3">
                        {cartItems.length > 0 ? (

                            <div className="order-summary">
                                <div className="summary-header">
                                    <h2>Sipariş Özeti</h2>
                                </div>
                                <div className="summary-product-total-price">
                                    <ul>


                                        <li>Ara Toplam <span>{calculateTotalPrice()}</span> </li>
                                        <li>İndirim <span>-9,23 TL</span> </li>
                                        <li>KDV <span>33,5 TL</span> </li>
                                        <div className="coupon-input">
                                            <input type="text" name='coupon' id='coupon' placeholder='Kupon Kodu' />
                                            <button className='shopping-add-btn'>KULLAN</button>
                                        </div>


                                        <li className='total-price'>Toplam <span> {parseFloat(calculateTotalPrice()) !== 0 && (
                                            <>
                                                {calculateTotalPrice()}
                                            </>
                                        )}</span> </li>
                                    </ul>
                                    <Link to='/shopping/delivery'> <button className='continue-btn'>DEVAM ET</button></Link>
                                </div>
                            </div>
                        ) : (
                            null
                        )}



                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart