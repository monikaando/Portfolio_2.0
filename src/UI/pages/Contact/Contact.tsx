import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  StyledContactcontainer,
  StyledContactTitle,
  StyledContactForm,
  StyledContactFormInput,
  StyledContactFormTextarea,
  StyledButton,
} from "./Contact.sc";
const Contact = () => {
  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk7cbll",
        "template_c2e0bz9",
        form.current,
        "nk5TM2D3E6-wJiGnR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledContactcontainer>
      <StyledContactTitle>Contact Me</StyledContactTitle>
      <StyledContactForm ref={form} onSubmit={sendEmail}>
        <StyledContactFormInput
          type="text"
          placeholder="Name"
          name="user_name"
          required
        />
        <StyledContactFormInput
          type="email"
          placeholder="Enter email"
          name="user_email"
          required
        />
        <StyledContactFormInput
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <StyledContactFormTextarea
          rows={10}
          cols={60}
          name="message"
          placeholder="Your message"
        />
        <StyledButton type="submit">Send</StyledButton>
      </StyledContactForm>
    </StyledContactcontainer>
  );
};
export default Contact;
