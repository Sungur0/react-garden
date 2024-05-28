import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import './account.css';
import AccountInfo from './AccountInfo';
import Orders from './Orders';
import AccountAdress from './AccountAdress';
import Favories from './Favories';
import AccountComments from './AccountComments';
import HelpCenter from './HelpCenter';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';



const Account = ({ activeButton, handleButtonClick }) => {
    const [userData, setUserData] = useState(null);

    const userInformation =
        useMemo(() => [
            { id: 'account-info', label: 'Üyelik Bilgilerim', path: 'account-info', component: <AccountInfo userData={userData} /> },
            { id: 'orders', label: 'Siparişlerim', path: 'orders', component: <Orders /> },
            { id: 'user-adress', label: 'Adreslerim', path: 'account-adress', component: <AccountAdress /> },
            { id: 'favories', label: 'Favorilerim', path: 'account-favories', component: <Favories /> },
            { id: 'gift-cards', label: 'Hediye Kartlarım', },
            { id: 'user-comments', label: 'Yorumlarım', path: 'account-comments', component: <AccountComments /> },
            { id: 'help-center', label: 'Yardım Merkezi', path: 'help-center', component: <HelpCenter /> },
        ], [userData]);



    const navigate = useNavigate();
    console.log(userData)
    useEffect(() => {
        // localStorage'dan kullanıcı bilgilerini çek
        const userDataString = localStorage.getItem('userData');

        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setUserData(userData);
        }
    }, []);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const isAccountPage = currentPath.startsWith('/account/');
        const defaultPage = userInformation[0].path;

        console.log('Current Path:', currentPath);
        console.log('Is Account Page:', isAccountPage);

        if (!isAccountPage || currentPath === '/account/') {
            // Eğer URL '/account/' ya da '/account' ise veya sayfa "/account/" altında değilse,
            // varsayılan sayfaya yönlendir
            navigate(`/account/${defaultPage}`);
        } else {
            // Eğer sayfa yenilendiğinde ve doğru sayfada değilsek, activeButton'u güncelle
            const activeButton = userInformation.find(section => currentPath.startsWith(`/account/${section.path}`));
            if (activeButton) {
                handleButtonClick(activeButton.id);
            }
        }
    }, [navigate, handleButtonClick, userInformation]);


    return (
        <div className="account-infos">
            <div className="container">
                <div className="grid lg:grid-cols-3 grid-cols-1">
                    <div className="...">
                        <div className="account-header-buttons">
                            {userInformation.map((section) => (
                                <Link
                                    key={section.id}
                                    to={`/account/${section.path}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleButtonClick(section.id);
                                        navigate(`/account/${section.path}`);
                                    }}
                                    className={`p-2 ${section.id}-btn ${activeButton === section.id ? 'btnactive' : ''}`}
                                >
                                    <span>
                                        <button className={`${section.id}-btn ${activeButton === section.id ? 'btnactive' : ''}`}>
                                            {section.label}
                                        </button>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="... col-span-2">
                        <Routes>
                            {userInformation.map((section) => (
                                <Route
                                    key={section.id}
                                    path={`/${section.path}`}
                                    element={
                                        <div className={`account-info ${activeButton === section.id ? 'block' : 'hidden'}`}>
                                            {section.component}
                                            {/* {React.cloneElement(section.component, { userData })} */}
                                        </div>
                                    }
                                />
                            ))}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
