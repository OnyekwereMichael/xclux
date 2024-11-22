import { FaStar, FaHandsHelping, FaTruck } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We're on a mission to redefine your shopping experience and set new
            standards in the industry.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our Vision and Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-indigo-600">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-700">
                To become the go-to e-commerce platform for quality and
                innovation, offering products that enhance your life.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-indigo-600">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-700">
                To connect customers with the best products, deliver exceptional
                service, and foster a community of trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white shadow-lg p-6 rounded-lg transition hover:shadow-xl">
              <FaStar size={40} className="mx-auto text-indigo-600" />
              <h3 className="text-xl font-semibold mt-6">Quality Products</h3>
              <p className="mt-4 text-gray-700">
                We only offer carefully curated and premium quality products.
              </p>
            </div>
            <div className="text-center bg-white shadow-lg p-6 rounded-lg transition hover:shadow-xl">
              <FaHandsHelping size={40} className="mx-auto text-indigo-600" />
              <h3 className="text-xl font-semibold mt-6">
                Exceptional Support
              </h3>
              <p className="mt-4 text-gray-700">
                Our team is here to assist you 24/7 with any queries or
                concerns.
              </p>
            </div>
            <div className="text-center bg-white shadow-lg p-6 rounded-lg transition hover:shadow-xl">
              <FaTruck size={40} className="mx-auto text-indigo-600" />
              <h3 className="text-xl font-semibold mt-6">Fast Delivery</h3>
              <p className="mt-4 text-gray-700">
                Quick and reliable delivery ensures you get your products on
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-sm:grid-cols-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg"
              >
                <AiOutlineUser
                  size={50}
                  className="mx-auto text-indigo-600 mb-4"
                />
                <h3 className="text-lg font-semibold mt-2">John Doe</h3>
                <p className="mt-2 text-gray-600">CEO & Founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to shop with us?
          </h2>
          <p className="mt-6 text-lg">
            Experience the best in online shopping today.
          </p>
          <button className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            <a href="/">Start Shopping</a>
            
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
