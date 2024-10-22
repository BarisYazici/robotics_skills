import React from 'react';
import { RobotIcon } from './icons';

const Navigation = ({ setCurrentPage, currentPage }) => (
  <nav className='bg-white shadow-sm'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between h-16'>
        <div className='flex'>
          <div
            className='flex-shrink-0 flex items-center cursor-pointer'
            onClick={() => setCurrentPage('home')}
          >
            <RobotIcon />
            <span className='ml-2 font-bold'>Franka Robot Arm</span>
          </div>
          <div className='ml-6 flex space-x-8'>
            {['home', 'skills', 'datasets', 'fine-tune', 'demonstrate'].map(
              page => (
                <span
                  key={page}
                  className={`text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 cursor-pointer ${
                    currentPage === page
                      ? 'border-blue-500'
                      : 'border-transparent'
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
