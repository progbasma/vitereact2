import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Mainc from './components/main/Mainc';
import Navbarc from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import { Route, Routes } from 'react-router';
import Contact from './pages/Contact';


function App() {
  
  return (
    <>
      <Navbarc/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      
      <Footer/>
      
    </>
  )
}

export default App
