import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { Button, TextField } from '@mui/material';

export const ContactUs = () => {
  const form = useRef();
  const {t} = useTranslation();

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
    <br /><br />  
      <div>
        <TextField label={t("sender-name")} variant="outlined" name="from_name"/> <br /><br />
        <TextField label={t("email")} variant="outlined" name="from_email"/> <br /><br />
        <TextField label={t("email-message")} variant="outlined" name="message"/> <br /><br />
        <Button variant= "contained" onClick={sendEmail}>{t("send")}</Button>
      </div>
      
    {/* // <label>{t("sender-name")}:</label><br />
    // <input type="text" name="from_name" /><br /> <br />
    // <label>{t("email")}:</label><br />
    // <input type="email" name="from_email" /> <br /> <br />
    // <label>{t("email-message")}:</label><br />
    // <textarea name="message" /> <br /><br />
    // <input type="submit" value={t("send")} /><br />  */}
      
  </form>
  );
};