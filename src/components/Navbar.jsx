import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <NavLink to="" activeclassname={"active"}>Home</NavLink>
    <NavLink to="about" activeclassname={"active"}>About</NavLink>
    <NavLink to="movies" activeclassname={"active"}>Movies</NavLink>
  </nav>
  )
}

export default Navbar