import { Link } from "react-router-dom";
import html from "../assets/icons/icons8_html_5.svg"
import css from "../assets/icons/icons8_css3.svg"
import javascript from "../assets/icons/icons8_javascript.svg"
import react from "../assets/icons/icons8_react_1.svg"
import photoshop from "../assets/icons/icons8_adobe_photoshop.svg"
import illustrator from "../assets/icons/icons8_adobe_illustrator.svg"
import after from "../assets/icons/icons8_Adobe_After_Effects.svg"
import figma from "../assets/icons/icons8_figma_1.svg"
import capcut from "../assets/icons/capcut.png"
import mongo from "../assets/icons/icons8_Mongo_Db.svg"

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-card">
                <h2>Skills</h2>
                <p>
                    Here are the main tools I use to create content :
                </p>
                <div className="skills-icons">
                    <div>
                        <h3>HMTL5</h3>
                        <img src={html} alt="html" />
                    </div>
                    <div>
                        <h3>CSS3</h3>
                        <img src={css} alt="css" />
                    </div>
                    <div>
                        <h3>JavaScript</h3>
                        <img src={javascript} alt="javascript" />
                    </div>
                    <div>
                        <h3>React</h3>
                        <img src={react} alt="react" />
                    </div>
                    <div>
                        <h3>MongoDB</h3>
                        <img src={mongo} alt="mongodb" />
                    </div>
                    <div>
                        <h3>Figma</h3>
                        <img src={figma} alt="figma" />
                    </div>
                    <div>
                        <h3>Photoshop</h3>
                        <img src={photoshop} alt="photoshop" />
                    </div>
                    <div>
                        <h3>Illustrator</h3>
                        <img src={illustrator} alt="illustrator" />
                    </div>
                    <div>
                        <h3>After Effects</h3>
                        <img src={after} alt="after effects" />
                    </div>
                    <div>
                        <h3>Capcut</h3>
                        <img src={capcut} alt="capcut" className="capcut" />
                    </div>
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

export default Skills;