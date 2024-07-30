function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center text-sm mb-4 animate-fadeIn">
          © 2024 My Website. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 animate-bounce"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 animate-bounce"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 animate-bounce"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
