import React from 'react'
import gridimg1 from '../assets/grid1.jpg'
import gridimg2 from '../assets/grid2.jpg'
import gridimg3 from '../assets/grid3.jpg'
import gridimg4 from '../assets/grid4.jpg'
import { useEffect } from 'react'
import './main.css'
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import flover1 from '../assets/flow.webp'
import flover2 from '../assets/fow2.webp'
import flover3 from '../assets/fow3.webp'
import flover4 from '../assets/fow4.webp'
import flover5 from '../assets/faw5.webp'
import flover6 from '../assets/faw6.webp'
import flover7 from '../assets/fow7.webp'




const Main = () => {
  useEffect(() => {
    const setİmages = () => {
      const mainSlideİmages = document.querySelectorAll('.main-slide img');

      mainSlideİmages.forEach((element) => {
        const width = element.offsetWidth;
        element.style.height = width + 'px';
      });
    }
    window.addEventListener('resize', setİmages);
    setİmages();

    return () => {
      window.removeEventListener('resize', setİmages);
    };
  }, [])



  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        dots: true,
      },
      600: {
        items: 3,
        dots: true,
      },
      1000: {
        items: 6
      }
    },
  };

  return (
    <div className="main-grid">
      <div className="container">
        <Link to='/categories'>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">

            <div className=" col-span-2 ... discount">
              <img src={gridimg1} alt="" className=' max-w-full rounded-lg' />
              <div className="textsale">
                <div className="container sale">
                  <p><strong>%30</strong>
                    İNDİRİM</p>
                  <div className="discountxt">ŞİMDİ ALIN KÂRLI ÇIKIN </div>
                </div>
              </div>
            </div>
            <div className="...">
              <img src={gridimg2} alt="" className=' max-w-full rounded-lg' />
            </div>
            <div className=" ...">
              <img src={gridimg3} alt="" className=' max-w-full rounded-lg' />
            </div>
            <div className="col-span-2 ... discount">
              <img src={gridimg4} alt="" className=' max-w-full rounded-lg' />
              <div className="textsale">
                <div className="container sale sale2">
                  <p><strong>%80</strong>
                    İNDİRİM</p>
                  <div className="discountxt discountxt2">EN ÇOK LAZIM OLAN BAHÇE EKİPMANLARI</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-2 ... discount">
              <img src={gridimg1} alt="" className=' max-w-full rounded-lg' />
              <div className="textsale">
                <div className="container sale">
                  <p><strong>%30</strong>
                    İNDİRİM</p>
                </div>
                <div className="discountxt">ŞİMDİ ALIN KÂRLI ÇIKIN </div>
              </div>
            </div>
            <div className="...">
              <img src={gridimg2} alt="" className=' max-w-full rounded-lg' />
            </div>

          </div>
        </Link>
      </div>
      <div className="maincarousel">
        <div className="container">
          <OwlCarousel className='owl-theme main-slide' {...options}>
            <div className="item">
              <img src={flover1} alt="" />
            </div>
            <div className="item">
              <img src={flover2} alt="" />
            </div>
            <div className="item">
              <img src={flover3} alt="" />
            </div>
            <div className="item">
              <img src={flover4} alt="" />
            </div>
            <div className="item">
              <img src={flover5} alt="" />
            </div>
            <div className="item">
              <img src={flover6} alt="" />
            </div>
            <div className="item">
              <img src={flover7} alt="" />
            </div>
          </OwlCarousel>
        </div>
      </div>


    </div>
  )
}

export default Main