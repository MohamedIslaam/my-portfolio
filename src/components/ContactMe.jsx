import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

function ContactMe() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_5tmiwwa',     
        'template_iide53q',    
        form.current,
        'ipNNjRgMz2xI-RX1n'    
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus('Message sent successfully!');
          setTimeout(()=> setStatus(''),2000)
          e.target.reset();
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          setLoading(false);
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
          <button type="submit">{loading?"sending...":"send"}</button>
        </form>
        {status && <p style={{ marginTop: '15px', color: '#70FE00' }}>{status}</p>}
      </div>
    </div>
  );
}

export default ContactMe;
