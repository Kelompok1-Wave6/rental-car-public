import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { IoClose } from 'react-icons/io5'
import { HiBars3 } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../asset/logo.svg'

import './Navbar.css'
// import ToggleNav from '../SideNav/ToggleNav'

const Navbar = props => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    
    
    const location = useLocation();
    const show = location.pathname === '/' ? true : false;
    const accessToken = localStorage.getItem('access_token');

    function LogoutButton() {
        const handleClick = () => {
          localStorage.clear();
        };
      
        return (
          <Link to="/" onClick={handleClick}
           className="btn logoutbtn">
            Log out
          </Link>
        );
      }
    
      function RegisterButton() {
        return (
          <Link
            to={'/sign-up'} 
            >Register
          </Link>
        );
      }

    return (
        <div className='header'>
            <Container>
                    {/* <div>
                        <ToggleNav/>
                    </div> */}

                <nav className='navbar'>
                    <NavLink to='/'>
                        <div className='logo pt-3 '>
                            <img src={Logo} alt='logo' />
                        </div>
                    </NavLink>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<IoClose size={30} style={{ color: '#000000' }} />)
                        : (<HiBars3 size={30} style={{ color: '#000000' }} />)}
                        
                    </div>
{/* 
                    <ul className="nav-menu"> 
                        <li className='nav-item'>
                            <NavLink to='/ourservis'>Our Services</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/whyus'>Why Us</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/testi'>Testimonial</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/faq'>FAQ</NavLink>
                        </li>
                    </ul> */}

            <ul className={click ? "nav-menu active" : "nav-menu"}> 
                <li className='nav-item'>
                <NavLink to='/ourservis' onClick={closeMenu}>Our Services</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to='/whyus' onClick={closeMenu}>Why Us</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to='/testi' onClick={closeMenu}>Testimonial</NavLink>
                </li>
                <li className='nav-item'>
                <NavLink to='/faq' onClick={closeMenu}>FAQ</NavLink>
                </li>
                
            </ul>
            <ul className={click ? "nav-regis active" : "nav-regis"}> 
                <li className='buttonregist'>
                  { accessToken ? <LogoutButton /> : <RegisterButton />}
                </li>
            </ul>
                </nav>

            </Container>
        </div>
               
                

            
    )
}

export default Navbar
