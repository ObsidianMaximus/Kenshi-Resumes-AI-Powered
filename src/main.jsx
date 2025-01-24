import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignInPage from './auth/sign-in'
import Home from './home'
import Dashboard from './dashboard'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
//creating a router
const router = createBrowserRouter([
  //deafult route
  {
    // path: '/',
    element: <App />,
    //sub routes
    children: [
      // {
      //   path: '/',
      //   element: <Home />//now we have to make sure to render the home component inside the app component
      // },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/',
    element: <Home />//now we have to make sure to render the home component inside the app component
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
