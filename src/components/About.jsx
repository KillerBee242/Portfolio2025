import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-card">
                <h2>About Me</h2>
                <p>
                    Passioned by the web and new technologies,
                    I am not only a Full Stack Developer but
                    also a Multimedia Designer.
                    I create visual brands, videos, sounds and apps.
                    I am a creative and curious person.
                    I am always looking for new challenges and
                    opportunities to learn new things.
                </p>
                <Link
                    to="/contact"
                    className="about-button">
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

export default About;