import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../../../assets/images/logo-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigation = [
    { name: "About Us", href: "/about", current: false },
    { name: "Life At NTQ", href: "/life-at-ntq", current: false },
    { name: "Job", href: "/jobs", current: false },
    { name: "Insights", href: "/insights", current: false },
    { name: "Contact Us", href: "/contact", current: false },
  ];

  return (
    <div className='header'>
      <div className='base-container header-container'>
        <div className='header__logo'>
          <Link to={'/'}>
            <img className='header__logo-image' src={LogoImage} alt="Logo NTQ" />
          </Link>
        </div>
        <div className='header__right float-right'>
          <div className='header__right-nav'>
            {navigation.map((link) => (
              <NavLink to={link.href} activeClassName="active" className='nav-link'> {link.name} </NavLink>
            ))}
          </div>
          <div className='header__right-option'>
            <ul className='language-option'>
              <li className='language-option__item'>
                VietNam
                <FontAwesomeIcon icon={faCaretDown} />
                <ul>
                  <li><span className='active'>VietNam</span></li>
                  <li><span>English</span></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
