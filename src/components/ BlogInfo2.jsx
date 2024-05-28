import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/saksi-degisimi.webp'
const BlogInfo2 = () => {
    return (
        <div className="flower-care">
            <div className="container">
                <div className="headlink">
                    <ul>
                        <li><a href="/">Anasayfa</a></li>
                        <Link to='/categories'><li>Blog</li></Link>
                        <li>Bitkilerde Saksı Değişimi</li>
                    </ul>
                </div>
                <div className="flower-care-header">
                
                    <h1>Bitkilerde Saksı Değişimi Nasıl Yapılır? Püf Noktaları Nelerdir?</h1>
                    <p>Saksılar bitki yetiştiriciliğinde en önemli unsurlardan bir tanesidir. Bitkinizin köklerinin eski saksısına sığmaması gibi sebeplerle aradan birkaç yıl geçtikten sonra saksı değiştirmeniz gerekebilir veya başka bir saksı modelini beğenip onu almak istemiş olabilirsiniz.</p>
                    <span>31 Ekim 2023</span>
                </div>
                <div className="flower-care-image">
                    <img src={img1} alt="saksı degisimi" />
                </div>
                <div className="flower-care-main">
                    <p>Saksı değiştirmek aslında bitkinize yeni ve daha rahat bir yaşam alanı oluşturmak demektir.</p>
                    <p>Aynı zamanda saksının içindeki toprak zamanla besin değerlerini kaybeder ve bitkinizi yeteri kadar besleyemez hala gelir. Ortalama olarak her iki yılda bir kere değişimini yapmanız gerekecektir. Hangi sebeple olursa olsun bitkinizin saksısını değiştirmek çok önemli bir işlemdir ve son derece dikkat etmeniz gerekir.</p>
                    <h2>Bitki Saksısı Değiştirme Nasıl Yapılır?</h2>
                    <h3>Saksı Değişimi Ne Zaman Yapılır?</h3>
                    <p>Bitkilerde saksı değiştirmek her zaman yapabileceğiniz bir işlem değildir. Bunu değiştirmek için en uygun zaman ilkbahar ayının başlarıdır. Bitkiniz uyku döneminde çıktıktan sonra aktifleşmeye başladığı zamanları saksı değiştirmek için değerlendirebilirsiniz. Diğer zamanlarda bu değişimi yapmak bitkinize zarar verebilmektedir.</p>
                    <p>Bu değişimi yapmanızın zamanının geldiği anlamanın birkaç yolu vardır. Bu yollar; bitki kökleri saksının dışından görünmesi, bitkilerin büyüme hızının yavaşlaması, bitkinizin ağır gelmesi, bitkinizin daha fazla sulama istemesi veya toprakta kuruluk görülmesi bu değişimi yapmamanın  işaretleri olarak görülebilir. Bu işaretleri görmeye başladığınız zaman bitkinizi yeni bir saksıya geçirmenizin zamanı gelmiş demektir.</p>
                    <h3>Saksı Değişiminde Önce Dikkat Edilmesi Gereken Hususlar</h3>
                    <p>Saksı değişimini yapmadan önce aşağıdaki maddeleri okursanız eğer saksı değişimini bitkinize zarar vermeden yapabilirsiniz.</p>
                    <p>İlk olarak yeni saksı seçimi yaparken mevcut kullandığınızdan daha büyük olanı seçmeniz gerekmektedir. Bir veya bitkinizin durumuna göre iki boy daha büyük bir saksıyı seçerek işe başlayabilirsiniz.</p>
                    
                    <p>Saksınızı seçerken bitkinizin ihtiyaçlarını dikkate almanız gerekmektedir. O hangi tür saksılardan hoşlanıyorsa onlardan seçmeniz bitkinizin daha sağlıklı büyümesine sebep olur. Burada saksının yapıldığı malzeme önemli bir kriterdir ve dikkat etmeniz gerekmektedir.</p>
                    <p>Değiştirmeden önceki gün değil iki gün önceden su vermeniz daha uygun olacaktır. Bu sayede bitkinizi saksı değişimine hazırlamış olursunuz.</p>
                    <h2>Bitki Saksısı Değiştirme Yöntemleri</h2>
                    <p>Gelelim saksı değişimini nasıl yapacağınızı anlatmaya. Bitkilerinize zarar vermemek için çok dikkatli hareket etmeniz gerektiğini hatırlatmak isteriz ve bu bölümü dikkatlice okumanızı tavsiye ederiz.</p>
                    <p>Öncelikli olarak yerin kirlenmemesi adına bir örtü üzerinde bu değişimi yapmanızı tavsiye ederiz.</p>
                    <ul>
                        <li>Bitkinizi saksısından çıkartmanız gerekir ve bunun için bitkinizin gövdesinden tutup ters çevirin ve hafifçe çekin. Bu sayede bitkinizi saksısından ayırmış olursunuz. Bu aşamada son derece nazik olmanız ve bitkinize zarar vermemeniz gerekir.</li>
                        <li>Bitkinizin köklerindeki toprağı temizleyin.</li>
                        <li>Eğer bitki köklerinde hastalıklı veya güçsüz kökler varsa budama yapın.</li>
                        <li>Yeni saksınızın alt tarafına bir miktar toprak dökün.</li>
                        <li>Bitkinizi saksınızın ortasına yerleştirin ve yan taraflarını toprakla doldurun.</li>
                        <li>Toprağı hafifçe bastırarak köklerin hava almasını engelleyin.</li>
                        <li>Bitkinizde sararmış yapraklar ve cansız dallar varsa onları kesin.</li>
                        <li>Son olarak bitkinizi  sulayın.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogInfo2