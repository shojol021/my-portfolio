import { useState } from "react";
import './navbar.css'

const Navbar = () => {

    const [activeNavItem, setActiveNavItem] = useState('Home');

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    return (
        <nav className="fixed bg-slate-500 bg-opacity-20 w-full flex justify-between py-2 z-50">
            <div className="ms-5 font-bold">
                <a href="/">Adnan Hossain Shojol</a>
            </div>
            <div>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <a
                            href="#"
                            className={`text-gray-800 hover:text-blue-600 ${activeNavItem === 'Home' ? 'nav-active' : ''
                                }`}
                            onClick={() => handleNavItemClick('Home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-gray-800 hover:text-blue-600 ${activeNavItem === 'Skills' ? 'nav-active' : ''
                                }`}
                            onClick={() => handleNavItemClick('Skills')}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-gray-800 hover:text-blue-600 ${activeNavItem === 'Projects' ? 'nav-active' : ''
                                }`}
                            onClick={() => handleNavItemClick('Projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-gray-800 hover:text-blue-600 ${activeNavItem === 'Contact' ? 'nav-active' : ''
                                }`}
                            onClick={() => handleNavItemClick('Contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="me-5">
                Dark mode
            </div>
        </nav>
    );
};

export default Navbar;