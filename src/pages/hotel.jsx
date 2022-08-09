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
    </div>
  )
}

export default hotel