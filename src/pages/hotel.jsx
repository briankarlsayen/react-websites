import React from 'react'
import '../styles/hotel.css'
function hotel() {
  return (
    <div className='hotel'>
      <section className="hero">
        <div className="hero-left">
          <nav className='hotel-nav'>
            <div className='hotel-nav-logo'>
              <span>LOGO</span>
            </div>
            <div className='hotel-nav-container'>
              <ul>
                <li>Our Story</li>
                <li>Packages</li>
                <li>Contact</li>
              </ul>
            </div>
          </nav>
          <div className="hero-left-text">
            <div className="tagline-container">
              <span className='text-cursive-header'>Memorable</span>
              <h2 className='header'>Hotels for </h2>
              <h2 className='header'>moments <span className='text-cursive-header'>Rich</span></h2>
              <h2 className='header'>in emotions</h2>
              <p className='pt-10 description'>Book now and get the best prices</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <button className='button-white mt-4 float-right'>BOOK NOW</button>
        </div>
      </section>
      <section className="story">
        <div className="story-text">
          <div className='story-text-left'>
            <h2 className='sub-header'>Here, local talents come together</h2>
          </div>
          <div className='story-text-right'>
            <p className='description text-right'>We let ourselves be inspired by the rich history as well as by contemporary artists of the city. For in the 21st century the city has so much more to offer than just medieval herritage.</p>
          </div>
        </div>
        <div className="story-img-container">
          <div className='story-img'></div>
        </div>
      </section>
      <section className='info'>
        <div className='info-container'>
          <div className='info-text'>
            <h2 className='sub-header'>The best gateway you can dream of. Culture, nature, beaches, and gastronomy. Enjoy your vacation with your family or partner in a fishing village with a medieval past.</h2>
            <button className='button-green mt-12'>KNOW MORE</button>
          </div>
        </div>
      </section>  

      <section id="rooms" className='flex flex-col lg:flex-row x-spacing border-t-2 border'>
        <div id="rooms-left" className='py-20 flex-1'>
          <div>
            <img src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
          </div>
          <div className='pt-10'>
            <h2 className='header'>Award<span className='text-cursive-header'>Winning</span></h2>
            <h2 className='header'>Style and</h2>
            <h2 className='header'>Comfort</h2>
          </div>
        </div>
        <div className='pr-8'>
        </div>
        <div className='border-r-2 border md:mr-8'></div>
        <div id="rooms-right" className='py-20 flex-1'>
          <div>
            <div className='flex justify-between items-center pb-8'>
              <h3>ROOM & SUITE</h3>
              <div className='flex'>
                <button className='p-2 border-2 mr-2'><span className='px-2 text-2xl'>&larr;</span></button>
                <button className='p-2 bg-green-800 text-white'><span className='px-2 text-2xl'>&rarr;</span></button>
              </div>
            </div>
            <img className='h-[34.2rem] w-full' 
            src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
            <div className='py-8'>
              <p className='description pb-4'>Ut mollis varius elit at convallis. Nam semper lacinia risus, eget vestibulum ipsum convallis eu. Ut eget blandit erat, 
                eget iaculis lectus. Vestibulum ut venenatis velit, eu gravida metus. Aliquam erat volutpat. Donec ornare arcu non lorem ullamcorper, 
                porttitor malesuada enim congue. Mauris laoreet quis eros vel varius. Sed scelerisque faucibus augue, at blandit dolor.</p>
              <p className='description'>Cras aliquam suscipit lectus sed semper. Mauris vestibulum sem nec ante dictum, eu faucibus ligula gravida.</p>
            </div>
            <button className='button-green'>DISCOVER ROOM</button>
          </div>
        </div>
      </section>
      <section className='py-20 w-full relative z-[1]'>
        <div className='h-full w-full wellness'>
          <div className='bg-transparent text-center py-40 text-white'>
            <h2 className='text-xl'>SPA SUITE AT HOTEL SCAPE</h2>
            <h1 className='header p-12'>Beauty & Wellness</h1>
            <p className='description'>Advocating an immersive enriching journey, The Hotel Scape SPA Suite</p>
            <p className='description'>offer moments of relaxed pleasure and sensory revitalization</p>
            <button className='button border-white text-white mt-12'>READ MORE</button>
          </div>
        </div>
      </section>
      <section id="testimonials" className='flex w-full z-[1]'>
        <div className='border-t-2 flex x-spacing items-center'>
          <div className='flex-1 py-20 lg:flex hidden'>
            <img className='w-full h-[50rem] object-cover' 
            src="https://images.unsplash.com/photo-1615039666131-964929ad0f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          </div>
          <div className='border-r-2 h-full mx-20 lg:block hidden'></div>
          <div className='flex-1 py-20'>
            <div>
              <h1 className='sub-header'>They are not the typical hotels you see out there. They have taken care of every last detail. They are very comfortable and the truth us that you are almost better than at home. We will comeback for sure!</h1>
              
              <div className='flex justify-between items-center pt-6'>
                <div>
                  <h3 className='text-3xl'>ELIZA</h3>
                  <div className='border-t-2 border-gray-300 my-3 w-32'></div>
                  <h3 className=' text-2xl'>MAY 2022</h3>
                </div>
                <div className='block'>
                  <button className='button border-2 mr-2'>next</button>
                  <button className='button bg-green-800 text-white'>back</button>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <section id="news">
        <div className='border-t-2 x-spacing py-20 items-center'>
          <h1 className='header'><span className="text-cursive-header">Our latest</span> News</h1>
          <div className='pt-20 flex flex-wrap gap-[4.3rem]'>
            <div className='card'>
              <img className='w-full h-[30rem] object-cover' 
              src="https://images.unsplash.com/photo-1625604029887-45f9c2f7cbc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
              <div className='flex justify-between pt-3'>
                <h3 className='text-md'>NEWS</h3>
                <h3 className='text-md'>13 August 2022</h3>
              </div>
              <div className='py-6'>
                <h2 className='text-3xl'>Once in a lifetime a new luxury hotel affliation</h2>
              </div>
              <div className='items-center'>
                <h3 className='text-md'>READ MORE <span className='pl-2 text-2xl'>&rarr;</span></h3>
              </div>
            </div>
            <div className='card'>
              <img className='w-full h-[30rem] object-cover' src="https://images.unsplash.com/photo-1615039666131-964929ad0f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              <div className='flex justify-between pt-3'>
                <h3 className='text-md'>NEWS</h3>
                <h3 className='text-md'>13 August 2022</h3>
              </div>
              <div className='py-6'>
                <h2 className='text-3xl'>Once in a lifetime a new luxury hotel affliation</h2>
              </div>
              <div className='items-center'>
                <h3 className='text-md'>READ MORE <span className='pl-2 text-2xl'>&rarr;</span></h3>
              </div>
            </div>
            <div className='card'>
              <img className='w-full h-[30rem] object-cover' src="https://images.unsplash.com/photo-1615039666131-964929ad0f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              <div className='flex justify-between pt-3'>
                <h3 className='text-md'>NEWS</h3>
                <h3 className='text-md'>13 August 2022</h3>
              </div>
              <div className='py-6'>
                <h2 className='text-3xl'>Once in a lifetime a new luxury hotel affliation</h2>
              </div>
              <div className='items-center'>
                <h3 className='text-md'>READ MORE <span className='pl-2 text-2xl'>&rarr;</span></h3>
              </div>
            </div>

            <div className='card'>
              <img className='w-full h-[30rem] object-cover' src="https://images.unsplash.com/photo-1615039666131-964929ad0f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              <div className='flex justify-between pt-3'>
                <h3 className='text-md'>NEWS</h3>
                <h3 className='text-md'>13 August 2022</h3>
              </div>
              <div className='py-6'>
                <h2 className='text-3xl'>Once in a lifetime a new luxury hotel affliation</h2>
              </div>
              <div className='items-center'>
                <h3 className='text-md'>READ MORE <span className='pl-2 text-2xl'>&rarr;</span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='border-t-2 p-20 flex w-full justify-center text-center'>
          <div  className='w-[45rem]'>
            <h3 className='text-md'>NEWSLETTER</h3>
            <div className='p-10'>
              <h2 className='text-5xl'>Subscribe to receive our latest news and information</h2>
            </div>
            <div className='flex justify-space bg-white p-4'>
              <input className='p-2 flex-1' placeholder='Your Email' />
              <button className='button bg-green-800 text-white'>SUBMIT</button>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className='pt-20 w-full relative z-[1]'>
        <div className='h-full w-full flex center wellness'>
          <div className='bg-transparent text-center py-10 text-white max-w-[45rem]'>
            <h1 className='header p-12'>LOGO</h1>
            <p className='text-lg'>2230 Madison Street</p>
            <p className='text-lg'>Youthville, CA 92129</p>
            <p className='text-lg'>(888) 921-3546</p>
            <p className='text-lg'>reservation@goose.com</p>
            <div className='flex justify-center py-12'>
              <p className='p-2 border-2'>FB</p>
              <p className='p-2 border-2'>IG</p>
              <p className='p-2 border-2'>YT</p>
            </div>
            <div className='footer-bar w-full text-lg'>
              <ul className='flex text-center justify-center border-2'>
                <li className='description'>Our Story</li>
                <li className='description'>Packages</li>
                <li className='description'>Contact</li>
                <li className='description'>Gallery</li>
                <li className='description'>News</li>
              </ul>
            </div>
            <p className='pt-12 text-lg'>Copyright 2022. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default hotel