import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (<>
  <NavLink to="/form">Form</NavLink>&nbsp;&nbsp;&nbsp;
  <NavLink to="/list">List</NavLink>
  </>
    
  )
}
