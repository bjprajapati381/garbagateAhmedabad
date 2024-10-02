import React, { useState } from "react";

const ContactUs = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle success or error messages
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission using Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mkgwdbwk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            We&apos;d love to hear from you! Please reach out with any questions or comments.
          </p>
        </header>

        {/* Contact Form Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
          {status && <p className="text-red-500 mb-4">{status}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg py-2 px-4 h-32 focus:outline-none focus:border-primary w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded-lg py-2 px-4 hover:bg-primary-dark transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
