import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 max-sm:text-[2xl]">
              We’d Love to Hear From You
          </h1>
          <p className="text-gray-600 mt-2 text-[18px] ">

          Got a question, suggestion, or concern? Reach out and our team will respond promptly!
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 border rounded-lg focus:ring focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 border rounded-lg focus:ring focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-4 border rounded-lg focus:ring focus:ring-indigo-300"
                />
              </div>
              <button
                type="submit"
                className=" text-[18px] w-full bg-black text-white font-semibold py-4 rounded-lg hover:bg-black/80 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              Reach out to us through any of the following channels:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">📍 1234 E-commerce St, Online City, World</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">📞 +1 (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">✉️ support@ecommerce.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Our Location</h2>
          <div className="w-full h-72 bg-gray-300 rounded-lg shadow-lg">
            {/* You can embed a real map here */}
            <p className="text-center text-gray-700 mt-32">Google Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );

};
export default ContactUs;
