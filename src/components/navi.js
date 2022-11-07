import {NavLink} from 'react-router-dom'

function navi(){
  return (
  
    <navbar>
        <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/about" >About</NavLink> </li>
            
            <li> <NavLink to="/contact" >Contact Us</NavLink></li>
        </ul>
    </navbar>
  )
}

export default navi