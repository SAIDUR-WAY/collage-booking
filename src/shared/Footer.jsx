

import { useContext } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { authContext } from '../Provider/authProvider';

const Footer = () => {
  const {user} = useContext(authContext);

  const navItems = (

    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/collage">Collages</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      {
        user && <>
               <li>
        <Link to="/myCollage">My Collage</Link>
      </li>
      <li>
        <Link to="register">Register</Link>
      </li>
        </>

      }
    </>
  )
  return (
    <div>
      <footer className="footer grid-cols justify-evenly text-items-center border border-t-info p-10 bg-base-200 text-base-content mx-auto">
        <div>
          <div className="">
            <img src="" alt="" />
          </div>
          <p className="">
            <span className="block text-2xl p-0 m-0">Collage Booking</span>
            
          </p>
          <div className="grid grid-flow-col gap-4 py-4 ">
            <a href="#">
              <FaFacebook className="text-2xl  hover:outline outline-info transition-all rounded-lg" />
            </a>
            <a href="#">
              <FaInstagram className="text-2xl  hover:outline outline-info transition-all rounded-lg" />
            </a>
            <a href="#">
              <FaTwitter className="text-2xl  hover:outline outline-info transition-all rounded-lg" />
            </a>
          </div>
          <div>
            <p className='font-semibold text-2xl'>Address</p>
            <p>kuril,vatara,Dhaka-1230</p>
          </div>
        </div>
        <div className='list-none decoration-double'>
          <span className="footer-title ">Go To</span>
          {
            navItems
          }
        </div>
        
        <div>
          <span className="footer-title">Chack</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
    <span className="footer-title">Contact Us</span> 

    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn border-none bg-[#AACBFF] hover:bg-[#AACBFF] absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
      
    </div>
  </div>
      </footer>
      <div className="w-full text-black text-center font-bold border border-b-info border-t-info h-12 flex items-center justify-evenly">
        
        CopyRight @ Saidur Rahman
      </div>

    </div>
  )
}

export default Footer