import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/authProvider";


const NaveBar = () => {
  const [name, setName]= useState(false)   
  const {user, logOut} = useContext(authContext);
  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message))
  }

  const navItems = (
    <>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/collage'>Collage</Link>
    </li>
    <li>
      <Link to='/admission'>Admission</Link>
    </li>
    <li>
      <Link to='/myCollage'>My Collage</Link>
    </li>
    <li>
        <Link className='hover:text-white' to='/register'>Register</Link>
    </li>
  
   {
    !user &&
    <button className='btn  bg-transparent btn-sm m-0'><Link to='/login' className=' text-decoration-none'>SignIn</Link></button>

   }

    </>
  )
    return (
        <>
        <div className="navbar  bg-[#E9F2E7]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Collage Booking</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">

  {
              user &&
              <> <span className={name? 'showName absolute right-80 top-14 z-50 font-bold': 'hidden'}><span>{user?.displayName}</span></span>
              <div onMouseEnter={()=>setName(true)}
                  onMouseLeave={()=>setName(false)}
                className='d-inline'><img className='rounded-circle'  style={{width: '40px', height: '40px'}} src={user && user.photoURL} alt="" /></div>
              <button onClick={handleLogOut} className='btn hover:bg-[#007CFF]  bg-transparent btn-sm mx-2'><Link className=' text-decoration-none'>LogOut</Link></button>

               </> 
               

            }
              <div className="form-control">
      <input type="text" placeholder="Search collage" className="input w-12 md:w-auto" />
    </div>
  </div>
</div>
            
        </>
    );
};

export default NaveBar;