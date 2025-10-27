import "../styling/Doctors.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All");

  const screeningData = [
    {
      province: "Algiers",
      location: "CNAS Centers",
      organization: "National Social Insurance Fund (CNAS)",
      program: "Free Screening for Insured Women",
      details:
        "Comprehensive national program for insured women to receive free breast cancer screening.",
      beneficiaries: "Insured women",
    },
    {
      province: "Oran",
      location: "Red Crescent Mobile Clinics",
      organization: "Algerian Red Crescent",
      program: "Pink October Caravan",
      details:
        "Two mobile clinics offering free breast and cervical cancer screening.",
      beneficiaries: "Women in Oran region",
    },
    {
      province: "Tlemcen",
      location: "City Health Centers",
      organization: "Pink October Committee",
      program: "Mobile Screening Campaign",
      details:
        "Free mobile screenings and awareness sessions held throughout the city.",
      beneficiaries: "Women in Tlemcen",
    },
    {
      province: "Setif",
      location: "EPSP Beni Aziz Clinic",
      organization: "Al-Wafa Association",
      program: "Early Detection Campaign",
      details:
        "210 women screened; free mammography provided for those with suspicious results.",
      beneficiaries: "210 women",
    },
  ];

  const provinces = ["All", ...new Set(screeningData.map((i) => i.province))];

  const filteredData = screeningData.filter((item) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      item.province.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search) ||
      item.organization.toLowerCase().includes(search);
    const matchesProvince =
      selectedProvince === "All" || item.province === selectedProvince;
    return matchesSearch && matchesProvince;
  });

  return (
    <div className="screening-container">
      <section className="screening-header">
        <h2>🩺 Free Screening Centers in Algeria</h2>
        <p>
          Find <span>free breast cancer screening</span> locations across
          Algeria — part of the <b>Octobre Rose</b> awareness movement.
        </p>
      </section>

      <section className="screening-filters">
        <div className="search-box">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search by province or organization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="province-filter">
          <label>Filter by Province:</label>
          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            {provinces.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="screening-grid">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div className="screening-card" key={index}>
              <div className="card-header">
                <h3>{item.program}</h3>
                <span className="province-tag">
                  <LocationOnIcon fontSize="small" />
                  {item.province}
                </span>
              </div>

              <div className="card-body">
                <div className="info-line">
                  <LocalHospitalIcon className="info-icon" />
                  <span>
                    <b>Organization:</b> {item.organization}
                  </span>
                </div>
                <div className="info-line">
                  <PeopleIcon className="info-icon" />
                  <span>
                    <b>Beneficiaries:</b> {item.beneficiaries}
                  </span>
                </div>
                <div className="info-line">
                  <LocationOnIcon className="info-icon" />
                  <span>
                    <b>Location:</b> {item.location}
                  </span>
                </div>
              </div>

              <p className="card-details">{item.details}</p>

              <div className="card-footer">
                <CalendarMonthIcon fontSize="small" />
                <span>October Campaign</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>🔍 No results found</h3>
            <p>Try searching for another province or organization.</p>
          </div>
        )}
      </section>

      <section className="screening-info">
        <h3>🌸 About Pink October</h3>
        <p>
          <b>Octobre Rose</b> (Pink October) is a national initiative promoting
          breast cancer awareness and encouraging women to get screened early.
        </p>
        <p>Remember: <b>Early detection saves lives!</b></p>
      </section>
    </div>
  );
}
