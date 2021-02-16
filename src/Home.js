import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_OneNightinMiami/c575387f-322c-41e7-a5d4-b324b8d096bd._UR3000,600_SX1500_FMjpg_.jpg"
          alt=""
        />
        <div className="home__row">
        <Product
            id="90829332"
            title="Samsung C49J890DKN, CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year WarranAcer Aspire Z24-890-UA91 AIO Desktop, 23.8 inches Full HD, 9th Gen Intel Core i5-9400T, 12GB DDR4, 512GB SSD, 802.11ac Wifi, USB 3.1 Type C, Wireless Keyboard and Mouse, Windows 10 Home."
            price={992.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81ODwqmdl6L._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Laminator GerTong A4 Laminator 4 in 1 Thermal Laminator 9 inches 20 Laminating Pouches Paper Trimmer Corner Rounder for Home Office School"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71zRZX3SZIL._AC_SL1500_.jpg"
          />
       
        </div>
        <div className="home__row">
          <Product
              id="29567448"
              title="SHANY All In One Harmony Makeup Kit - Ultimate Color Combination - New Edition"
              price={34.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/813yEq7wV%2BL._SX679_.jpg"
          />

          <Product
               id="51978378"
               title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
               price={19.11}
               rating={3}
               image="https://images-na.ssl-images-amazon.com/images/I/61%2B7WU1Rr4L._AC_SL1301_.jpg"
          />
          <Product
              id="76482994"
              title='Sceptre 24" Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)'
              price={129.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/914W%2BOtJQ-L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
                      id="76482994"
                      title='Signature Design by Ashley - Reardon Traditional Sofa w/ 5 Accent Pillows, Beige'
                      price={753.26}
                      rating={5}
                      image="https://images-na.ssl-images-amazon.com/images/I/81JSZGrOCWL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
             id="416743228"
             title='Roll over image to zoom in YIRSUR Smart Watch for Android Phones & iPhones, Always-on 1.5" Large Screen, IP68 Waterproof Fitness Tracker Heart Rate Recorder Step Counter and Sleep Monitor, Sync Message for Men & Women (Black)'
             price={35.99}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/61Kxao12S6L._AC_SL1500_.jpg"
          />
          <Product
          id="82346589"
          title='ODK Pneumatic Adjustable Height Standing Desk, Power Free Airlift Sit Stand Desk, Mobile & Versatile & Sturdy Computer Desk with 2 Wheels, Instant & Smooth Adjustment, 47.2"x23.6" Vintage'
          price={249.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Rq2lWxAoL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Jordan Air 1 x Off-White NRG - US 10.5ROVSUN 13.2LBS Portable Clothes Dryer, 1500W High End Front Load Tumble Laundry Dryer w/Stainless Steel Tub & LCD Screen, White"
            price={284.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61rQd30a0TL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12654341"
            title="Pro MERN Stack: Full Stack Web App Development with Mongo, Express, React, and NodAcer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silvere"
            price={364.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
          />
          <Product
            id="49923094"
            title="SAMSUNG 85-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN85Q60TAFXZA, 2020 Model)"
            price={3499.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81YZ7oN1vTL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;