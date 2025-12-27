import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const expertise = [
  'Honest Legal Advice',
  'Client-Centered Support',
  'Stress-Free Experience',
  'Reliable Representation',
  'Experienced Legal Team'
];

const services = [
  'British Citizenship',
  'Spouse Visa',
  'Partner Visa',
  'UK Student Visa',
  'Skilled Worker Visa',
  'Family Visa',
  'Sponsor License'
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Contact Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '15px' }}>
            Your Growth is Just a Message Away!
          </h2>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
            We make it easy to get the help you need. Professional advice, fast responses, and a team that cares.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col" style={{ paddingTop: '10px' }}>
            <p style={{ marginBottom: '25px', fontSize: '0.95rem', lineHeight: '1.8' }}>
              At Westbury Law, integrity is at the heart of everything we do. We are dedicated to providing 
              honest advice, realistic expectations, and unwavering support.
            </p>
            <div style={{ marginTop: '20px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} color="#B59981" /> London, United Kingdom
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#B59981" /> 
                <a href="tel:+447481758526" style={{ color: '#ccc' }}>+44 7481 758526</a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#B59981" /> 
                <a href="mailto:info@westburylaw.co.uk" style={{ color: '#ccc' }}>info@westburylaw.co.uk</a>
              </p>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Expertise</h4>
            <ul>
              {expertise.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="#B59981" /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Our Newsletter</h4>
            <p>Stay updated — subscribe now for exclusive news alerts!</p>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              <input 
                type="email" 
                placeholder="Your Email" 
                style={{ 
                  padding: '12px', 
                  background: '#2C313B', 
                  border: 'none', 
                  color: 'white',
                  width: '100%',
                  borderRadius: '0'
                }} 
              />
              <button style={{ 
                background: '#B59981', 
                border: 'none', 
                padding: '0 15px', 
                color: 'white',
                cursor: 'pointer'
              }}>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Westbury Law. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
