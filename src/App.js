'use client'
import './App.css';
import { useState, useEffect } from 'react';
import Navba from './components/Navba';
import Stores from './components/Stores';
import Slider from './components/Slider';
import Main from './components/Main';
import Blog from './components/Blog'
import Footer from './components/Footer'
import Blogpg from './components/Blogpg'
import BlogInfo2 from './components/ BlogInfo2';
import Category from './components/Category'
import Product from './components/Produce';
import RegisterForm from './components/RegisterForm';
import Account from './components/Account';
import Orders from './components/Orders';
import AccountInfo from './components/AccountInfo';
import Shopping from './components/Shopping';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import './components/responsive.css'
import ShoppingSuccess from './components/ShoppingSuccess';


function App() {

  const data = [
    { key: 1, brand: 'Ürün Tipi', models: ['Lorem', 'Camry', 'Lorem', 'Lorem', 'Camry', 'Lorem', 'Lorem', 'Camry', 'Lorem', 'Lorem', 'Camry', 'Lorem'] },
    { key: 2, brand: 'İç Mekan', models: ['Yapay Çiçek', 'Doğrudan güneş ışığı', 'Yapay Çiçek', 'Doğrudan güneş ışığı', 'Lorem', 'Camry', 'Lorem', 'Lorem', 'Camry', 'Lorem'] },
    { key: 3, brand: 'Ürün Boyutu', models: ['Lorem', 'Camry', 'Lorem'] },
    { key: 4, brand: 'Renk', models: ['Lorem', 'Camry', 'Lorem'] },
    { key: 5, brand: 'Marka', models: ['Lorem', 'Camry', 'Lorem'] },
    { key: 6, brand: 'Çeşit', models: ['Lorem', 'Camry', 'Lorem'] },
  ];

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (sectionId) => {
    setActiveButton(sectionId);
  };
  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const [errorMessage, setErrorMessage] = useState('');
  const addToCart = (item, quantity) => {
    // Miktarın üst sınıra ulaşıp ulaşmadığını kontrol et
    const maxQuantity = 10;

    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      // Eğer ürün zaten sepette varsa ve yeni miktar üst sınırdan büyükse
      if (existingItem.quantity + quantity > maxQuantity) {
        // Uyarı ver veya işlem yapma
        setErrorMessage(`Miktar, maksimum adede (${maxQuantity}) ulaştı.`);
      } else {
        // Ürün sepette varsa ve yeni miktar üst sınırdan küçükse
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        );
        setCartItems(updatedCartItems);
        setErrorMessage(''); // Yeni ürün eklendiğinde hata mesajını temizle
      }
    } else {
      // Eğer ürün sepette yoksa ve yeni miktar üst sınırdan büyükse
      if (quantity > maxQuantity) {
        // Uyarı ver veya işlem yapma
        setErrorMessage(`Maksimum adede (${maxQuantity}) ulaşıldı.`);
      } else {
        // Eğer ürün sepette yoksa ve yeni miktar üst sınırdan küçükse
        setCartItems([...cartItems, { ...item, quantity }]);
        setErrorMessage(''); // Yeni ürün eklendiğinde hata mesajını temizle
      }
    }
  };


  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
    }
  };

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace(',', '.')), 0);
    return totalPrice.toFixed(2);
  };
  const handleCloseErrorMessage = () => {
    setErrorMessage('');
  };


  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState();

  const handleLogout = () => {
    // localStorage.removeItem('userData'); // Bu satırı kaldırarak veya yorum satırına alarak localStorage'dan silmeyebilirsiniz.
    setUserName('');
    setLoggedIn(false);
};
  return (
    <>
      <Navba cartItems={cartItems} calculateTotalPrice={calculateTotalPrice}  isLoggedIn={isLoggedIn} userName={userName} handleLogout={handleLogout} setUserName={setUserName} setLoggedIn={setLoggedIn} />
      <Routes >
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Main />
              <Blog />
              <Outlet />

            </>
          }
        />
        <Route path='/our-stores' element={<Stores />} />
        <Route
            path="/account/*"
            element={isLoggedIn ? <Account userName={userName}  activeButton={activeButton} handleButtonClick={handleButtonClick}/> : <Navigate to="/" />}
          />
        <Route
          path="/account/*"
          element={<Account activeButton={activeButton} handleButtonClick={handleButtonClick} />}
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account-info" element={<AccountInfo />} />

        <Route path="/blog" element={<Blogpg />} />
        <Route path='/bitkilerde-saksi-degisimi' element={<BlogInfo2/>}/>
        <Route path="/categories" element={<Category data={data} addToCart={addToCart} />} />
        <Route path='/product' element={<Product />} />
        <Route path='/üye-ol' element={<RegisterForm/>}/>
        <Route
          path="/shopping/*"
          element={<Shopping activeButton={activeButton} handleButtonClick={handleButtonClick} cartItems={cartItems} onItemRemove={removeItem} calculateTotalPrice={calculateTotalPrice}  handleQuantityChange={handleQuantityChange}/>}
        />
        <Route path='shopping-cart' element={<ShoppingCart />} />
        <Route path='/success' element={<ShoppingSuccess />} />

      </Routes>
      <Footer />
      {errorMessage && (
        <>
        <div className="overlay" onClick={handleCloseErrorMessage}></div>
        <div className="error-message">
          <div className='box'>
          <div class="circle-border"></div>
          <div class="circle">
            <div class="error"></div>
          </div>
          </div>
          {errorMessage}
          <div className='error-close'>
          <button onClick={handleCloseErrorMessage}><i className="ri-close-circle-line"></i></button>
          </div>
        </div>
        </>
      )}
      <div className="footer-bottom">
        2021 Bahçemarket.
        <a href="/">Gizlilik ve Güvenlik Politikası</a>
        <a href="/">İptal ve İade Koşulları</a>

      </div>

    </>
  );
}

export default App;

