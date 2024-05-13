import React, {useEffect} from 'react'
import './footer.css'

// Icon
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

// Video
import VIDEO2 from '../../assets/sea.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // Hook to scroll animate
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  

  return (
    <section className="footer" id='contact'>
      <div className="videoDiv">
        <video src={VIDEO2} autoPlay loop muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter your Email Address'/>
            <button data-aos="fade-up" className="btn flex" type='submit'>
              Send<FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-right" className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/> Traverse.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraf">
              <p>Traverse makes it easy for you to find recommendations for tourist attractions and make bookings with intuitive features, making planning your adventure easier and smoother.</p>
            </div>

            <div data-aos="fade-up" className="footerSocial flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillInstagram className='icon'/>
              <AiFillYoutube className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group 1 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Payment
              </li>

            </div>
            {/* Group 2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                TripAdvisor
              </li>

            </div>
            {/* Group 3 */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                Last Minute
              </span>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Gianyar
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Ubud
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Sanur
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Kuta
              </li>

              <li className="footerList flex">
                <FaChevronRight className='icon'/>
                Karangasem
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>Best Travel Website</small>
            <small>Copyrights Reserved - Anggara 2024</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer