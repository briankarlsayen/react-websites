import React from 'react'
import Navbar from '../components/hotel/Navbar'
import '../styles/hotel.css'

function hotel() {
  return (
    <div className='hotel'>
      <section className="hero">
        <div className="hero-left">
          <Navbar />
          <div className="hero-left-text">
            <div className="tagline-container">
              <span className='hero-cursive'>Memorable</span>
              <h2>Hotels for </h2>
              <h2>moments <span className='hero-cursive'>Rich</span></h2>
              <h2>in emotions</h2>
            </div>
            <p>Book now and get the best prices</p>
          </div>
        </div>
        <div className="hero-right">
          <button>BOOK NOW</button>
        </div>
      </section>
      <section className="story">
        <div className="story-text">
          <div className='story-text-left'>
            <h2>Here local talents come together</h2>
          </div>
          <div className='story-text-border'>
          </div>
          <div className='story-text-right'>
            <p>We let ourselves be inspired by the rich history as well as by contemporary artists of the city. For in the 21st century the city has so much more to offer than just medieval herritage.</p>
          </div>
        </div>
        <div className="story-img-container">
          <div className='story-img'></div>
        </div>
      </section>
      <section className='info'>
        <div className='info-text'>
          <h2 className='subtitle'>The best gateway you can dream of. Culture, nature, beaches, and gastronomy. Enjoy your vacation with your family or partner in a fishing village with a medieval past.</h2>
          <button>KNOW MORE</button>
        </div>
      </section>  

      <section className='flex px-20 border-t-2 border'>
        <div className='py-20 flex-1'>
          <div>
            <img src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
          </div>
          <div className='pt-10'>
            <h2 className='text-4xl'>Award<span>Winning</span></h2>
            <h2 className='text-4xl'>Style and</h2>
            <h2 className='text-4xl'>Comfort</h2>
          </div>
        </div>

        <div className='pr-8'>
        </div>
        <div className='border-r-2 border mr-8'></div>
        <div className='py-20 flex-1'>
          <div>
            <div className='flex justify-between items-center pb-8'>
              <h3>ROOM & SUITE</h3>
              <div className='flex'>
                <button className='p-2 border-2 mr-2'>next</button>
                <button className='p-2 bg-green-800 text-white'>back</button>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
            <div className='py-8'>
              <p className='pb-4'>Ut mollis varius elit at convallis. Nam semper lacinia risus, eget vestibulum ipsum convallis eu. Ut eget blandit erat, 
                eget iaculis lectus. Vestibulum ut venenatis velit, eu gravida metus. Aliquam erat volutpat. Donec ornare arcu non lorem ullamcorper, 
                porttitor malesuada enim congue. Mauris laoreet quis eros vel varius. Sed scelerisque faucibus augue, at blandit dolor.</p>
              <p>Cras aliquam suscipit lectus sed semper. Mauris vestibulum sem nec ante dictum, eu faucibus ligula gravida.</p>
            </div>
            <button className='p-2 bg-green-800 text-white'>DISCOVER ROOM</button>
          </div>
        </div>
      </section>
      <section className='py-20 rotate-90'>
        <img className='w-full h-[80vh] object-cover object-center ' src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </section>

    </div>
  )
}

export default hotel