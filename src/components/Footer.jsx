import React from 'react'
import './footer.css'
import logo from '../assets/logo1.png'
import qr from '../assets/qr.jpeg'
import ibb from '../assets/ibb.png'
import agac from '../assets/agacas.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-4 md:gap-3">
       <div className="col-span-2 ... footer-add">
        <div className="container">
          <div className="footercontact">
          <img src={logo} alt="logo" className='img-fluid'  />
          </div>
          <div className="footercontact">
          <i class="ri-home-2-line"></i>
          <p>Adres: 5.Levent Mahallesi Fatih Sultan Mehmet Bulvarı No:33 Alibeyköy-Eyüpsultan / İstanbul, Türkiye</p>
          </div>
          <div className="footercontact">
          <i class="ri-phone-line"></i>
          <a href="tel:">0850 533 10 30</a>
          </div>
          <div className="footercontact">
          <i class="ri-mail-line"></i>
          <a href="mailto:info@bahcemarket.com">info@bahcemarket.com</a>
          </div>

        </div>
       </div>
       <div className="col-span-2 sm:col-span-2  md:col-span-2 lg:col-span-1 ...">
        <div className="footer-links">
        <div className="container">
          <div className='fothead'><strong>KATEGORİLER</strong></div>
          
            <ul>
              <li><a href="/">Anasayfa</a></li>
              <li><a href="/">Alışveriş</a></li>
              <li><a href="/">Yeni ürünler</a></li>
              <li><a href="/">Kurumsal</a></li>
              <li><a href="/">İletişim</a></li>
            </ul>
          </div>
        </div>
       </div>
       <div className="col-span-2 sm:col-span-2  md:col-span-2 lg:col-span-1 ...">
        <div className="footer-links">
          <div className="container">
          <div className='fothead'><strong>YARDIM</strong></div>
            <ul>
              <li><a href="/">Gizlilik ve Güvenlik Politikası</a></li>
              <li><a href="/">Çerez Politikası</a></li>
              <li><a href="/">KVKK Açık Rıza Metni</a></li>
              <li><a href="/">KVKK Aydınlatma Metni</a></li>
            </ul>
          </div>
        </div>
       </div>

       <div className="col-span-2 sm:col-span-2  md:col-span-2 lg:col-span-2 ... fotlogos ">
          <div className="container footerlogo">
            <img src={qr} alt="qr kod" className='img-fluid'/>
            <a href="https://ibb.istanbul/" target='blank'><img src={ibb} alt="ibb" className='img-fluid'/></a>
            <a href="https://agac.istanbul/" target='blank'><img src={agac} alt="agac istanbul" className='img-fluid'/></a>
          </div>
       </div>
</div>


        
      </div>
     
    </div>
  )
}

export default Footer