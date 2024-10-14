import './Footer.css';  // Import the CSS file for footer styling

function Footer() {
    return (
        <>
            <div className="footer">  {/* Main footer container */}
                <p>Footer © {new Date().getFullYear()} | All rights reserved.</p>

                {/* Links section for footer navigation */}
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>  {/* Privacy Policy link */}
                    <a href="#">Terms of Service</a>  {/* Terms of Service link */}
                    <a href="#">Contact Us</a>  {/* Contact Us link */}
                </div>
            </div>
        </>
    );
}

export default Footer;
