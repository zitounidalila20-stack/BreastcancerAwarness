import "../styling/footer.css";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>💗 October Rose Algeria</h3>
          <p>
            Our mission is to spread awareness, encourage early detection,
            and support every woman and man in their journey of hope and healing.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#selfexam">Self-Exam Guide</a></li>
            <li><a href="#facts">Facts & Statistics</a></li>
            <li><a href="#doctors">Doctors & Screening</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>


        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><Email fontSize="small" /> support@octobrerose.dz</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank"><Facebook /></a>
            <a href="https://instagram.com" target="_blank"><Instagram /></a>
            <a href="https://twitter.com" target="_blank"><Twitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} October Rose Algeria. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

