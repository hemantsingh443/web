import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-12">
  <div className="container mx-auto text-center">
    <div className="flex justify-center space-x-4 mb-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    <p>&copy; 2024 Arohan. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
