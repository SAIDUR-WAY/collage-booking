import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link } from "react-router-dom";
import loginImage from '../assets/loginImage.jpg'
const Login = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/4 md:w-1/2 ">
            <img src={loginImage} alt="RegistrImage" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2   shadow-2xl bg-base-100">
            <h1 className="text-5xl pb-4 font-semibold  text-center pt-4 ">
              Please Login
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full py-0 m-0"
              
            >
                              {error  && (
                  <p className="text-red-600">{error}</p>
                )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register('email', { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === 'required' && (
                  <p role="alert" className="text-red-500">
                    Email is required
                  </p>
                )}
              </div>

              <div className="form-control  relative ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? 'text': 'password'}
                  {...register('password', {
                    required: true,
                  })}

                  placeholder="password"
                  className="input input-bordered"
                />
                <div className='absolute top-12  right-2'>
                {
                  show ? 
                  <FaRegEye onClick={()=>setShow(!show)} className='absolute text-2xl right-0 top-0 '/>
                  :
                  <FaRegEyeSlash onClick={()=>setShow(!show)} className='absolute text-2xl right-0 top-0'/>
                }
                {errors.password?.type === 'required' && (
                  <p className="text-red-600">Password is required</p>
                )}
                </div>

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='pl-4 pb-4'><small>New Here? <Link to= '/register' className='text-blue-500 underline'>Create a account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;