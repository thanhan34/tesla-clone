import React from 'react'
import './Header.css'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
function Header({ isMenuOpen, setIsMenuOpen }) {
    return (
        <div className="header">
            <div className="header__logo">
                <LinkR to="/">
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" className="header__logoImg" />
                </LinkR>
            </div>
            <div className='header__links'>
                <LinkS to="model3" smooth={true} spy={true} duration={500} activeClass="active">Model 3</LinkS>
                <LinkS to="models" smooth={true} spy={true} duration={500} activeClass="active" >Model S</LinkS>
                <LinkS to="modelx" smooth={true} spy={true} duration={500} activeClass="active">Model X</LinkS>
                <LinkS to="modely" smooth={true} spy={true} duration={500} activeClass="active">Model Y</LinkS>
                <LinkS to="modelcyber" smooth={true} spy={true} duration={500} activeClass="active">CYBERTRUCK</LinkS>
                <LinkS to="powerwall" smooth={true} spy={true} duration={500} activeClass="active">POWERWALL</LinkS>
            </div>
            <div className='header__right'>
                <LinkR to='/' className={isMenuOpen && 'header__link--hidden'}>Shop</LinkR>
                <LinkR to='/login' className={isMenuOpen && 'header__link--hidden'}>Tesla Account</LinkR>
                <div className='header__menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
        </div>
    )
}

export default Header
