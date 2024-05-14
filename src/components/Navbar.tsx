// components/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black bg-opacity-10 backdrop-blur-md fixed top-0 w-full h-16 z-50">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
                <div>
                    <Link href="/">
                        <div className="text-white text-lg font-semibold">Your Logo</div>
                    </Link>
                </div>
                <ul className="flex space-x-4">
                    <NavItem name="Home" route="/" />
                    <NavItem name="Data" route="/t-shirts" />
                    <NavItem name="Exhange Rates" route="/hats" />
                    <NavItem name="Crypto" route="/about" />
                    <NavItem name="Commodities" route="/contact" />
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
