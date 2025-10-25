import PersonIcon from '@mui/icons-material/Person'; 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import '../styling/main.css';
import { useState } from 'react';

const navbarItems = ["About Breast Cancer", "Services", "Doctors", "About Us"];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const dropdownItems = [
    "Facts & Statistics",
    "Self-Exam Guide",
    "FAQ & Myths",
    "Doctors & Locations"
  ];

  return (
    <nav className="nav">
      <div className="nav-left">
        <img src="../src/pictures/logo.png" alt="logo" />
        <span>OctobreRose</span>
      </div>

      <ul className="nav-center">
        {navbarItems.map((item) => (
          <li
            key={item}
            className="nav-item"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}

            {item === "Services" && hoveredItem === "Services" && (
              <ul className="dropdown">
                {dropdownItems.map((drop) => (
                  <li key={drop} className="dropdown-item">
                    {drop}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <DarkModeIcon className="icon" fontSize="large" />
        <LanguageIcon className="icon" fontSize="large" />
        <PersonIcon className="icon" fontSize="large" />
      </div>
    </nav>
  );
}
