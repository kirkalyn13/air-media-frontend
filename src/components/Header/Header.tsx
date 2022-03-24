import React from 'react'
import './Header.css'

const LOGO = "./assets/logo.png"

const buttonStyles = {
    backgroundColor: '#B2EBF2', 
    color: '#000', 
    fontWeight:"bold", 
    margin:"5px"
}

const Header: React.FC = () => {
  return (
    <div className="header">
        <div className="container-title">
            <img className="logo" src={LOGO} width="50" height="50" alt="logo"/>
            <h2>Air Media</h2>
        </div>
    </div>
  )
}

export default Header