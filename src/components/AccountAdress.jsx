import React from 'react'
import { useState } from 'react';
import classNames from 'classnames';
const AccountAdress = () => {
    const dropdownOptions1 = ['Seçenek 1', 'Seçenek 2', 'Seçenek 3'];
    const dropdownOptions2 = ['Seçenek A', 'Seçenek B', 'Seçenek C'];
    const inputClasses = classNames(
        'shadow',
        'border',
        'rounded',
        'py-2',
        'px-3',
        'text-gray-700',
        'leading-tight',
        'focus:outline-none',
    );

    return (
        <div className="account-adress">
            <div className="container">
                <div className='institutional-adress'>
                    <input type="checkbox" id="institutional" name="institutional" />
                    <label for="institutional">Kurumsal Adres</label>
                </div>
                <div className="grid grid-cols-1">

                    {/* İLK SUTÜN BAŞLANGIÇ */}
                    <div className="... first-column">
                        <div className="grid grid-cols-2">
                            <div className="... col-span1">
                                <Dropdown label="Fatura / Teslimat" options={dropdownOptions1} defaultOption="Hem fatura, hem teslimat adresi" />
                                <div className="account-inputs">
                                    <label for="name" className='block text-gray-700 text-sm font-bold mb-2'>Ad
                                    </label>
                                    <input type="text" id="name" name="name" required minlength="3" maxlength="12" size="10" className={inputClasses} />
                                </div>
                            </div>
                            <div className="...">

                                <div className="account-inputs">
                                    <label for="name" className='block text-gray-700 text-sm font-bold mb-2'>Adres Başlığı
                                    </label>
                                    <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" className={inputClasses} />
                                </div>
                                <div className="account-inputs">
                                    <label for="name" className='block text-gray-700 text-sm font-bold mb-2'>Soyad
                                    </label>
                                    <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" className={inputClasses} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* İLK SUTÜN BİTİŞ */}


                    {/* İKİNCİ SUTÜN BAŞLANGIÇ */}
                    <div className="... two-column">
                        <div className="grid md:grid-cols-4">
                            <div className="...">
                                <Dropdown label="Ülke" options={dropdownOptions2} defaultOption="Türkiye" />
                            </div>
                            <div className="...">
                                <Dropdown label="Şehir" options={dropdownOptions2} defaultOption="" />

                            </div>
                            <div className="...">
                                <Dropdown label="İlçe" options={dropdownOptions2} defaultOption="" />

                            </div>
                            <div className="...">
                                <div className="account-inputs">
                                    <label for="name" className='block text-gray-700 text-sm font-bold mb-2'>Posta Kodu
                                    </label>
                                    <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" className={inputClasses} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* İKİNCİ  SUTÜN BİTİŞ */}
                    {/* ÜÇÜNCÜ SUTÜN BAŞLANGIÇ */}
                    <div className="... third-column">
                        <div className="account-inputs">
                            <label for="name" className='block text-gray-700 text-sm font-bold mb-2'>Adres
                            </label>
                            <textarea rows="7" cols="50" className={inputClasses} required>
                                Lütfen açık adresinizi giriniz ...
                            </textarea>

                        </div>


                    </div>
                    {/* ÜÇÜNCÜ  SUTÜN BİTİŞ */}


                    {/* DÖRDÜNCÜ SUTÜN BAŞLANGIÇ */}
                    <div className="... four-column">
                        <div className="grid md:grid-cols-2">
                            <div className="...">
                                <div className="account-inputs">
                                    <label for="name" className='block text-gray-700 text-sm font-bold mb-2'>Telefon 1
                                    </label>
                                    <input type="text" id="name" name="name" required  size="10" className={inputClasses} />
                                </div>
                            </div>
                            <div className="...">
                                <div className="account-inputs">
                                    <label for="name" className='block text-gray-700 text-sm font-bold mb-2'>Vergi No / TC Kimlik No
                                    </label>
                                    <input type="text" id="name" name="name" required  size="10" className={inputClasses} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DÖRDÜNCÜ SUTÜN BAŞLANGIÇ */}
                    <div className="adress-save-btn">
                    <button className={inputClasses}>Kaydet</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

const Dropdown = ({ label, options, defaultOption }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="m-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
            <select
                className="shadow  border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedOption}
                onChange={handleDropdownChange}
            >
                <option value={null}>{defaultOption}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default AccountAdress