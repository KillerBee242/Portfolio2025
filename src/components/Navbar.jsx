import { Link } from "react-router-dom";
import icoMail from "../assets/icons/mailing.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">BeeKuka</Link>
                <div className="nav-links">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                    <Link to="/skills" className="nav-link">
                        Skills
                    </Link>
                    <Link to="/projects" className="nav-link">
                        Projects
                    </Link>
                    <Link to="/contact" className="nav-button">
                        <img src={icoMail} alt="mail" className="mail" />
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const Logo = () => (
    <div className="">
        <span className="">
            BeeKuka
        </span>
    </div>
)

export default Navbar;