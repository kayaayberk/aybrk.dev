'use client';

import Link from 'next/link';
import Avatar from './Avatar';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex flex-row justify-center items-center p-5 space-x-4 max-w-xl mx-auto
      backdrop-blur-3xl bg-white">
        <div className="flex-1 flex justify-start space-x-4">
          <Link href="/">About</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </div>

          <DarkModeToggle />
          <Avatar />

      </nav>
    </header>
  );
}

export default Header;
