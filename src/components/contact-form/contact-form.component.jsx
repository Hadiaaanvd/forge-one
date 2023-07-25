import React from "react";
import PrimaryBtn from "../../components/primary-btn/primary-btn.component";

import "./contact-form.styles.scss";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="input-containers">
        <h2>Contact Us</h2>
        <p>
          Contact us for a demo, onsite evaluation, or any integration questions
          at info@valiantsecurity.net
        </p>
        <div className="roww">
          <input className="field" type="text" placeholder="First Name" />{" "}
          &emsp;
          <input
            className="field company"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input className="field" type="text" placeholder="Email" /> &emsp;
        <textarea
          rows={5}
          className="field"
          type="text"
          placeholder="What can we help you with?"
        />
        <PrimaryBtn className="submit">Submit</PrimaryBtn>
      </div>
      <div className="iframe-container">
        <h2>Lets change this map, together.</h2>
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://maps.mapifator.com/places/29PcG8nmWjRpv540kwWy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
