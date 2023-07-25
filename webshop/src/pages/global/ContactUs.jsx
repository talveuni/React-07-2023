import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//import { useTranslation } from 'react-i18next';


export const ContactUs = () => {
  const form = useRef();
 // const {t} = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fuue2wo', 'template_arclvov', form.current, 'zRohGthUJMzT8kQMX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label><br />
      <input type="text" name="from_name" /><br /> <br />
      <label>Email:</label><br />
      <input type="email" name="from_email" /> <br /> <br />

      <label>Message:</label><br />
      <textarea name="message" /> <br /><br />
      <input type="submit" value="Send" /><br />
    </form>
  );
};