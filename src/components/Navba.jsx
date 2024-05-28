import React from 'react';
import { useState, useEffect, useRef } from "react";
import logo from '../assets/logo1.png';
import blogo from '../assets/bahcelogo.png';
import img1 from '../assets/flow.webp';
// import img2 from '../assets/fow2.webp';
// import img3 from '../assets/fow3.webp';
// import img4 from '../assets/fow4.webp';
import './navbar.css'
import { Link ,} from 'react-router-dom';
const myArray = [
    { title: 'BİTKİ', subtitle: 'İç Mekan', contents: ['KAKTÜS VE SUCCULENT', 'ÇİÇEKLİ', 'TERARYUM', 'ORKİDELER', 'BONSAİ'], subtitle2: 'Dış Mekan', contents2: ['ÇİÇEKLİ', 'YEŞİL', 'MEYVE', 'SEBZE FİDESİ'] },
    { title: 'SAKSI VE AKSESUARLAR', subtitle: 'SAKSI', contents: ['PLASTİK SAKSI', 'SERAMİK SAKSI', 'TOPRAK SAKSI', 'CAM SAKSI'], subtitle2: 'SAKSI TABAĞI', contents2: ['PLASTİK', 'TOPRAK',], subtitle3: 'AKSESUAR', contents3: ['FERFORJE',], },
    { title: 'BİTKİ BESİNLERİ,GÜBRELER VE TOPRAKLAR', subtitle: 'GÜBRE', contents: ['SIVI', 'KATI'], subtitle2: 'BİTKİSEL TOPRAK', subtitle3: 'TORF', contents3: ['ÇİMLENDİRME TORFU', 'GÜBRELİ TORF', 'ORKİDE TORFU'] },
    { title: 'TOHUM', subtitle: 'DİKİM KİTLERİ', contents: ['SEBZE DİKİM KİTİ', 'MEYVE DİKİM KİTİ'], subtitle2: 'ÇİM', contents2: ['ÇİM TOHUMU'] },


];

