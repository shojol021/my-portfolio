
const Navbar = () => {
    return (
        <nav className="bg-gray-100 py-2">
            <ul className="flex justify-center space-x-4">
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Skills</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Projects</a>
                </li>
                <li>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;