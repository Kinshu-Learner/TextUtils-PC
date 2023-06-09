import React from 'react'

import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src = '../favicon.ico' alt = {props.title} width = "40px" className='ms-3'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
                <div className="form-check form-switch mx-2 ms-4">
                    <input className="form-check-input my-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{cursor:'pointer'}} onClick={props.toggleMode}/>
                        <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Light Mode</label>
                </div>
            </nav>
        </div>
    )
}
