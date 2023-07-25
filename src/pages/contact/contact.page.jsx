import React from "react";

import backgroundImage from "../../assets/banner.jpeg";
import Banner from "../../components/banner/banner.component";
import ContactForm from "../../components/contact-form/contact-form.component";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <Banner backgroundImage={backgroundImage} />
      <ContactForm />
    </div>
  );
};

export default Contact;
