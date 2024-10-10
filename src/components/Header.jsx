import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="nav-wrapper">
            <div className="logo-container">
                <Link to="/" className="logo">
                    <img src="./src/assets/burger.png" alt="Hangaama Food Logo" className="logoimage" />
                    <p>Hangaama Food</p>
                </Link>
            </div>
            <nav>
                {/* Hamburger menu button */}
                <button
                    className="menu-btn"
                    aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                    onClick={toggleMenu}
                >
                    <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                </button>

                {/* Navigation container */}
                <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
                    {/* Close button */}
                    <button className="close-btn" onClick={closeMenu} aria-label="Close Menu">
                        &times;
                    </button>

                    <ul className="nav-tabs">
                        <li>
                            <Link className="nav-tab" to="/" onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id='hoverme'>
                                    <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-tab" to="/cart" onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
                                    <circle cx="10.5" cy="19.5" r="1.5" />
                                    <circle cx="17.5" cy="19.5" r="1.5" />
                                </svg>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-tab" to="/fav" onClick={closeMenu}>
                                <p className='ps'>🖤</p>
                                Favorite
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-tab" to="/checkout" onClick={closeMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M5 5v14a1 1 0 0 0 1 1h3v-2H7V6h2V4H6a1 1 0 0 0-1 1zm14.242-.97-8-2A1 1 0 0 0 10 3v18a.998.998 0 0 0 1.242.97l8-2A1 1 0 0 0 20 19V5a1 1 0 0 0-.758-.97zM15 12.188a1.001 1.001 0 0 1-2 0v-.377a1 1 0 1 1 2 .001v.376z" />
                                </svg>
                                Checkout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
