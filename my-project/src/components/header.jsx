function Header() {
  return (
    <header className="bg-blue-600 text-white p-3 shadow-md">
      <img
        src=""
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      ></img>
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-Bold">Tailwind Task </h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="hover:text-red-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-300 transition-colors duration-300"
              >
                Tutorial
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
