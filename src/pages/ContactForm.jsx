import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const formReceived = () => {
    //! Send the form to the backend.
    alert(
      `
        Name= ${name}
        Email= ${email}
        Country= ${country}
        `
    );
  };

  return (
    <div className="container">
      <h3 className="text-center border my-5 border-primary display-6 rounded text-secondary">
        CONTACT
      </h3>
      <form onSubmit={formReceived}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">
            NAME: <span className="text-primary fst-italic fs-5">{name}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onInput={(item) => setName(item.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            E-MAIL: <span className="text-primary  fs-5 fst-italic">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onInput={(item) => setEmail(item.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country" className="form-label fw-semibold">
            COUNTRY: <span className="text-primary  fs-5 fst-italic">{country}</span>
          </label>
          <select
            className="form-select"
            id="country"
            onChange={(item) => setCountry(item.target.value)}
          >
            <option selected="">Select your country</option>
            <option value="Germany">Germany</option>
            <option value="Turkey">Turkey</option>
            <option value="USA">USA</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="message" className="form-label fw-semibold">
            MESSAGE:
          </label>
          <textarea
            rows="10"
            cols="30"
            className="form-control fs-5 fst-italic"
            id="message"
            placeholder="Write your message here"
          ></textarea>
        </div>

        <button type="submit" className="btn border border-dark bg-light text-primary px-5 py-3 my-2 fw-bold shadow fs-5 fst-italic">
          SEND
        </button>
      </form>
      <hr />
      <hr />
    </div>
  );
};

export default ContactForm;
