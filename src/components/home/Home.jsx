import React, {useState, useEffect} from 'react'
import './home.css'
import VIDEO from './../../assets/home.mp4'

// icon
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
  // untuk mengubah nilai pada max price
  const [maxPrice, setMaxPrice] = useState(5000);

  const handlePriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value)); 
  };

  // Hook to scroll animate
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])



  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={VIDEO} muted autoPlay loop type='video/mp4'></video>

      <div className="home-content container">
        <div className="textDiv">

          <span data-aos="fade-up" className="small-text">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className='home-title'>
            Search Your Holiday
          </h1>

        </div>

        <div data-aos="fade-up" className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....'/>
              <GrLocation className='icon'/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label-total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">${maxPrice}</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" value={maxPrice} onChange={handlePriceChange}/>
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className='icon'/>
            <span>More Filters</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home