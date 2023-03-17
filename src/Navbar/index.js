import {Link} from 'react-router-dom'
import { SiBookstack } from "react-icons/si";
import './index.css'

const Navbar = () =>{
    return(
        <>
        <nav className='nav-header'>
              <Link to="/">
                  <button type="button" className="logo-head">
                  Books App  <SiBookstack/>
                  </button>
                </Link>
              <div className="links">
                <Link to="/">
                  <button type="button" className="nav-button">
                    Home
                  </button>
                </Link>
                <Link to="/addbook">
                  <button type="button" className="nav-button">
                    Add Book
                  </button>
                </Link>
              </div>
            </nav></>
    )
}

export default Navbar