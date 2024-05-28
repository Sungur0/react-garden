import React from 'react'
import './blog.css'

import grid1 from '../assets/ded1.webp'
import grid2 from '../assets/blog2.webp'
import grid3 from '../assets/blog3.webp'

import { Link } from 'react-router-dom';
const Blog = () => {
   return (
      <div className="blog">
         <div className="container">
               <div className="blog-head">
            <Link to='/blog'>
                  <h1>Bahçe Blog</h1>
            </Link>

               </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 blogcon">
               <div className=" ...">
                  <div className="blogcard">
                     <Link to='/blog'>
                        <img src={grid1} alt="" className=' max-w-full  ' />
                     </Link>

                     <Link to='/bitkilerde-saksi-degisimi'>
                     <p className='blogcard-header'>
                        Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                     </p>
                     </Link>

                     <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>
                  </div>
                  <Link to='/blog'>
                     <button className=" readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </Link>
               </div>
               <div className="... ">
                  <div className="blogcard">
                     <Link to='/blog'>
                        <img src={grid2} alt="" className=' max-w-full  ' />
                     </Link>

                     <p className='blogcard-header'>
                        Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                     </p>
                     <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>
                  </div>
                  <Link to='/blog'>
                     <button className=" readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </Link>
               </div>
               <div className="... ">
                  <div className="blogcard">
                     <Link to='/blog'>
                        <img src={grid3} alt="" className=' max-w-full  ' />
                     </Link>
                     <p className='blogcard-header'>
                        Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                     </p>
                     <div className="blogcard-text">
                        <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecekIpsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek''.</p>

                     </div>
                     <Link to='/blog'>
                        <button className=" readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                     </Link>
                  </div>

               </div>

            </div>
         </div>
      </div>
   )
}

export default Blog