import React, { useContext, useRef, useState }  from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png'


export const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} className='logo' alt="" />
            <p>Tech</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("websites")}}><Link style={{ textDecoration: 'none' }} to='/websites'>Websites</Link>{menu==="websites"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("softwares")}}><Link style={{ textDecoration: 'none' }} to='/softwares'>Softwares</Link>{menu==="softwares"?<hr/>:<></>}</li>

            <li onClick={()=>{setMenu("hosting")}}><Link style={{ textDecoration: 'none' }} to='/hosting'>Hosting </Link>{menu==="hosting"?<hr/>:<></>}</li>
            
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>


    </div>
  )
}
