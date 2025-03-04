import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignInPage from './auth/sign-in'
import SignUpPage from './auth/sign-up'
import Home from './home'
import Dashboard from './dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './dashboard/resume/[resumeId]/edit'
import ViewResume from './my-resume/[resume-id]/view'
import { ThemeContext } from './context/ThemeContext'
import { CustomThemeProvider } from './context/ThemeContext'
import { useState } from 'react'
import { ThemeProvider } from "@/components/ui/theme-provider"
import { dark, shadesOfPurple } from '@clerk/themes'
import { useEffect } from 'react'

// Import your Publishable Key
const PUBLISHABLE_KEY = window.__env.VITE_CLERK_PUBLISHABLE_KEY || import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
//creating a router
const router = createBrowserRouter([
  //default route
  {
    path: '/',
    element: <Home />//now we have to make sure to render the home component inside the app component
  },
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
      },
      {
        path: '/dashboard/resume/:resumeId/edit',//dyanmic route
        element: <EditResume />
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/auth/sign-up',
    element: <SignUpPage />,
  },
  {
    path: 'my-resume/:resumeId/view',
    element: <ViewResume />
  }
])

//wrapper component
function Root() {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
    ;
  }, []);
  return (
    <CustomThemeProvider value={{ theme, setTheme }}>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        signUpFallbackRedirectUrl='/'
        signInFallbackRedirectUrl='/'
        afterSignOutUrl="/"
      >
        <RouterProvider router={router} />
      </ClerkProvider>
    </CustomThemeProvider>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <App /> */}
      <Root />
    </ThemeProvider>
  </StrictMode >
)
