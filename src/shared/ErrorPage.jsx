

import { Link } from "react-router-dom";



const ErrorPage = () => {
     return (
          <div>
               <div className='mx-auto text-center text-5xl'>
          <h1>Oops! Something went wrong.</h1>
          <div className="w-1/2 mx-auto">
          <img  src="https://i.ibb.co/8r3ppKm/errorImg.jpg" alt="Error" className=' rounded-circle' />
          </div>
          <button className='btn mx-auto mt-4 bg-info '><Link className='text-decoration-none text-black' to='/'>Back to Home page!</Link></button>
        </div>
          </div>
     );
};

export default ErrorPage;