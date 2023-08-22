import "../components/Formstyle.css";


import React, { useState } from 'react'

const Form = () => {


  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(FormData);
    alert("Form submitted successfully!")
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={FormData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        <label>Message</label>
        <textarea
          rows="10"
          id="message"
          name="message"
          value={FormData.message}
          onChange={handleChange}
          placeholder="Type your message"
          required
        />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form;