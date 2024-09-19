"use client"
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import useAuthStore from '../stores/useAuthStore'; // Update this path
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuthStore();

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Product Catalog
        </Link>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Button onClick={logout} variant="outline">Logout</Button>
          ) : (
            <Button onClick={login} variant="outline">Login</Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;