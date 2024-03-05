import React, { useState } from "react";
import PrimaryBtn from "../../components/primary-btn/primary-btn.component";
import Loader from "../../components/loader/loader.component";
import firebase from "../../firebase/firebase";
import "./contact-form.styles.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    setSubmitted(false);
    try {
      setLoading(true);
      event.preventDefault();
      console.log(formData);

      const sendFormData = firebase
        .functions()
        .httpsCallable("sendFormDataInEmail");
      const resp = await sendFormData(formData);
      if (resp) {
        setSubmitted(true);
        setLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="contact-form-container">
      <div className="input-containers">
        <h2>Contact Us</h2>
        <p>
          Contact us for a demo, onsite evaluation, or any integration questions
          at team@forge1.ai
        </p>
        <div className="roww">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="field"
            type="text"
            placeholder="First Name"
          />
          &emsp;
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="field company"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="field"
          type="text"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
        &emsp;
        <textarea
          value={formData.message}
          onChange={handleChange}
          rows={5}
          name="message"
          className="field"
          type="text"
          placeholder="What can we help you with?"
        />
        <PrimaryBtn
          disabled={loading}
          onClick={handleSubmit}
          className="submit"
        >
          {loading ? <Loader size="13px" borderSize={"1px"} /> : ""}
          Submit
        </PrimaryBtn>
        <br />
        {submitted &&
          "Thank You for getting in touch! We'll get back to you shortly."}
      </div>
    </div>
  );
};

export default ContactForm;
