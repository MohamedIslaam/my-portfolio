import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

function ContactMe() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5tmiwwa',      // Replace with your EmailJS Service ID
        'template_iide53q',     // Replace with your EmailJS Template ID
        form.current,
        'ipNNjRgMz2xI-RX1n'          // Replace with your EmailJS User ID (public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contactcont" id="contact">
      <div className="contactleft">
        <p className="contacttitle">Contact <span>Me</span></p>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
          ></textarea>
          <button type="submit">Send</button>
        </form>
        {status && <p style={{ marginTop: '15px', color: '#70FE00' }}>{status}</p>}
      </div>
    </div>
  );
}

export default ContactMe;
