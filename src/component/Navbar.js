import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import './Navbar.css';


const Navbar=()=>{
    return(
        <div className='nav'>
            <Link to='/home' className='l'>Home</Link>
            <Link to='/student' className='l'>Student</Link>
            <Link to='/contact' className='l'>Contact</Link>
            <Outlet/>
        </div>
    );
}
export default Navbar;