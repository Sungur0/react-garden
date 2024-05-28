

import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import mainbg from '../assets/bahce11.webp'
import mainbg2 from '../assets/bahce12.webp'
import './slider.css'


// import ModalImage from 'react-modal-image';
// import flower1 from '../assets/flower1.webp'
// import flower2 from '../assets/flower2.webp'
// import flower3 from '../assets/flower3.webp'
// import flower4 from '../assets/flower4.webp'
// import flower5 from '../assets/flower5.webp'
// import flower01 from '../assets/flower1.jpg'
// import flower02 from '../assets/flower2.jpg'
// import flower03 from '../assets/flower3.jpg'
// import flower04 from '../assets/flower4.jpg'
// import flower05 from '../assets/flower5.jpg'

const Slider = () => {

  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
  };

 
  return (
    <>
    <div className="carousel">
        <div className="container carousel-slide">

          <OwlCarousel className='owl-theme' {...options}>

            <div className='item'>
        
              
              <img src={mainbg} alt="mainbg"/>
            </div>
            <div className='item'>
          
              
              <img src={mainbg2} alt="mainbg2"/>
            </div>
          </OwlCarousel>
        </div>


{/*     
   <div className="flowers" >
    <div className="container">

      <ModalImage 
        small={flower1}
        large={flower01}
      />
      <ModalImage
        small={flower2}
        large={flower02}
      />
      <ModalImage
        small={flower3}
        large={flower03}
      />
      <ModalImage
        small={flower4}
        large={flower04}
      />
       <ModalImage
        small={flower5}
        large={flower05}
      />
         <ModalImage
        small={flower3}
        large={flower03}
      />
      <ModalImage 
        small={flower1}
        large={flower01}
      />
         </div>
</div> */}
        </div>
        </>
  )
}

export default Slider