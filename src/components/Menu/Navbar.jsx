import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


function Navbar() {
  return (
    <nav className='navbar' >

     <Link  to='/' className='logo'><h1>React</h1></Link>
        <ul className='lu'>
            <li> <Link to="/Inicio">Inicio</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li><Link to="/ItemListContainer/Productos 1">Productos 1</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
            <li><Link to="/ItemListContainerFirebase">Productos Firebase</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar