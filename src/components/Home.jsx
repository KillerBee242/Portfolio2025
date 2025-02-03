import { Link } from "react-router-dom";
import icoGithub from "../assets/icons/github.svg";
import icoLinked from "../assets/icons/linkedin.svg";
import icoEnvelope from "../assets/icons/envelope.png";

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-card">
                <h2>Hi, I'm Bee</h2>
                <h1>Web Designer <br />
                    & Developer</h1>
                <p>I make beautiful and fonctionnal interfaces for you.</p>
                <div className="home-icons">
                    <Link to="https://www.github.com/killerbee242">
                        <img src={icoGithub} alt="github" className="github" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/berger-nkouka-174887198/">
                        <img src={icoLinked} alt="linkedIn" className="linkedin" />
                    </Link>
                    <Link to="/contact">
                        <img src={icoEnvelope} alt="mail" className="envelope" />
                    </Link>
                </div>
                <Link
                    to="/about"
                    className="about-button">
                    Know More
                </Link>
            </div>
        </div>
    )
}

export default Home;