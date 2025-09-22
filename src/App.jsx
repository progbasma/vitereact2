import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Mainc from './components/main/Mainc';
import Navbarc from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import { Route, Routes } from 'react-router';
import Contact from './pages/Contact';
import ClassComponent1 from './components/ClassComponent1';
import Fcomponent1 from './components/Fcomponent1';
import Login from './components/Login';
import Bootstraplogin from './components/Bootstraplogin';
import Formiklogin from './components/Formiklogin';
import FunctionCopm from './components/FunctionCopm';


function App() {
  
  return (
    <>
      <Navbarc/>
      {/* <Login/> */}
      {/* <Bootstraplogin/> */}
      <FunctionCopm message='message1' myname='ahmed'/>
      <FunctionCopm message='message2' myname='basma'/>
      
      <FunctionCopm message='message3' myname='karim'>
        <p></p>
        <span></span>
      </FunctionCopm>


      <Formiklogin/>
      <Fcomponent1/>
    
      <ClassComponent1/>
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
