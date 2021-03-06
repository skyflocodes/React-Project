import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav className="bg-dark p-2">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-light">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/data" className="nav-link text-light">Team Info</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link text-light">About</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;