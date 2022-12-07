import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header style = {{position: "absolute", top: 0, left: 0, width: 100 + "%", display: "flex", justifyContent: "center", alignItems: "center", padding: 20 + 'px'}}>
        <NavLink to = "/">Home</NavLink>
    </header>
  )
}
