import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = ['Home', 'Skills', 'Datasets', 'Fine-tune', 'Demonstrate'];

  const RobotIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect x='3' y='11' width='18' height='10' rx='2' />
      <circle cx='12' cy='5' r='2' />
      <path d='M12 7v4' />
      <line x1='8' y1='16' x2='8' y2='16' />
      <line x1='16' y1='16' x2='16' y2='16' />
    </svg>
  );

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a
          className='navbar-brand'
          onClick={() => setCurrentPage('home')}
          style={{ cursor: 'pointer' }}
        >
          <RobotIcon />
          <span>Skills Platform</span>
        </a>
        <div className='navbar-links'>
          {navItems.map(item => (
            <a
              key={item}
              className={`navbar-link ${
                currentPage === item.toLowerCase() ? 'active' : ''
              }`}
              onClick={() => setCurrentPage(item.toLowerCase())}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
