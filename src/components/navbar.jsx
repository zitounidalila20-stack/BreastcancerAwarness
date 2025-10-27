import PersonIcon from '@mui/icons-material/Person'; 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import '../styling/main.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';  

const navbarItems = ["About Breast Cancer", "Services", "Doctors", "About Us"];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const dropdownItems = [
    { name: "Facts & Statistics", path: "/facts" },
    { name: "Self-Exam Guide", path: "/selfexam" },
    { name: "FAQ & Myths", path: "/faq" },
    { name: "Doctors & Locations", path: "/doctors" },
    {name:"About Us",path: "/aboutus"}
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
                  <li key={drop.name} className="dropdown-item">
                    <Link to={drop.path} className="dropdown-link">
                      {drop.name}
                    </Link>
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
