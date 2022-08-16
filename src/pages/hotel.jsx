import React, { useRef, useState } from 'react'
import '../styles/hotel.css'
function hotel() {
  const activitiesRef = useRef(null)
  const roomsRef = useRef(null)
  const contactRef = useRef(null)
  const executeScroll = (ref) => {
    ref.current.scrollIntoView()
  }

  const rooms = [
    {
      image: 'https://images.unsplash.com/photo-1624062166102-b7297f833602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      label: 'Stone hut',
      description: 'Ut mollis varius elit at convallis. Nam semper lacinia risus, eget vestibulum ipsum convallis eu. Ut eget blandit erat',
      capacity: 12,
    },
    {
      image: 'https://images.unsplash.com/photo-1516099624722-bbd32783b402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      label: 'Wooden hut',
      description: 'Ut mollis varius elit at convallis. Nam semper lacinia risus, eget vestibulum ipsum convallis eu. Ut eget blandit erat',
      capacity: 6,
    },{
      image: 'https://images.unsplash.com/photo-1610984881396-bd0ff7da29d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      label: 'Nippa hut',
      description: 'Ut mollis varius elit at convallis. Nam semper lacinia risus, eget vestibulum ipsum convallis eu. Ut eget blandit erat',
      capacity: 5,
    },{
      image: 'https://images.unsplash.com/photo-1564898148101-82f74d4df7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      label: 'Rounded hut',
      description: 'Ut mollis varius elit at convallis. Nam semper lacinia risus, eget vestibulum ipsum convallis eu. Ut eget blandit erat',
      capacity: 8,
    },
  ]

  return (
    <div className='hotel'>
      <nav className='hotel-nav x-spacing '>
        <div className='hotel-nav-logo'>
          <span>VICTION</span>
        </div>
        <div className='flex items-center justify-end'>
          <div className='hotel-nav-container'>
            <ul>
              <li className='text-underline' onClick={()=>executeScroll(roomsRef)}>Rooms</li>
              <li className='text-underline' onClick={()=>executeScroll(activitiesRef)}>Activities</li>
              <li className='text-underline' onClick={()=>executeScroll(contactRef)}>Contact</li>
            </ul>
          </div>
          <button className='button-orange md:block hidden'>BOOK NOW</button>
        </div>
      </nav>
      <section className="hero scroll-smooth">
        <div className="hero-left">
          <div className="hero-left-text">
            <div className="tagline-container">
              <span className='text-cursive-header'>Discover Zambales</span>
              <h2 className='header'>Viction </h2>
              <h2 className='header'>Beach Resort</h2>
              <p className='pt-10 description'>Relax, loosen up, give yourself a break</p>
              <div className='md:hidden flex w-full pt-6'>
                <button className='button-orange'>BOOK NOW</button>
              </div>
            </div>
            
          </div>
        </div>
        <div className="hero-right">
        </div>
      </section>
      <section id="rooms" ref={roomsRef} className='lg:flex-row x-spacing border-t-2 border'>
        <div className='py-20 md:flex block items-center '>
          <div className='basis-2/5 md:pb-0 pb-10'>
            <h1 className='text-cursive-header'>Relaxing</h1>
            <h1 className='header'>Rooms & Huts</h1>
          </div>
          <p className='basis-3/5 description text-left'>Walk on white sandy beach while listening to the waves of the pristine sea. Experience relaxation at its finest, in homely cottages that makes you feel in one with nature.</p>
        </div>
        <div className='flex flex-wrap gap-[4.1rem] pb-20'>
          { rooms.map((room, id) => {
              return(
                <RoomCard key={id} image={room.image} label={room.label} description={room.description} capacity={room.capacity} />
              )
            })
          }
        </div>
      </section>
      <section id="activities" ref={activitiesRef} className='w-full relative z-[1]'>
        <div className='h-full w-full wellness flex justify-center'>
          <div className='bg-transparent text-center py-40 text-white max-w-[65rem]'>
            <h1 className='header p-12'>Nature & Activities</h1>
            <p className='description'>When people speak of a notable wreck diving site in the Philippines, many would probably point to Coron around Palawan, with the bay itself being home to the sunken Japanese ships that remain in its depths still. But little did some of us know that the title of the “wreck diving capital of the Philippines” lies somewhere northern, particularly within Central Luzon and faces the West Philippine Sea—the province of Zambales.</p>
            <button className='button-white mt-12'>READ MORE</button>
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
              <h1 className='header '>What <span className='text-cursive-header'>Customers</span></h1>
              <h1 className='header pb-12'>Are Saying</h1>

              <h1 className='italic description'>They are not the typical hotels you see out there. They have taken care of every last detail. 
              They are very comfortable and the truth us that you are almost better than at home. We will comeback for sure!</h1>
              <div className='flex justify-between items-center pt-2'>
                <div>
                  <h3 className='text-3xl'>Pepito Manaloto</h3>
                </div>
                <div className='block'>
                  <button className='button border-2 mr-2'>BACK</button>
                  <button className='button-orange text-white'>NEXT</button>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      <section id="footer" ref={contactRef} className='w-full relative z-[1]'>
        <div className='h-full w-full flex wellness x-spacing'>
          <div className='bg-transparent text-center py-10 text-white flex justify-between w-full lg:flex-row flex-col'>
            <div className='text-left flex-1 py-8'>
              <h1 className='sub-header'>Viction Beach</h1>
              <h1 className='sub-header'>Resort</h1>
              <div>
                <p className='list-text'>Purok 6</p>
                <p className='list-text'>Iba, Zambales</p>
                <p className='list-text'>(888) 918-1234</p>
                <p className='list-text'>viction@gmail.com</p>
              </div>
            </div>
            <div className='flex-1 text-left py-8'>
              <h3 className='list-header'>Social Media</h3>
              <ul className='pb-4'>
                <li className='list-text'>Facebook</li>
                <li className='list-text'>Instagram</li>
                <li className='list-text'>Twitter</li>
              </ul>
              <h3 className='list-header'>About</h3>
              <ul>
                <li className='list-text'>Contact us</li>
                <li className='list-text'>Careers</li>
                <li className='list-text'>Privacy Policy</li>
              </ul>
            </div>
            <div className='flex-1 text-left py-8'>
              <div className='flex flex-col justify-between'>
                <h3 className='list-header'>News Letter</h3>
                <h2 className='list-text'>Subscribe to receive our latest news and information</h2>
                <div className='flex justify-space bg-white p-4 mt-4'>
                  <input className='p-2 flex-1 outline-none text-black' type="email" placeholder='Your Email' required />
                  <button className='button-orange text-white'>SUBMIT</button>
                </div>
              </div>
              <p className='pt-12 list-text'>Copyright 2022. All rights reserved.</p>
            </div>            
          </div>
        </div>
      </section>
    </div>
  )
}

const RoomCard = ({image, label, description, capacity}) => {
  return (
    <div className='card'>
      <img className='w-full h-[25rem] object-cover' src={image} />
      <div className='py-6'>
        <div className='flex justify-between'>
          <h2 className='text-3xl'>{label}</h2>
          <p>{capacity} person</p>
        </div>
      </div>
      <div className='items-center'>
        <p className='description pb-6'>{description}</p>
        <h3 className='text-md'>See more <span className='pl-2 text-2xl'>&rarr;</span></h3>
      </div>
    </div>
  )
}

export default hotel