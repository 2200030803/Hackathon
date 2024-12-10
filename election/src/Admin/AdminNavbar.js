import React ,{useEffect}from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../style.css'
import Home from '../Main/Home'
import { useNavigate } from 'react-router-dom'
import Login from '../Main/Login'
import PageNotFound from '../Main/PageNotFound'
import AdminHome from './AdminHome'



export default function AdminNavBar() {
  const navigate=useNavigate()

  
  
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');

    navigate('/login');
    window.location.reload()
  };
  return (

    <div>
      <div className='header-container'>
        <header className='app-header'>
        <div className="app-logo">
      + SOUL MEDIC
      <p className="tagline">Multi Specialty Hospital</p>
    </div>
      <div className='nav-bar'>

       
      </div>
      </header>
      </div>
      <div className='sidebar'>
      <Link to='/adminhome'>Home</Link>
      
       <Link><button className='logoutbutton' onClick={handleLogout}>Logout</button></Link>
      </div>
      <Routes>
        <Route path='/'Component={AdminHome}  exact/>
        <Route path='/adminhome' Component={AdminHome}  exact/>
        
        
        
      </Routes>
    </div>
  )
}