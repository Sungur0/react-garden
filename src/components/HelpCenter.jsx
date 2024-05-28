import React from 'react'

const HelpCenter = () => {
    return (
        <div className="help-center">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="...">
                        <div className="help-content">
                            <div class="icon-container">
                            <i class="ri-thumb-up-line"></i>
                            </div>
                            <div className="helper-links">
                                <h2>Popüler Sorular</h2>
                                <p>İade İşlemi</p>
                                <p>Sipariş İptali</p>
                                <p>Ücret İadesi</p>
                                <p>Adres Değişikliği</p>
                            </div>
                        </div>
                    </div>
                    <div className="...">
                    <div className="help-content">
                            <div class="icon-container">
                            <i class="ri-box-3-fill"></i>
                            </div>
                            <div className="helper-links">
                                <h2>İade</h2>
                                <p>İade İşlemi</p>
                                <p>Sipariş İptali</p>
                                <p>Ücret İadesi</p>
                                <p>Adres Değişikliği</p>
                            </div>
                        </div>
                    </div>
                    <div className="...">
                    <div className="help-content">
                            <div class="icon-container">
                            <i class="ri-truck-line"></i>
                            </div>
                            <div className="helper-links">
                                <h2>Kargo ve Teslimat</h2>
                                <p>İade İşlemi</p>
                                <p>Sipariş İptali</p>
                                <p>Ücret İadesi</p>
                                <p>Adres Değişikliği</p>
                            </div>
                        </div>
                    </div>
                    <div className="...">
                    <div className="help-content">
                            <div class="icon-container">
                            <i class="ri-shopping-basket-2-line"></i>
                            </div>
                            <div className="helper-links">
                                <h2>Siparişler</h2>
                                <p>İade İşlemi</p>
                                <p>Sipariş İptali</p>
                                <p>Ücret İadesi</p>
                                <p>Adres Değişikliği</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HelpCenter