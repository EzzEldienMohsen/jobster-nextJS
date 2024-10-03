import React from 'react';
import LinksDropDown from './LinksDropDown';
import { UserButton } from '@clerk/nextjs';
import ThemeToggle from './ThemeToggle';
const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-4 sm:px-16 lg:px-24 bg-muted flex items-center justify-between">
      <div>
        <LinksDropDown />
      </div>
      <div className="items-center flex gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
