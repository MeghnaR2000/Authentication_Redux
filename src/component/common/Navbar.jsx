import React from 'react'
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { logout } from '../../redux/AuthSlice';
import {useDispatch , useSelector } from 'react-redux'

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const { Logouttoggle } = useSelector((state) => state?.Auth);
    const name = localStorage.getItem("name");

    const log = () => {
        dispatch(logout())
        navigate("/login")
       
      }
    return (
        <>
             <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#87bdd8' }}>
        <a className="navbar-brand" href="#">Mern Project</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/student">Student</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
           
            {Logouttoggle ?
              <>
               <li className="nav-item">
               <Link className="nav-link bg bg-light">Hi..{name}</Link>
             
               </li>
               <li className="nav-item">
               <Link className="nav-link" onClick={log}>Logout</Link>
               </li>
              </>
              :
              <li className="nav-item">
           <Link className="nav-link" >Login</Link>
              </li>
            }
          
          </ul>
        </div>
      </nav>
    </div>
        </>
    )
}

export default Navbar