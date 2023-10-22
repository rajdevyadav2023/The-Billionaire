import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className='content-wrapper footer'>
            <div className="footer-content">
                <h1 className="logo"><NavLink to={'/'}><span className="fc">B</span>illionaire</NavLink></h1>
                <p>Copyright &copy; 2023, All Rights Reserved </p>
                <p>By Rajdev Yadav</p>
            </div>
            <div className="footer-content">
                <ul>
                    <li>  <i className="fa-solid fa-arrow-up-right-dots"></i> Investors</li>
                    <li> <i className="fa-solid fa-users"></i> Founders</li>
                    <li> <i className="fa-solid fa-handshake"></i> Contact Us</li>
                    <li> <i className="fa-solid fa-headset"></i> Advertise</li>
                    <li> <i className="fa-solid fa-heart"></i> Give Feedback</li>
                    <li> <i className="fa-solid fa-triangle-exclamation"></i> Report Issue</li>
                    <li> <i className="fa-solid fa-lock"></i> Privacy & Policy</li>
                </ul>
            </div>
            <div className="footer-content">
                <ul>
                    <li> <i className="fa-solid fa-phone"></i> +91 012 345 6789</li>
                    <li> <i className="fa-solid fa-envelope"></i> yadav@help.com</li>
                    <li> <i className="fa-solid fa-location-dot"></i> Noida, Uttar Pradesh, India</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer