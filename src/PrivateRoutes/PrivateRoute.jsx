import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/authProvider";


const PrivateRoute = ({children}) => {
     const location = useLocation()

     const {user, loading} = useContext(authContext);
     console.log('user',user)
     if(loading){
          return (
               <>
               <span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>
</>
          )
     }
     if(user){
          return children;
     }

     return <Navigate to='/login' replace= {true} state={{from: location}}></Navigate>
};

export default PrivateRoute;