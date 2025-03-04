import { useState } from 'react'
import './App.css'
import { Navigate, Outlet } from 'react-router'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'
import { Toaster } from "@/components/ui/sonner"

function App() {
  const [theme, setTheme] = useState('light');
  const { user, isLoaded, isSignedIn } = useUser();//user hook

  //user will be navigated to sign-in page on renering '/' route
  //isLoaded should be true because while autheticating using user hook it takes sometime hence isSignedIn is false therefore check condition only when  isLoaded is true which determines whether the async process of fetching or preparing data has completed.
  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <div className="overflow-hidden">
      <Header />
      {/* this is where the home component will be rendered */}
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App
