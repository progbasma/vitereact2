import React from 'react'
// import './Navbar.css'
// import './Navbar.module.css'
import './Navbar.scss'
import styled from 'styled-components'
import { NavLink } from 'react-router';

const Navstyledcomponent = styled.nav`
  background-color: #333;
  padding: 10px;
  text-align: center;
`;



// const styles={
//   navstyle:{
//      background-color: #333;
//  padding: 10px;
//  text-align: center;
//   },
//   ulstyle:{
//     listStyle:"none",
//     display:"flex"
//   }
// }


function Navbarc() {
  /*
  ways to style react.js component 
  1- inline css
  2- css external file and import it in jsx file 
  3- css modules or scss modules
  4- css processors : scss , sass 
  5- styled components  or emotion
  6- css framework like bootstrap or tailwind css
  7- react.js ui components library like shadcn ui , material ui ,  chakra ui
  
  
  */
  return (
  <>

    <Navstyledcomponent  as="nav">
      <ul>
        <li><NavLink to="/">home page</NavLink></li>
        <li><NavLink to="/about">about us</NavLink></li>
        <li><NavLink to="/contact">contact us</NavLink></li>
      </ul>
    </Navstyledcomponent>
  </>

  )
}

export default Navbarc