import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/cv', label: 'CV' },
    { path: '/skills', label: 'Skills' },
  ]

  const projectLinks = [
    { path: '/architecture-3d', label: '3D Architecture' },
    { path: '/training', label: 'Training' },
    { path: '/videography', label: 'Videography' },
    { path: '/photography', label: 'Photography' },
    { path: '/graphic-design', label: 'Graphic Design' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/abdul-rahman-gasim-54862182/' },
    { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com/Abdulrahman' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/retey1447' },
  ]

  const contactInfo = [
    { icon: 'fas fa-phone', label: '+960 979 5529' },
    { icon: 'fas fa-envelope', label: 'retey.ay@hotmail.com' },
    { icon: 'fas fa-map-marker-alt', label: 'Gulfaamge, LH. Hinnavaru, Maldives' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>RG</span>
              </div>
              <div className="footer-logo-text">
                <h3>Abdul Rahman Gasim</h3>
                <p>F&B Manager • 3D Designer • Web Developer</p>
              </div>
            </div>
            <p className="footer-description">
              Passionate hospitality professional with 20+ years of experience in luxury resorts. 
              Specializing in pre-opening, reopening, and operations management.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Section */}
          <div className="footer-section footer-links">
            <h4>Projects</h4>
            <ul className="footer-nav">
              {projectLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h4>Contact</h4>
            <div className="contact-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Section */}
          <div className="footer-section footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Abdul Rahman Gasim. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
