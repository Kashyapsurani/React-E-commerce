import './Footer.css'; 

function Footer() {
    return (
        <>
            <div className="footer">  
                <p>Footer © {new Date().getFullYear()} | All rights reserved.</p>


                <div className="footer-links">
                    <a href="#">Privacy Policy</a>  
                    <a href="#">Terms of Service</a>  
                    <a href="#">Contact Us</a>  
                </div>
            </div>
        </>
    );
}

export default Footer;
