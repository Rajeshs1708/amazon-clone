import React from 'react'
import './Home.css'
import Product from './Product'

function Home () {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='Amazon'
      />

      <div className='home__row'>
        <Product
          id='1234563122'
          title='The Learn Startup:How Constant Innovation Creates Radically Successfull Business Paperback'
          price={11.36}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAdyQlfEhbI-n6bqFu0xWbIWfVw11BXqulg&usqp=CAU'
        />
        <Product
          id='2334342343'
          title='OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers'
          price={220.21}
          rating={4}
          image='https://m.media-amazon.com/images/I/71poFSdDs5S._SX679_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='2334342345'
          title='Fire-Boltt Ninja 2 SpO2 Full Touch Smartwatch with 30 Workout Modes, Heart Rate Tracking, and 100+ Cloud Watch Faces, 7 Days of extensive Battery'
          price={19.59}
          rating={5}
          image='https://m.media-amazon.com/images/I/61lW8Keh7YL._SX679_.jpg'
        />
        <Product
          id='2334342346'
          title='Lavie Sport Westport 24L Casual Backpack | Backpack Bags for Women | Girls bag'
          price={8}
          rating={5}
          image='https://m.media-amazon.com/images/I/81QhrDA2L2S._UX679_.jpg'
        />
        <Product
          id='2334342347'
          title='Sony WF-1000XM4 Industry Leading Active Noise Cancellation True Wireless (TWS) Bluetooth 5.2 Earbuds with 32hrs Batt Life | Instant Bank Discount of INR 3000 on Select Prepaid transactions'
          price={237.48}
          rating={5}
          image='https://m.media-amazon.com/images/I/61G9yF+ZbEL._SX679_.jpg'
        />
      </div>

      <div className='home__row'>
        <Product
          id='1234563767'
          title='Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X74K (Black)'
          price={587.34}
          rating={5}
          image='https://m.media-amazon.com/images/I/71bV6-K-LhL._SX679_.jpg'
        />
      </div>
    </div>
  )
}

export default Home
