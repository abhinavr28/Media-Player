import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'

import './App.css'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={  <LandingPage/>}/>
    <Route path='/home' element={  <Home/>}/>
    <Route path='/watchhistory' element={  <WatchHistory/>}/>

    </Routes>
  
    <Footer/>
    
    </>
  )
}

export default App
