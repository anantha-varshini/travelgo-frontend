
import './App.css';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

import Register from './Register';
import Login from './Login';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Ooty from './pages/Ooty';
import Kodaikanal from './pages/Kodaikanal';
import Yercaud from './pages/Yercaud';
import Yelagiri from './pages/Yelagiri';
import Valparai from './pages/Valparai';
import Kotagiri from './pages/Kotagiri';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import India from './pages/India';
import Hotels from './pages/Hotels';
import Hotelpage from './new/Hotelpage';
import China from './pages/China';
import Dubai from './pages/Dubai';
import Japan from './pages/Japan';
import Southkorea from './pages/Southkorea';
import Vietnam from './pages/Vietnam';
import About from './pages/About';
import Gallery from './pages/Gallery';

import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from 'react-router-dom';


function AppContent() {

    const location = useLocation();

    // Hide Navbar and Footer only on Login and Register
    const hideLayout =
        location.pathname === '/login' ||
        location.pathname === '/register';

    return (
        <>
            {!hideLayout && <Navbar />}

            <Routes>

                {/* Default page */}
                <Route path="/" element={<Home />} />

                {/* Authentication pages */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* Main pages */}
                <Route path="/home" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />

                {/* Tamil Nadu destinations */}
                <Route path="/ooty" element={<Ooty />} />
                <Route path="/kodaikanal" element={<Kodaikanal />} />
                <Route path="/yercaud" element={<Yercaud />} />
                <Route path="/yelagiri" element={<Yelagiri />} />
                <Route path="/valparai" element={<Valparai />} />
                <Route path="/kotagiri" element={<Kotagiri />} />

                {/* Booking and contact */}
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/contact" element={<Contact />} />

                {/* Hotels */}
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/hotelpage" element={<Hotelpage />} />

                {/* International destinations */}
                <Route path="/india" element={<India />} />
                <Route path="/china" element={<China />} />
                <Route path="/dubai" element={<Dubai />} />
                <Route path="/japan" element={<Japan />} />
                <Route path="/southkorea" element={<Southkorea />} />
                <Route path="/vietnam" element={<Vietnam />} />

                {/* Other pages */}
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />

                {/* Invalid URL */}
                <Route path="*" element={<Home />} />

            </Routes>

            {!hideLayout && <Footer />}
        </>
    );
}


function App() {

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
