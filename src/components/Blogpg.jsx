import React from 'react'
import './blogpage.css'

import grid1 from '../assets/ded1.webp'
import grid2 from '../assets/blog2.webp'
import grid3 from '../assets/blog3.webp'
import grid4 from '../assets/blog4.webp'
const Blogpg = () => {
  return (
    <>
      <div className="blogpag">
        <div className="container">
          <div className="headlink">
            <ul>
              <li><a href="/">Anasayfa</a></li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="blogsearch">
            <div className='searchinput'>
              <form>
                <input
                  type="text"
                  name="item"
                  placeholder="Bahçe Blog'ta e aramıştınız?" />
                <button><i className="ri-search-line"></i></button>
              </form>
            </div>

          </div>

          <div className="blogs">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
                <div className=" ... blogpage">
                  <div className="blogcard">
                    <a href="/" >
                      <img src={grid1} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>07</span>
                     Kasım
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>

                    <button className="readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>
                </div>

                <div className="... blogpage">
                  <div className="blogcard">
                    <a href="/" >
                      <img src={grid2} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>31</span>
                     Ekim
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>

                    <button className="readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>
                </div>
                <div className="... blogpage">
                  <div className="blogcard">
                    <a href="/">
                      <img src={grid3} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>25</span>
                     Ekim
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>
                    <button className=" readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>

                </div>
                <div className="... blogpage">
                  <div className="blogcard">
                    <a href="/">
                      <img src={grid4} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>20</span>
                     Ekim
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>
                    <button className=" readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>
                </div>
                <div className=" ... blogpage">
                  <div className="blogcard">
                    <a href="/" >
                      <img src={grid1} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>18</span>
                     Ekim
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>

                    <button className="readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>
                </div>

                <div className="... blogpage">
                  <div className="blogcard">
                    <a href="/" >
                      <img src={grid2} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>13</span>
                     Ekim
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>

                    <button className="readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>
                </div>
                <div className="... blogpage">
                  <div className="blogcard">
                    <a href="/">
                      <img src={grid3} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>10</span>
                     Ekim
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>
                    <button className=" readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>

                </div>
                <div className="... blogpage">
                  <div className="blogcard">
                    <a href="/">
                      <img src={grid4} alt="" className=' max-w-full  ' />
                    </a>
                    <div className="blogdate">
                     <span>06</span>
                     Ekim
                     <br />
                      2023
                    </div>
                    <a href="/" className='blogcard-header'>
                      Yaz Aylarında Çiçek Bakımı Nasıl Olmalı ?
                    </a>
                    <p>Yinelenen bir sayfa içerğinin okuyucunun dikkatini dağıtıı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı,sürekli 'buraya metin gelecek,buraya getin gelecek'.</p>
                    <button className=" readbt bg-gray-400 hover:bg-gray-300  font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 ">Devamını Oku</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Blogpg