import React from 'react'
import logo from '../assets/logo.png'
import loginpic from '../assets/Loginimg.png'
import '../components/Navbar.css'
import { Link } from 'react-router-dom'

/**
 * A basic Bootstrap navbar with a logo and the text "Bootstrap"
 *
 * @return {React.ReactElement} The JSX element representing the navbar
 */
const Navbar = () => {
  return (
    <>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="40" height="28" class="d-inline-block align-text-top"/>
                 Speed
            </a>
         
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collab
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://vendorsfrontendside.vercel.app/">As Partner</a></li>
                <li><a class="dropdown-item" href="https://vendorsfrontendside.vercel.app/">As Vendor</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="https://vendorsfrontendside.vercel.app/">Both</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <div className="registercontainer">
              <img src={loginpic} alt="Logo" width="40" height="32" class="d-inline-block align-text-top"/>
              <a class="nav-link" href="#">Login</a>
              <a class="nav-link" id='spaceforsignup' href="#">Signup</a>
            </div>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar