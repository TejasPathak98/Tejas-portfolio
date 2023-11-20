import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    window.location.href = `mailto:tejaspathak98@gmail.com?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
  };

  return (
    <div className="container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        I'm always happy to meet new people! Please feel free to get in touch
        using the form below.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-group">
          <label htmlFor="name" className="contact-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-input"
            required
          />
        </div>
        <div className="contact-group">
          <label htmlFor="email" className="contact-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-input"
            required
          />
        </div>
        <div className="contact-group">
          <label htmlFor="message" className="contact-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="contact-input"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
