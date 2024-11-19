import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-me">Contact me</div>
                <form className="form-container">
                    <div className="name-email-container">
                        <div className="name-container">
                            <div className="input-title">Name</div>
                            <input
                                className="input-bar-name"
                                type="text"
                                name="my-name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="email-container">
                            <div className="input-title">Email</div>
                            <input
                                className="input-bar-email"
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="message-container">
                        <div className="input-title">Message</div>
                        <textarea
                            className="message-box"
                            type="text"
                            name="message"
                            placeholder="Enter your message"
                        />
                    </div>
                    <div className="submit-button-container">
                        <button className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;