import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-buttons">
        <a href="mailto:moinkhan29727@gmail.com" className="contact-button email">
          📧 Email Me
        </a>
        <a href="https://www.linkedin.com/in/moin-khan-56a339203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
" target="_blank" rel="noopener noreferrer" className="contact-button linkedin">
          🔗 LinkedIn
        </a>
        <a href="tel:+919945126529" className="contact-button phone">
          📞 Call Me
        </a>
      </div>

      <span style={{ margin: "40px", }}>
        Or
      </span>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;