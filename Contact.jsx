import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <section>
      <main>
        <div className="contact">
          <span>Contact Us</span>
        </div>

        <div className="info">
          <div className="info">
            <div>Phone: +01823409487   </div>
            <div>Email: fitnesclub@gmail.com  </div>
            <div>  Address: Mirpur - 13 number-Dhaka  </div>
            <div>  Facebook: Fitness Club</div>
          </div>
        </div>

        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="/src/assets/Gym2.png"
                alt="hero"
                width="300"
                height="400"
                style={{ marginLeft: "200px" }}
              />
            </div>
            {/* Contact Form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Send Message</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    placeholder="Type your message"
                    id="message"
                    required
                    autoComplete="off"
                    value={user.message}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
