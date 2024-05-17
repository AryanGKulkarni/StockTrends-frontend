// components/NavBar.tsx
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'

const Navbar: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const token = Cookies.get('accessToken');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        Cookies.remove('accessToken');
        setIsAuthenticated(false);
        router.push('/'); // Redirect to home after logout
    };
    return (
        <nav className="bg-black bg-opacity-10 backdrop-blur-md fixed top-0 w-full h-16 z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
                <div>
                    <Link href="/">
                        <div className="text-white text-lg font-semibold">Stock Trends</div>
                    </Link>
                </div>
                <ul className="flex space-x-4">
                    <NavItem name="News" route="/news" />
                    <NavItem name="Stock Symbols" route="/stockSymbols" />
                    <NavItem name="Watchlist" route="/watchlist" />
                    {!isAuthenticated ? (
                        <>
                            <Link href="/login"><Button style={{height: 30, width: 60}}>Login</Button></Link>
                            <Link href="/signup"><Button style={{height: 30}}>Signup</Button></Link>
                        </>
                    ) : (
                        <Button style={{ height: 30 }} onClick={handleLogout}>Logout</Button>
                    )}
                </ul>
            </div>
        </nav>
    );
};

interface NavItemProps {
    name: string;
    route: string;
}

const NavItem: React.FC<NavItemProps> = ({ name, route }) => {
    return (
        <li>
            <Link href={route}>
                <div className="text-white hover:text-gray-300">{name}</div>
            </Link>
        </li>
    );
};

export default Navbar;
