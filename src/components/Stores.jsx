import React from 'react'
import './stores.css'
import { useState } from 'react';
const Stores = () => {
    const storesData = [
        { id: 1, title: 'Bahçe Market Alibeyköy', adress: '5. Levent Mah, Fatih Sultan Mehmet Blv No:33, 34060 Eyüpsultan/İstanbul', tel: '0 212 600 00 00', src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3006.9054699037406!2d28.926720000000003!3d41.092912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1828f9d01fd%3A0x87b0b4cd0bfa8619!2zxLBCQiBCYWjDp2UgTWFya2V0!5e0!3m2!1str!2str!4v1702558096641!5m2!1str!2str" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'},
        { id: 2, title: 'Bahçe Market Ataşehir', adress: 'Atatürk Mahallesi Ataşehir Bulvarı No:1/7 Ataşehir/İSTANBUL', tel: '0 212 600 00 26', src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6022.94840364466!2d29.11708!3d40.992993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac78ff3cccc45%3A0xb9aef8375cb62e62!2sBah%C3%A7e%20Market%20Ata%C5%9Fehir!5e0!3m2!1str!2str!4v1702558160425!5m2!1str!2str" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'}, 
        { id: 3, title: 'Pendik Mini Bahçe Market', adress: 'Yenişehir Mahallesi. Millet cad.No:30 Pendik-İstanbul', tel: '0216 583 00 60', src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6029.13518584669!2d29.307385!3d40.925226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadb0850b2cd93%3A0x366bb5095cf45628!2zQmFow6dlIE1hcmtldCBQZW5kaWsgRmlkYW5sxLHEn8Sx!5e0!3m2!1str!2str!4v1702558176830!5m2!1str!2str" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'},
        { id: 4, title: 'Bahçe Market Alibeyköy', adress: '5. Levent Mah, Fatih Sultan Mehmet Blv No:33, 34060 Eyüpsultan/İstanbul', tel: '0 212 600 00 00', src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3006.9054699037406!2d28.926720000000003!3d41.092912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1828f9d01fd%3A0x87b0b4cd0bfa8619!2zxLBCQiBCYWjDp2UgTWFya2V0!5e0!3m2!1str!2str!4v1702558096641!5m2!1str!2str" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'},
        { id: 5, title: 'Bahçe Market Ataşehir', adress: 'Atatürk Mahallesi Ataşehir Bulvarı No:1/7 Ataşehir/İSTANBUL', tel: '0 212 600 00 26', src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6022.94840364466!2d29.11708!3d40.992993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac78ff3cccc45%3A0xb9aef8375cb62e62!2sBah%C3%A7e%20Market%20Ata%C5%9Fehir!5e0!3m2!1str!2str!4v1702558160425!5m2!1str!2str" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'},
        
    
    ]

    const [activeButton, setActiveButton] = useState(1);
    return (
        <div className="our-stores">
            <div className="container">
                <h2 className='our-stores-title'>Mağazalarımız</h2>
                <div className="grid md:grid-cols-3 ">
                    <div className="... stores-menu">
                        <h2>İSTANBUL</h2>
                        
                        {storesData.map((iframe) => (
                            <>
                            <div className="store-item">
                            <div className="stores-title">
                                {iframe.title}
                                 <button
                                key={iframe.id}
                                onClick={() => setActiveButton(iframe.id)}
                                style={{ margin: '5px' }}
                            >
                               Göster
                            </button>
                            </div>
                            <div className="stores-content">
                            <div className="stores-adress">
                                {iframe.adress}
                            </div>
                            <div className="stores-working">
                                <p>Çalışma Saatleri : 09.00-18.30</p>

                                <a href={`tel:${iframe.tel}`}>{iframe.tel}</a>
                            </div>
                            </div>
                          
                            </div>
                      
                            </>
                       
                        ))}
                    </div>
                    <div className=" ... md:col-span-2 store-frame">
                        {storesData.map((iframe) => (
                            <div
                                key={iframe.id}
                                style={{ display: iframe.id === activeButton ? 'block' : 'none' }}
                            >
                                <iframe
                                    title={`Iframe ${iframe.id}`}
                                    src={iframe.src}
                                    width="850"
                                    height="500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stores