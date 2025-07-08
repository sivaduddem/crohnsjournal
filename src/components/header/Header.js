import React, { useContext, useRef, useEffect } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { blogSection } from "../../portfolio";
import logoImage from "../../assets/images/3cebaa3d-b12b-4716-9b8b-5ed782aba4b6.png";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewBlog = blogSection.display;
  const dropdownRef = useRef(null);

  // Dropdown open/close logic to match school.html/about.html
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        const menu = document.getElementById("advice-dropdown-menu");
        if (menu) menu.style.display = "none";
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function toggleAdviceDropdown(e) {
    e.preventDefault();
    const menu = document.getElementById("advice-dropdown-menu");
    if (menu)
      menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  return (
    <Headroom>
      <header
        className={isDark ? "dark-menu header" : "header"}
        style={{
          backgroundColor: "#0b0b1a",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={logoImage}
            alt="Crohn's Journal logo"
            className="logo-img"
            style={{
              height: "45px",
              width: "auto",
              display: "block",
              cursor: "pointer",
            }}
          />
        </a>
        <nav>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About Me</a></li>
            <li className="advice-dropdown" ref={dropdownRef}>
              <a href="#" className="advice-link" onClick={toggleAdviceDropdown}>
                Advice <span className="advice-caret">▼</span>
              </a>
              <ul className="dropdown-menu" id="advice-dropdown-menu" style={{ display: "none" }}>
                <li><a href="/food.html" className="dropdown-item">Food</a></li>
                <li><a href="/school.html" className="dropdown-item">School</a></li>
              </ul>
            </li>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/recipes.html">Favorite Recipes</a></li>
            <li><a href="/contact.html">Contact Me</a></li>
            <li>
              <button
                className="toggle-btn"
                aria-label="Toggle theme"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
              >
                <ToggleSwitch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}

export default Header;