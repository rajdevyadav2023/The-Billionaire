
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import JoinUs from './pages/join/JoinUs'
import Lifestyle from './pages/lifestyle/Lifestyle'
import Habits from './pages/habits/Habits'
import Business from './pages/business/Business'
import Career from './pages/career/Career'
import Mindset from './pages/mindset/Mindset'
import Education from './pages/education/Education'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/education' element={<Education/>}/>
        <Route path='/mindset' element={<Mindset/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/habits' element={<Habits/>}/>
        <Route path='/lifestyle' element={ <Lifestyle/>}/>
        <Route path='/join' element={<JoinUs/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
