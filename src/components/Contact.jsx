import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <h2>Contact</h2>
                <p>
                    What can I do for your business today ?
                </p>
                <form action="submit" className="form">
                    <h2>Let me know what you need</h2>
                    <h3>Name</h3>
                    <input type="name" name="name" id="" placeholder="Your name" className="field-input" />
                    <h3>Mail</h3>
                    <input type="email" name="email" id="" placeholder="Your mail" className="field-input" />
                    <h3>Message</h3>
                    <input type="text" name="message" id="" placeholder="Your message" className="field-input" />
                    <button type="" className="send-button">
                        <Link
                            to="/"
                            className="form-send">
                            Send
                        </Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;