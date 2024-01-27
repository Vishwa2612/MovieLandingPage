import React from 'react';
import netflix from "../Images/netflix.png";
import AvatarImageSrc from './AvatarImageSrc.jsx';

const Navigation = () => {
  return (
    <div className="bg-none p-5">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex flex-row">
          <div className='pr-3 pl-3'>
            <img src={netflix} className="w-20" alt="Netflix Logo" />
          </div>
          <div className="flex items-center space-x-5 pl-5 text-xl">
            <div className="text-white rounded-3xl p-1 hover:text-black hover:border-white hover:bg-white transition-all duration-500 animate-fade-in-down">
              Home
            </div>
            <div className="text-white rounded-3xl p-1 hover:text-black hover:border-white hover:bg-white transition-all duration-500 animate-fade-in-down">
              About Us
            </div>
            <div className="text-white rounded-3xl p-1 hover:text-black hover:border-white hover:bg-white transition-all duration-500 animate-fade-in-down">
              Sign Up
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center hover:-translate-y-2 duration-500">
          <AvatarImageSrc />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
