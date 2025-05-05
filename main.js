import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
function Main() {
  return (
    <header>
      <h1>Welcome to My App</h1>
      <nav className="navbar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet/>
     
    </header>
  );
}
export default Main;