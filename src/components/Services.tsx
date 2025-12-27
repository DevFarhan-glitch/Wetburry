'use client';
import { Users, Briefcase, Globe, GraduationCap, Heart, Shield, Home, FileCheck, UserPlus, Building2, ClipboardCheck, Plane, Award, UserCheck, FileText, HandshakeIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: <Award size={40} />,
    title: 'British Citizenship',
    desc: 'Achieve your dream of becoming a British citizen with our expert guidance through the naturalization process.'
  },
  {
    icon: <Heart size={40} />,
    title: 'Partner Visa',
    desc: 'Reunite with your partner in the UK. We handle spouse and partner visa applications with care.'
  },
  {
    icon: <GraduationCap size={40} />,
    title: 'UK Student Visa',
    desc: 'Pursue your education in the UK with our comprehensive student visa application support.'
  },
  {
    icon: <Users size={40} />,
    title: 'Family Visa',
    desc: 'Bring your family together in the UK with our family visa and reunification services.'
  },
  {
    icon: <Plane size={40} />,
    title: 'Visitor Visa',
    desc: 'Visit the UK for tourism, business, or family visits with our visitor visa assistance.'
  },
  {
    icon: <Building2 size={40} />,
    title: 'Sponsor License',
    desc: 'Enable your business to hire international talent with our sponsor license application services.'
  },
  {
    icon: <Briefcase size={40} />,
    title: 'Skilled Worker Visa',
    desc: 'Work in the UK with a skilled worker visa. Expert support for applicants and employers.'
  },
  {
    icon: <Globe size={40} />,
    title: 'EU Family Permit',
    desc: 'Join your EU family member in the UK with our EU Family Permit application assistance.'
  },
  {
    icon: <UserPlus size={40} />,
    title: 'Parent Visa',
    desc: 'Reunite with your children in the UK through our parent visa application support.'
  },
  {
    icon: <FileCheck size={40} />,
    title: 'Business Visit Visa',
    desc: 'Attend business meetings, conferences, and negotiations in the UK with proper visa support.'
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: 'License Auditing',
    desc: 'Ensure your sponsor license compliance with our comprehensive auditing services.'
  },
  {
    icon: <HandshakeIcon size={40} />,
    title: 'Civil Partnership Visa',
    desc: 'Join your civil partner in the UK with our specialized civil partnership visa services.'
  },
  {
    icon: <Home size={40} />,
    title: 'Indefinite Leave To Remain',
    desc: 'Settle permanently in the UK with ILR. We guide you through every step of the process.'
  },
  {
    icon: <Shield size={40} />,
    title: 'EU Settlement Scheme',
    desc: 'Secure your status in the UK post-Brexit with our EU Settlement Scheme application support.'
  },
  {
    icon: <UserCheck size={40} />,
    title: 'Spouse Visa',
    desc: 'Join your spouse in the UK with our comprehensive spouse visa application services.'
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-title">
          <span>What We Offer</span>
          <h2>Choosing the Right Visa for Your Journey</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                animationDelay: `${0.05 * index}s`
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link 
                href="#contact" 
                style={{ 
                  marginTop: '25px', 
                  fontWeight: '700', 
                  color: 'var(--accent)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '8px';
                }}
              >
                See Details <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
