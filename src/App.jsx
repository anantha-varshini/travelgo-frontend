import './App.css'

import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

import Register from './Register'
import Login from './Login'

import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Ooty from './pages/Ooty'
import Kodaikanal from './pages/Kodaikanal'
import Yercaud from './pages/Yercaud'
import Yelagiri from './pages/Yelagiri'
import Valparai from './pages/Valparai'
import Kotagiri from './pages/Kotagiri'
import Bookings from './pages/Bookings'
import Contact from './pages/Contact'
import India from './pages/India'
import Hotels from './pages/Hotels'
import Hotelpage from './new/Hotelpage'
import China from './pages/China'
import Dubai from './pages/Dubai'
import Japan from './pages/Japan'
import Southkorea from './pages/Southkorea'
import Vietnam from './pages/Vietnam'
import About from './pages/About'
import Gallery from './pages/Gallery'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'


function AppContent() {

  const location = useLocation()

  const hideLayout =
  location.pathname === '/'|| 
    location.pathname === '/login' ||
    location.pathname === '/register'

  return (
    <>
      {/* Navbar will NOT show on login/register */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/"element={<Register/>}/>

        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/ooty" element={<Ooty />} />

        <Route path="/kodaikanal" element={<Kodaikanal />} />

        <Route path="/yercaud" element={<Yercaud />} />

        <Route path="/yelagiri" element={<Yelagiri />} />

        <Route path="/valparai" element={<Valparai />} />

        <Route path="/kotagiri" element={<Kotagiri />} />

        <Route path="/bookings" element={<Bookings />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/hotels" element={<Hotels />} />

        <Route path="/hotelpage" element={<Hotelpage />} />

        <Route path="/india" element={<India />} />

        <Route path="/china" element={<China />} />

        <Route path="/dubai" element={<Dubai />} />

        <Route path="/japan" element={<Japan />} />

        <Route path="/southkorea" element={<Southkorea />} />

        <Route path="/vietnam" element={<Vietnam />} />

        <Route path="/about" element={<About />} />

        <Route path="/gallery" element={<Gallery />} />

      </Routes>

      {/* Footer will NOT show on login/register */}
      {!hideLayout && <Footer />}
    </>
  )
}


function App() {

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App