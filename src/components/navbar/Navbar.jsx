import React, {useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";


const Navbar = () => {
  const[active, setActive] = useState('navBar')

  const showNav = ()=>{
    setActive('navBar activeNavBar')
  }

  const removeNav = ()=>{
    setActive('navBar')
  }


  return (
    <section className='navbar'>
      <header className="header flex">
        
        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon'/> Traverse.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItems">
              <a href="#" className='navLinks'>Home</a>
            </li>

            <li className="navItems">
              <a href="#" className='navLinks'>Destination</a>
            </li>

            <li className="navItems">
              <a href="#" className='navLinks'>Shop</a>
            </li>

            <li className="navItems">
              <a href="#" className='navLinks'>About</a>
            </li>

            <li className="navItems">
              <a href="#" className='navLinks'>Pages</a>
            </li>

            <li className="navItems">
              <a href="#" className='navLinks'>News</a>
            </li>

            <li className="navItems">
              <a href="#contact" className='navLinks'>Contacts</a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavBar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="togglerNavBar">
          <TbGridDots className='icon'/>

        </div>

      </header>
    </section>
  )
}

export default Navbar