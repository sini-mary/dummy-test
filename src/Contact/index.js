import React, { useState } from "react";
import './style.css';


const Contact =() =>{

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send the message)
    };

    return(
        <div>
            <div className="yellow-circle">
        </div>
         <div className="green-circle">
        </div>
        <div id="atembo"><img src={process.env.PUBLIC_URL + '/images/urban.jpeg'} alt="Atembo Team" />
        </div>


        <div className="form-container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Write Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="textarea-field"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
            </div>


          
          
            <h1 id="team">Our Team</h1>
            <div className="team-container">

                <div className="team-member">
                    <img src={process.env.PUBLIC_URL + '/images/Megan.jpg'} alt="Team Member 1" className="team-image" />
                    <h3 id="name"> Margaret Wamboi</h3>
                    <p id="role">Product Manager and Designer</p>
                </div>

                <div className="team-member">
                    <img src={process.env.PUBLIC_URL + '/images/roseProfile.jpg'} alt="Team Member 2" className="team-image" />
                    <h3 id="name">Rose Kivuva</h3>
                    <p id="role">Software Developer and Designer</p>
                </div>

                <div className="team-member">
                    <img src={process.env.PUBLIC_URL + '/images/lado.jpg'} alt="Team Member 3" className="team-image" />
                    <h3 id="name">Gloria Lado</h3>
                    <p id="role">Software Developer</p>
                </div>

                <div className="team-member">
                    <img src={process.env.PUBLIC_URL + '/images/snaida.jpg'} alt="Team Member 4" className="team-image" />
                    <h3 id="name">Mary Snaida</h3>
                    <p id="role">Software Developer</p>
                </div>

                <div className="team-member">
                    <img src={process.env.PUBLIC_URL + '/images/Pauline.jpg'} alt="Team Member 5" className="team-image" />
                    <h3 id="name"> Pauline Ochieng</h3>
                    <p id="role">Software Developer</p>
                </div>
            </div>
        </div>
        
    )
}
export default Contact;

