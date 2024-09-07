import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/user/Home';
import Menu from './components/user/Menu'
import About from './components/user/About';
import Contact from './components/user/Contact';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Cart from './components/user/Cart';
import Location from './components/user/Location';
import Careers from './components/user/Careers';
import Franchise from './components/user/Franchise';
import Terms from './components/user/Terms';
import PrivacyPolicy from './components/user/PrivacyPolicy';
import Accessibility from './components/user/Accessibility';
import StudentDiscount from './components/user/StudentDiscount';
import Returns from './components/user/Returns';
import Shipping from './components/user/Shipping';
import Faqs from './components/user/Faqs';
import Reviews from './components/user/Reviews';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/location" element={<Location />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/franchising" element={<Franchise />} />
          <Route path="/termsofuse" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/studentdiscount" element={<StudentDiscount />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
