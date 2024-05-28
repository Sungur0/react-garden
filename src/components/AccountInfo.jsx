import React from 'react'

const AccounInfo = ({ userData }) => {
    return (
        <div className="account-info">
            <div className="container">
                <div className="hesap-bilgi">
                    <p>Üye No:</p>
                    <span>6427680</span>
                    <br />
                    <p>Ad Soyad:</p>
                    <span>{userData.name} {userData.surname}</span>
                    <br />
                    <p>Telefon Numarası:</p>
                    <span>+90 545 318 56 45</span>
                    <br />
                    <p>E-mail:</p>
                    <span>{userData.email}</span>

                </div>
            </div>
        </div>
    )
}

export default AccounInfo