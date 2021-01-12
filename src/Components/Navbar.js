
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [active,setActive] = useState(1)

    //FOR LIGHT VERSION USE THIS ONE
    return(
        <div className='navs__content__basic'>
            <Link to='/' onClick={()=>setActive(2)} className={active===2?'active_navs':''}>Accueil</Link>
            <Link to='/catalogue' onClick={()=>setActive(3)} className={active===3?'active_navs':''}>Catalogue</Link>
            <Link to='/contact' onClick={()=>setActive(4)} className={active===4?'active_navs':''}>Questions fréquements posées</Link>
        </div>
        )

    }

export default Navbar;
