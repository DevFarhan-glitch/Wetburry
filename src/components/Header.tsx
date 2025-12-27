import Link from 'next/link';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="tel:+447481758526" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'inherit' }}>
              <Phone size={14} /> +44 7481 758526
            </a>
            <a href="mailto:info@westburylaw.co.uk" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'inherit' }}>
              <Mail size={14} /> info@westburylaw.co.uk
            </a>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" aria-label="Facebook"><Facebook size={14} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={14} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={14} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={14} /></a>
          </div>
        </div>
      </div>
      
      <div className="nav-bar">
        <div className="container">
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/WestBurry.jpeg" 
              alt="Westbury Law Logo" 
              style={{ 
                height: '65px', 
                width: 'auto', 
                display: 'block',
                objectFit: 'contain'
              }} 
            />
          </Link>
          
          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#services">Business Visas</Link>
            <Link href="#services">Personal Visas</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          
          <a href="tel:+447481758526" className="btn">+44 7481 758526</a>
        </div>
      </div>
    </header>
  );
}
