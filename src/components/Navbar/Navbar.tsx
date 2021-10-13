import { useState } from 'react';
import { navbarLinks } from './constants';
import AlertIcon from '../../assets/svgs/alert-icon.svg';
import Logo from '../../assets/svgs/logo.svg';
import CloseIcon from '../../assets/svgs/close.svg';
import LogoutIcon from '../../assets/svgs/logout.svg';
import MenuSvg from '../../assets/svgs/menu.svg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  return (
    <div className='navbar'>
      {/* Navbar for desktop  */}
      <div className='navbar__head--secondary'>
        <div className='center'>
          <img src={AlertIcon} alt='alert-icon' />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
      <div className='navbar__head--primary'>
        <div className='center'>
          <div className='brand--logo'>
            <img src={Logo} alt='' />
            <h3>
              Logo<span>Ipsum</span>
            </h3>
          </div>
          <ul className='navbar--links'>
            {navbarLinks.map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='navbar__mobile--navbar'>
        <div className='navbar__mobile--header'>
          <img
            onClick={toggleMenu}
            className='close--icon'
            src={MenuSvg}
            alt='close-icon'
          />
          <div className='brand--logo'>
            <img src={Logo} alt='' />
            <h3>
              Logo<span>Ipsum</span>
            </h3>
          </div>
          <img className='logout--icon' src={LogoutIcon} alt='logout-icon' />
        </div>
      </div>
      {/* End of mobile Navbar */}

      {/* Mobile Dropdown nav menu */}
      <div className={`navbar__mobile nav--menu ${openMenu && 'show-menu'}`}>
        <div className='navbar__mobile--header'>
          <img
            onClick={toggleMenu}
            className='close--icon'
            src={CloseIcon}
            alt='close-icon'
          />
          <div className='brand--logo'>
            <img src={Logo} alt='' />
            <h3>
              Logo<span>Ipsum</span>
            </h3>
          </div>
          <img className='logout--icon' src={LogoutIcon} alt='logout-icon' />
        </div>
        <ul className='navbar--links'>
          {navbarLinks
            .filter((link) => link.name !== 'Logout')
            .map(({ name }) => (
              <li key={name}>{name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
