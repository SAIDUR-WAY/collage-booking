
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import AuthProvider from './Provider/authProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router}></RouterProvider>
        </div>
    </AuthProvider>
  
)
