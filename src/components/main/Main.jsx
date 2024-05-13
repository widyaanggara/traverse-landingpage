import React, {useEffect} from 'react'
import './main.css'

// icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck  } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";


// import img
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const data = [
  {
    id:1,
    imgSrc:img1,
    destTitle : 'Besakih Mother Temple',
    location: 'Indonesia',
    grade: 'CULTURE RELIGY ',
    fees: '$700',
    description: 'Besakih Temple is the largest Hindu temple complex in Bali, located on the slopes of Mount Agung. With stunning views, it is revered as the "Mother Temple". Explore Balis intricate architecture and vibrant spiritual atmosphere.',
  },

  {
    id:2,
    imgSrc:img1,
    destTitle : 'Besakih Mother Temple',
    location: 'Indonesia',
    grade: 'CULTURE RELIGY ',
    fees: '$700',
    description: 'Besakih Temple is the largest Hindu temple complex in Bali, located on the slopes of Mount Agung. With stunning views, it is revered as the "Mother Temple". Explore Balis intricate architecture and vibrant spiritual atmosphere.',
  },

  {
    id:3,
    imgSrc:img1,
    destTitle : 'Besakih Mother Temple',
    location: 'Indonesia',
    grade: 'CULTURE RELIGY ',
    fees: '$700',
    description: 'Besakih Temple is the largest Hindu temple complex in Bali, located on the slopes of Mount Agung. With stunning views, it is revered as the "Mother Temple". Explore Balis intricate architecture and vibrant spiritual atmosphere.',
  },

  {
    id:4,
    imgSrc:img1,
    destTitle : 'Besakih Mother Temple',
    location: 'Indonesia',
    grade: 'CULTURE RELIGY ',
    fees: '$700',
    description: 'Besakih Temple is the largest Hindu temple complex in Bali, located on the slopes of Mount Agung. With stunning views, it is revered as the "Mother Temple". Explore Balis intricate architecture and vibrant spiritual atmosphere.',
  },

  {
    id:5,
    imgSrc:img1,
    destTitle : 'Besakih Mother Temple',
    location: 'Indonesia',
    grade: 'CULTURE RELIGY ',
    fees: '$700',
    description: 'Besakih Temple is the largest Hindu temple complex in Bali, located on the slopes of Mount Agung. With stunning views, it is revered as the "Mother Temple". Explore Balis intricate architecture and vibrant spiritual atmosphere.',
  },

  {
    id:6,
    imgSrc:img1,
    destTitle : 'Besakih Mother Temple',
    location: 'Indonesia',
    grade: 'CULTURE RELIGY ',
    fees: '$700',
    description: 'Besakih Temple is the largest Hindu temple complex in Bali, located on the slopes of Mount Agung. With stunning views, it is revered as the "Mother Temple". Explore Balis intricate architecture and vibrant spiritual atmosphere.',
  },
]

const Main = () => {
  // Hook to scroll animate
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])



  return (
    <section className="main container section">
      <div className="sec-title">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="sec-content grid">
        {
          data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="main-btn">
        <button className="btn">
          More Destination <FaChevronRight className='icon'/>
        </button>
      </div>

    </section>
  )
}

export default Main