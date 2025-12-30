'use client';
import {
  Users,
  GraduationCap,
  Heart,
  Shield,
  Home,
  UserPlus,
  Plane,
  Award,
  UserCheck,
  HandshakeIcon,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const personalVisaServices = [
  {
    icon: <Award size={40} />,
    title: 'British Citizenship',
    desc: 'Professional guidance through the British citizenship and naturalisation process, ensuring accuracy and compliance.'
  },
  {
    icon: <Home size={40} />,
    title: 'Indefinite Leave to Remain (ILR)',
    desc: 'Secure permanent residence in the UK with expert support throughout your ILR application journey.'
  },
  {
    icon: <Heart size={40} />,
    title: 'Spouse / Partner Visa',
    desc: 'Join your spouse or partner in the UK with tailored advice and full application management.'
  },
  {
    icon: <HandshakeIcon size={40} />,
    title: 'Civil Partnership Visa',
    desc: 'Comprehensive support for civil partnership visa applications, from eligibility checks to submission.'
  },
  {
    icon: <Users size={40} />,
    title: 'Family Visa',
    desc: 'Reunite with your family members in the UK through our family and dependant visa services.'
  },
  {
    icon: <UserPlus size={40} />,
    title: 'Parent Visa',
    desc: 'Specialist assistance for parents seeking to join their children settled in the UK.'
  },
  {
    icon: <GraduationCap size={40} />,
    title: 'Student Visa',
    desc: 'End-to-end support for UK student visa applications, helping you start your academic journey with confidence.'
  },
  {
    icon: <Plane size={40} />,
    title: 'Visitor Visa',
    desc: 'Apply for UK visitor visas for tourism, family visits, or short stays with expert guidance.'
  },
  {
    icon: <UserCheck size={40} />,
    title: 'EU Family Permit',
    desc: 'Assistance for family members of EU nationals applying to join or remain in the UK.'
  },
  {
    icon: <Shield size={40} />,
    title: 'EU Settlement Scheme',
    desc: 'Secure your settled or pre-settled status under the EU Settlement Scheme with professional support.'
  }
];

export default function PersonalVisas() {
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
    <section id="personalvisas" ref={sectionRef} style={{ backgroundColor: 'var(--bg-white)' }}>
      <div className="container">
        <div className="section-title">
          <span>Personal Visas</span>
          <h2>UK Personal Visa & Settlement Services</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {personalVisaServices.map((service, index) => (
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
