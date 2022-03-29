import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const LOGO = "./assets/logo.png"

const Header: React.FC = () => {
  return (
    <div className="header">
        <div className="container-title">
            <img className="logo" src={LOGO} width="50" height="50" alt="logo" />
            <h2>Air Media</h2>
        </div>
        <div className="to-home">
          <Link to="/">
            HOME
          </Link>
        </div>
    </div>
  )
}

export default Header