import React from 'react'
import './success.css'

const ShoppingSuccess = () => {
    return (
        <div className="shopping-success">
            <div className="container">
            <div className="headlink">
                    <ul>
                        <li><a href="/">Anasayfa</a></li>
                        <li>Sepetim</li>

                    </ul>
                </div>
                <div className="success">
                    <div class="success-checkmark">
                        <div class="check-icon">
                            <span class="icon-line line-tip"></span>
                            <span class="icon-line line-long"></span>
                            <div class="icon-circle"></div>
                            <div class="icon-fix"></div>
                        </div>
                    </div>
                <div className="success-text">
                <h2>Teşekkürler!</h2>
                    <h3>Siparişiniz  Başarıyla  Tamamlanmıştır.</h3>
                    <p>Ödeme metodunuz kabul edildi kabul edildi ve siparişiniz onaylandı.</p>
                    <p>En kısa  sürede sipariş detaylarınızı içeren bir  e-posta alacaksanız.</p>
                </div>
            <div className="succes-button"> 
            <a href="/">
            <button className='continue-btn'>ANA SAYFAYA DÖN</button>

            </a>

            </div>

                </div>
            </div>
        </div>
    )
}

export default ShoppingSuccess