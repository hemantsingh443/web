import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Star, Users } from 'lucide-react'; 
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', contactForm);
      alert(response.data.message);
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  return (  

    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto mt-8 p-4">
      <motion.section 
  className="text-center mb-12 relative bg-cover bg-center h-screen"
  style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
    <h2 className="text-6xl font-bold mb-4">Web Design Services for Your Business</h2>
    <p className="text-2xl mb-6">We create stunning websites that drive results</p>
    <motion.button 
      className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get Started <ArrowRight className="inline ml-2" />
    </motion.button>
  </div>
</motion.section>

<section id="services" className="mb-12">
  <h3 className="text-2xl font-bold mb-4">Our Services</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {['Custom Web Design', 'E-commerce Solutions', 'Responsive Design'].map((service, index) => (
      <motion.div
        key={service}
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <h4 className="text-xl font-semibold mb-2">{service}</h4>
        <p>Tailored solutions that meet your specific needs and drive results.</p>
      </motion.div>
    ))}
  </div>
</section>

<section id="testimonials" className="bg-gray-100 py-12">
  <h3 className="text-2xl font-bold mb-4 text-center">What Our Clients Say</h3>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {['Client A', 'Client B', 'Client C'].map((client, index) => (
      <motion.div
        key={client}
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <p className="italic">"Arohan provided exceptional service and delivered a fantastic website."</p>
        <p className="font-semibold mt-2">{client}</p>
      </motion.div>
    ))}
  </div>
</section>


        <section id="portfolio" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Our Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <motion.div
                key={project}
                className="bg-white p-4 rounded-lg shadow group hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img src={`/api/placeholder/400/300?text=Project ${project}`} alt={`Project ${project}`} className="w-full h-48 object-cover rounded mb-4" />
                <h4 className="text-lg font-semibold mb-2">Project {project}</h4>
                <p className="text-gray-600">Description of Project {project}</p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">About Arohan</h3>
          <p className="mb-4">
            Arohan is a leading web design agency dedicated to helping businesses establish a strong online presence.
            Our team of experts works tirelessly to deliver websites that are not only visually appealing but also
            highly functional and user-friendly.
          </p>
          <p>
            We believe that a well-designed website is key to attracting and retaining customers, and we strive to
            exceed our clients' expectations with every project we undertake.
          </p>
        </section>

        <section id="contact" className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
              <p className="mb-2"><Mail className="inline mr-2" /> info@arohan.com</p>
              <p className="mb-2"><Phone className="inline mr-2" /> +123 456 7890</p>
              <p className="mb-2"><MapPin className="inline mr-2" /> 123 Web Design St, San Francisco, CA</p>
            </div>
            <form className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold mb-4">Send a Message</h4>
              <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
              <textarea placeholder="Message" className="w-full p-2 mb-4 border rounded"></textarea>
              <motion.button 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message <ArrowRight className="inline ml-2" />
              </motion.button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}; 



export default HomePage;
