import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registerform.css'
const RegisterForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleRegister = () => {
        if (password !== confirmPassword) {
            setError('Şifreler eşleşmiyor.');
            return;
        }
    
        // localStorage'dan mevcut kullanıcı verilerini al
        const existingUserDataString = localStorage.getItem('userData');
        const existingUserData = existingUserDataString ? JSON.parse(existingUserDataString) : {};
    
        // Aynı isimde başka bir kullanıcı var mı kontrol et
        if (existingUserData[name]) {
            setError('Bu isimde zaten bir kullanıcı var.');
            return;
        }
    
        setError('');
    
        const userData = {
            id: crypto.randomUUID(),
            name,
            surname,
            email,
            password,
        };
    
        // Yeni kullanıcıyı mevcut kullanıcı verilerine ekle
        existingUserData[name] = userData;
    
        // Yeni kullanıcı verilerini localStorage'a kaydet
        localStorage.setItem('userData', JSON.stringify(existingUserData));
    
        console.log('User registered:', userData);
    
        // Kayıt işlemi bittikten sonra istediğiniz sayfaya yönlendirme yapabilirsiniz
        navigate('/');
    };
    const clearError = () => {
        // Hata durumu temizle
        setError('');
    };
    return (
        <div className="register-form" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 "> 
                        <div className='register-form-inputs ' >
                            <label>İsim:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                            <label>Soyad:</label>
                            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}  />

                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Şifre:</label>

                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}   onClick={clearError}/>
                            <label>Şifre Tekrar:</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onClick={clearError}
                            />
                            {error && <div className="error-message1">{error}</div>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bilgi-form">
                            <p>Kişisel Verilerin Korunması Hakkında Aydınlatma Metni için tıklayın. Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak ve tarafınıza sunulan Aydınlatma metni kapsamında işlenmektedir. Üye olmanız halinde kişisel verilerinizin aydınlatma metni kapsamında işleneceğini ve aktarılacağını kabul ve beyan etmektesiniz.</p>
                            <div className="bilgi-form-check">
                                <input type="checkbox" id='formContact' name='formContact' />
                                <label htmlFor="formContact">İndirim ve kampanyalardan anında haberdar olmak için Ticari İletişim İzni Metni kapsamında iletişim izni veriyorum.</label>

                            </div>

                            <button className='register-btn' onClick={handleRegister}>KAYIT OL</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm