import React from 'react'
import CardInformation from './CardInformation'
import Delivery from './Delivery'
import ShoppingCart from './ShoppingCart'
import { Link, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useMemo } from 'react';




const Shopping = ({ activeButton, handleButtonClick, cartItems, onItemRemove, calculateTotalPrice, handleQuantityChange }) => {
    const ShoppingCartInformation = useMemo(() => [
        { id: 'shopping-cart', label: <i class="ri-shopping-basket-2-line"></i>, path: 'shopping-cart', component: <ShoppingCart handleQuantityChange={handleQuantityChange} cartItems={cartItems} onItemRemove={onItemRemove} calculateTotalPrice={calculateTotalPrice} /> },
        { id: 'delivery', label: <i class="ri-home-3-fill"></i>, path: 'delivery', component: <Delivery /> },
        { id: 'card-information', label: <i class="ri-bank-card-fill"></i>, path: 'card-information', component: <CardInformation /> },
    ],[calculateTotalPrice, cartItems, handleQuantityChange, onItemRemove])

    const navigate = useNavigate();

    useEffect(() => {
        const currentPath = window.location.pathname;
        const isAccountPage = currentPath.startsWith('/shopping/');
        const defaultPage = ShoppingCartInformation[0].path;

        if (!isAccountPage || currentPath === '/shopping/') {
            navigate(`/shopping/${defaultPage}`);
        } else {
            const activeButton = ShoppingCartInformation.find(section => currentPath.startsWith(`/shopping/${section.path}`));
            if (activeButton) {
                handleButtonClick(activeButton.id);
            }
        }
    }, [navigate, handleButtonClick, ShoppingCartInformation]);


    return (
        <div>
            <div className="button-container">
                <div className="container">

                    {ShoppingCartInformation.map((section) => (
                        <Link
                            key={section.id}
                            to={`${section.path}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleButtonClick(section.id);
                                navigate(`/shopping/${section.path}`);
                            }}
                        >
                            <button className={`${section.id}-btn ${activeButton === section.id ? 'btnactive' : ''}`}>
                                {section.label}
                            </button>

                        </Link>
                    ))}

                </div>
            </div>

            <div className="component-container">

                <Routes>
                    <Route path="/" element={<Outlet />}>
                        {ShoppingCartInformation.map((section) => (
                            <Route key={section.id} path={section.path} element={section.component} />
                        ))}
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Shopping