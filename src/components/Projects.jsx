import { Link } from "react-router-dom";
import Example from "../assets/images/example.jpeg";

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-card">
                <h2>Projects</h2>
                <p>
                Here are some of the best projects I've been working on, recently :                
                </p>
                <div className="projects-links">
                    <Link
                        to="https://www.github.com/killerbee242"
                        className="project-link"
                        >
                        <div className="project-card">
                            <img src={Example} alt="project1" />
                            <h3>Project 1</h3>
                            <p>Realized by BeeKuka</p>
                        </div>
                    </Link>
                    <Link
                        to="https://www.github.com/killerbee242"
                        className="project-link"
                        >
                        <div className="project-card">
                            <img src={Example} alt="project2" />
                            <h3>Project 2</h3>
                            <p>Realized by BeeKuka</p>
                        </div>
                    </Link>
                    <Link
                        to="https://www.github.com/killerbee242"
                        className="project-link"
                        >
                        <div className="project-card">
                            <img src={Example} alt="project3" />
                            <h3>Project 3</h3>
                            <p>Realized by BeeKuka</p>
                        </div>
                    </Link>
                    <Link
                        to="https://www.github.com/killerbee242"
                        className="project-link"
                        >
                        <div className="project-card">
                            <img src={Example} alt="project4" />
                            <h3>Project 4</h3>
                            <p>Realized by BeeKuka</p>
                        </div>
                    </Link>
                </div>
                <Link
                    to="/contact"
                    className="about-button">
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

export default Projects;