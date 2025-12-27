'use client';
import { CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const commitments = [
  'Honest Legal Advice',
  'Client-Centered Support',
  'Stress-Free Experience',
  'Reliable Representation',
  'Commitment to Excellence'
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section id="about" ref={sectionRef} style={{ backgroundColor: 'var(--bg-tan)' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div 
            className={isVisible ? 'scale-in' : ''}
            style={{ 
              flex: '1', 
              minWidth: '300px',
              opacity: isVisible ? 1 : 0
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Westbury Law Team" 
              style={{ 
                borderRadius: '0', 
                boxShadow: '30px 30px 0 var(--accent)',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
          
          <div 
            className={isVisible ? 'fade-in-right' : ''}
            style={{ 
              flex: '1.2', 
              minWidth: '300px',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="section-title" style={{ textAlign: 'left', marginBottom: '35px' }}>
              <span>Who We Are</span>
              <h2>Our Commitment</h2>
            </div>
            <p style={{ marginBottom: '25px', fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--text-dark)' }}>
              At WestBury Law, integrity is at the heart of everything we do. We are dedicated to 
              providing honest advice, realistic expectations, and unwavering support. Your success 
              is our priority, and we strive to make your legal journey as smooth and stress-free as possible.
            </p>
            <p style={{ marginBottom: '35px', color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
              Let Westbury Law be your trusted partner in navigating the legal landscape. Our dedicated 
              team of seasoned lawyers and consultants has over 15 years of combined experience in UK 
              immigration law. We focus on building your future by ensuring every application is handled 
              with the highest level of professional care and detail.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '45px' }}>
              {commitments.map((item, index) => (
                <div 
                  key={index} 
                  className={isVisible ? 'fade-in-up' : ''}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    opacity: isVisible ? 1 : 0,
                    animationDelay: `${0.1 * index}s`
                  }}
                >
                  <CheckCircle size={22} color="var(--accent)" strokeWidth={2.5} />
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '45px' }}>
              <div 
                className={isVisible ? 'fade-in-up' : ''}
                style={{
                  opacity: isVisible ? 1 : 0,
                  animationDelay: '0.6s'
                }}
              >
                <h4 style={{ 
                  color: 'var(--accent)', 
                  marginBottom: '12px',
                  fontSize: '2.2rem',
                  fontFamily: 'Marcellus, serif',
                  fontWeight: '400'
                }}>
                  15+ Years
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  Of combined legal experience in UK immigration.
                </p>
              </div>
              <div 
                className={isVisible ? 'fade-in-up' : ''}
                style={{
                  opacity: isVisible ? 1 : 0,
                  animationDelay: '0.7s'
                }}
              >
                <h4 style={{ 
                  color: 'var(--accent)', 
                  marginBottom: '12px',
                  fontSize: '2.2rem',
                  fontFamily: 'Marcellus, serif',
                  fontWeight: '400'
                }}>
                  100% Transparency
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  Honest advice and realistic expectations.
                </p>
              </div>
            </div>
            
            <button className="btn">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