const Navba = ({ cartItems, calculateTotalPrice , isLoggedIn, userName, handleLogout,setUserName, setLoggedIn }) => {
    // const navigate = useNavigate();

    const [leftStyle, setLeftStyle] = useState(0);
    // const dropdownImgRef = useRef(null);
    // const navDropdownRef = useRef(null);
    const containerRef = useRef(null)
    const [bannerHeight, setBannerHeight] = useState(0);
    const bannerRef = useRef(null);
    const mobileRef = useRef(null)
    const overlayRef = useRef(null)
    const cartRef = useRef(null)

    const formRef = useRef(null);

    useEffect(() => {
        if (bannerRef.current) {
            const height = bannerRef.current.clientHeight;
            setBannerHeight(height);
        }
    }, [bannerHeight]);

    const handleDisplayClick = () => {
        const marginValue = `-${bannerHeight}px`;
        bannerRef.current.style.marginTop = marginValue;
        bannerRef.current.style.visibility = 'hidden';
    };

    const handleVisible = () => {
        cartRef.current.classList.add('navcart-visible')
        overlayRef.current.style.left = '0vw';
        overlayRef.current.style.visibility = 'visible'
        mobileRef.current.style.left = '0vw';
        mobileRef.current.style.visibility = 'visible'
        overlayRef.current.style.opacity = '1'

    }
    const handleHidden = () => {
        setTimeout(() => {
            cartRef.current.classList.remove('navcart-visible');
        }, 0);
        overlayRef.current.style.left = '-120vw';
        overlayRef.current.style.visibility = 'hidden'
        mobileRef.current.style.left = '-120vw';
        mobileRef.current.style.visibility = 'hidden'
    }




    useEffect(() => {

        const setElement = () => {
            const dropdownImg = document.querySelectorAll('.dropdownimg');
            const containerElement = containerRef.current;
            const containerWidth = containerElement.offsetWidth;
            // const containerWidth = document.querySelector('.categories ul').offsetWidth;
            const navDropdown = document.querySelectorAll('.navdropdown');

            // console.log(containerWidth)
            dropdownImg.forEach((element) => {
                const width = element.offsetWidth;
                element.style.height = width + 'px';
            });

            navDropdown.forEach((element) => {
                element.style.width = containerWidth + 'px';
            });
            const left = window.innerWidth - containerWidth
            const yari = left / 2
            setLeftStyle(yari)
        };





        window.addEventListener('resize', setElement);
        setElement();

        return () => {
            window.removeEventListener('resize', setElement);
        };
    }, []);
    const handleSignVisible = () => {
        formRef.current.classList.add('formref-visible');
    };

    const handleSignHidden = () => {

        formRef.current.classList.remove('formref-visible');
    };

    const handleLinkClick = () => {
        handleSignHidden();
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Tıklanan element formRef veya cartRef içinde değilse, formu ve cart'ı gizleyin
            if (
                formRef.current &&
                !formRef.current.contains(event.target) &&
                cartRef.current &&
                !cartRef.current.contains(event.target)
            ) {
                handleSignHidden();
                handleHidden();
            }
        };

        // Component yüklendiğinde ve kaldırıldığında event listener'ı ekle ve kaldır
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [formRef, cartRef]); // Bağımlılık dizisine yeni ref'i ekleyin





    // ÜYE GİRİŞİ KODLARI BAŞLANGIC





    const handleLogin = () => {
        const username = formRef.current.querySelector('#name').value;
        const password = formRef.current.querySelector('#password').value;

        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            const userData = JSON.parse(userDataString);

            console.log('Giriş Yapılan Kullanıcı:', username);
            console.log('LocalStorage Kullanıcı Bilgileri:', userData);

            if (userData.name === username && userData.password === password) {
                setUserName(username);
                setLoggedIn(true);
                localStorage.setItem('userName', username);
                localStorage.setItem('isLoggedIn', true);
                handleSignHidden();
                // navigate('/account');
            } else {
                console.log('Kullanıcı adı veya şifre hatalı.');
            }
        } else {
            console.log('Kayıtlı kullanıcı bulunamadı.');
        }

    };

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      
        if (storedUserName && storedIsLoggedIn) {
          setUserName(storedUserName);
          setLoggedIn(true);
        }
      }, [setLoggedIn,setUserName]);
  


    // ÜYE GİRİŞİ KODLARI BİTİŞ




    return (
        <>
            <div ref={bannerRef} className='banner'>
                <div className='container'>
                    <div className='bannertext'>
                        <h3>İlk siparişinizde %40'a varan indirim kazanın</h3>
                        <p>ŞİMDİ ALIŞVERİŞ YAP</p>
                        <span onClick={handleDisplayClick} style={{ fontSize: '36px' }}><i className="ri-close-circle-line"></i></span>
                    </div>

                </div>
            </div>
            <div className='navbar'>
                <div className='container'>
                    <div className='navlogo'>
                        <a href="/">
                            <img src={logo} alt="logo" className='img-fluid' />
                        </a>
                    </div>
                    <div className='navsearch' >
                        <div className='searchinput'>
                            <form>
                                <input
                                    type="text"
                                    name="item"
                                    placeholder="Ne aramıştınız?" />
                                <button><i className="ri-search-line"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className='navlinks'>
                        <div className='links'>
                            <Link to='/our-stores'>
                                Mağazalarımız
                            </Link>
                            <Link to='/blog' className='reslink'>
                                <span><img src={blogo} alt='bahceLogo' style={{ height: '30px' }} /></span>
                                Bahçe Blog
                            </Link>
                            <Link to='/account/account-favories' className='reslink'>
                                <span style={{ fontSize: '26px' }}><i className="ri-heart-line" style={{ color: '#FD8406', }}></i> </span>
                                Favorilerim
                            </Link>
                            <div className="sepetim" onClick={handleVisible}>
                                <span style={{ fontSize: '26px' }} className='sepetim-icon'>

                                    {cartItems.length > 0 ? (
                                        <div className="total-product">
                                            <span>{cartItems.length}</span>

                                        </div>
                                    ) : (null)}

                                    <i className="ri-shopping-basket-2-line" style={{ color: '#80B905', }}></i>
                                </span>
                                Sepetim
                                <div className="navcart" ref={cartRef}>
                                    <div className="navcart-title">
                                        <h2 >Sepetim</h2>
                                        <span onClick={handleHidden} ><i className="ri-close-line"></i></span>
                                    </div>
                                    <div className="navcart-item">
                                        {cartItems.length > 0 ? (
                                            <ul>
                                                {cartItems.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="cart-item">
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <img key={index} src={item.source} alt={`Fotoğraf ${index + 1}`} className='cart-item-images' />
                                                                </div>
                                                                <div className="col-8">
                                                                    <Link to="/product">{item.name}</Link>
                                                                    <p>{item.price}₺</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>

                                        ) : (
                                            <div className="empty-cart-message">Sepetiniz boş.</div>
                                        )}
                                    </div>

                                    {parseFloat(calculateTotalPrice()) !== 0 && (
                                        <div className="navcart-total-price">
                                            Toplam Tutar: {calculateTotalPrice()} ₺
                                        </div>
                                    )}

                                    <div className='shopping-cart'>
                                        <Link to='/shopping'>
                                            <button className='shopping-add-cart-btn'>Sepete Git</button>
                                        </Link>

                                    </div>
                                    <a href="/category">
                                        Alışverişe Devam Et
                                    </a>

                                </div>

                            </div>

                            <div className='signin'>
                                {!isLoggedIn ? (
                                    <button className='signin-btn' onClick={handleSignVisible}>GİRİŞ YAP</button>
                                ) : (
                                    <div className='welcome-username'>
                                        <Link to='/account'>
                                        <p>Hoşgeldin, {userName}!</p>

                                        </Link>
                                        <button onClick={handleLogout}><i class="ri-logout-box-line"></i></button>
                                    </div>
                                )}
                                <div className="login-form-inputs" ref={formRef}>
                                    <h1>ÜYE GİRİŞİ</h1>
                                    <label htmlFor="name">Mail Adresi</label>
                                    <input
                                        type="text"
                                        placeholder="Kullanıcı Adı"
                                        id="name"
                                        name="name"
                                    />
                                    <label htmlFor="password">Şifre</label>
                                    <input
                                        type="password"
                                        placeholder="Şifre"
                                        id='password'
                                        name='password'
                                    />
                                    <button className='signin-btn' onClick={handleLogin}>GİRİŞ YAP</button>
                                    <hr />
                                    <a href="/">Şifremi Unuttum</a>
                                    <hr />
                                    {/* Link kullanarak ÜYE OL sayfasına yönlendirme */}
                                    <Link to="/üye-ol" onClick={handleLinkClick}>ÜYE OL</Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="navmobile">
                <div className="mobile-navsearch" >
                    <div className="navtopleft">
                        <p onClick={handleVisible}><i className="ri-menu-2-line"></i></p>
                        <div className='navlogo'>
                            <a href="/">
                                <img src={logo} alt="logo" className='img-fluid' />
                            </a>
                        </div>
                    </div>
                    <div className="navtopright">
                        <a href='/'>
                            <span ><i className="ri-shopping-basket-2-line" ></i>  </span>
                        </a>
                        <div className='signin'>
                            <Link to='/account' className='mobile-user'>
                                <i className="ri-user-line"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="navmobile-input">
                        <div className='navsearch' >
                            <div className=' searchinput mobile-searchinput'>
                                <form>
                                    <input
                                        type="text"
                                        name="item"
                                        placeholder="Ne aramıştınız?" />
                                    <button><i className="ri-search-line"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navmenucollapse" ref={mobileRef}>
                    <div className="navmobilemenu">
                        <div className="navcollapseheader">
                            <div className='navlogo'>
                                <a href="/">
                                    <img src={logo} alt="logo" className='img-fluid' />
                                </a>
                            </div>
                            <span onClick={handleHidden} style={{ fontSize: '36px' }}><i className="ri-close-circle-line"></i></span>
                        </div>

                        {myArray.map((item, index) => {
                            return (
                                <div key={index} className='navmobilecategory'>
                                    <h2>{item.title}</h2>
                                    <div>
                                        <h3>{item.subtitle}</h3>
                                        <ul>
                                            {item.contents.map((content, contentIndex) => (
                                                <li key={contentIndex} className='navmobilelist'>{content}</li>
                                            ))}
                                        </ul>
                                        <h3>{item.subtitle2}</h3>
                                        <ul>
                                            {item.contents2 && item.contents2.map((content, contentIndex) => (
                                                <li key={contentIndex} className='navmobilelist'>{content}</li>
                                            ))}
                                        </ul>
                                        <h3>{item.subtitle3}</h3>
                                        <ul>
                                            {item.contents3 && item.contents3.map((content, contentIndex) => (
                                                <li key={contentIndex} className='navmobilelist'>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                </div>
                <div className="navmenuoverlay" ref={overlayRef}>

                </div>

            </div>

            <div className='categories'>
                <ul ref={containerRef}>
                    {myArray.map((item, index) => {
                        return (
                            <>
                                <li >
                                    <a href='/' className='top-category'>{item.title}</a>
                                    <div className="navdropdown" style={{ left: `${leftStyle}px` }}>
                                        <div className="grid grid-cols-3">
                                            <div className="...">
                                                <p>{item.subtitle}</p>
                                                <ul>
                                                    {item.contents.map((content, contentIndex) => (
                                                        <Link to='/categories'>
                                                            <li key={contentIndex}>{content}</li>
                                                        </Link>
                                                    ))}
                                                </ul>

                                                <p>{item.subtitle2}</p>
                                                <ul>
                                                    {item.contents2 && item.contents2.map((content, contentIndex) => (
                                                        <Link to='/categories'>
                                                            <li key={contentIndex}>{content}</li>
                                                        </Link>
                                                    ))}
                                                </ul>
                                                <p>{item.subtitle3}</p>
                                                <ul>
                                                    {item.contents3 && item.contents3.map((content, contentIndex) => (
                                                        <Link to='/categories'>
                                                            <li key={contentIndex}>{content}</li>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="..."></div>
                                            <div className="...">
                                                <img src={img1} alt="img1" className='img-fluid dropdownimg' />
                                                <Link to='/categories'>
                                                    <button className='allitembtn'>Tüm Ürünleri Gör</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </>
                        );
                    })}


                </ul>
            </div>
        </>

    );
}

export default Navba