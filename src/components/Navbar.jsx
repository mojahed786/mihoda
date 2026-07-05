import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  FaHardHat,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaBuilding,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle Dark Mode
  const toggleTheme = () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    setDarkMode(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
  <img src={logo} alt="MI HODA Logo" className="logo-img" />
</div>

      {/* Navigation */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>


        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

      </ul>

      {/* Right Side */}
      <div className="nav-right">

       

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;