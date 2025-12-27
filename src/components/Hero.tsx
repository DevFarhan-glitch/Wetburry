'use client';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        backgroundImage: 'linear-gradient(rgba(11, 13, 23, 0.75), rgba(11, 13, 23, 0.75)), url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        padding: '0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating Experience Badge */}
      <div 
        className={isVisible ? 'fade-in-left' : ''}
        style={{ 
          position: 'absolute',
          left: '50px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(184, 150, 126, 0.4)',
          zIndex: 10,
          opacity: isVisible ? 1 : 0,
          transition: 'all 1s ease-out'
        }}
      >
        <div style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700',
          fontFamily: 'Marcellus, serif',
          lineHeight: 1,
          color: 'white'
        }}>
          15+
        </div>
        <div style={{ 
          fontSize: '0.75rem', 
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginTop: '5px',
          color: 'white',
          textAlign: 'center'
        }}>
          Years
        </div>
      </div>

      <div className="container">
        <div style={{ maxWidth: '850px', marginLeft: '180px' }}>
          <h1 
            className={isVisible ? 'fade-in-up' : ''}
            style={{ 
              fontSize: '4.5rem', 
              marginBottom: '30px', 
              lineHeight: '1.2',
              fontFamily: 'Marcellus, serif',
              fontWeight: '400',
              opacity: isVisible ? 1 : 0
            }}
          >
            Empowering Your{' '}
            <span style={{
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Immigration
            </span>{' '}
            Journey
          </h1>
          <p 
            className={isVisible ? 'fade-in-up' : ''}
            style={{ 
              fontSize: '1.2rem', 
              marginBottom: '25px', 
              color: '#e0e0e0', 
              lineHeight: '1.9',
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.2s'
            }}
          >
            At Westbury Law, we believe that immigration is more than just paperwork—it&apos;s about 
            building futures, reuniting families, and unlocking opportunities.
          </p>
          <p 
            className={isVisible ? 'fade-in-up' : ''}
            style={{ 
              fontSize: '1.05rem', 
              marginBottom: '45px', 
              color: '#ccc', 
              lineHeight: '1.8',
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.4s'
            }}
          >
            With over 15 years of combined experience, our dedicated team of skilled lawyers and 
            consultants is committed to guiding you through every step of your immigration journey 
            with professionalism, transparency, and integrity.
          </p>
          <div 
            className={isVisible ? 'fade-in-up' : ''}
            style={{ 
              display: 'flex', 
              gap: '25px', 
              flexWrap: 'wrap',
              opacity: isVisible ? 1 : 0,
              animationDelay: '0.6s'
            }}
          >
            <Link href="#services" className="btn">
              Learn More <Plus size={18} />
            </Link>
            <Link 
              href="#contact" 
              className="btn btn-outline" 
              style={{ 
                color: 'white', 
                borderColor: 'white' 
              }}
            >
              Contact Us <Plus size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100px',
        background: 'linear-gradient(to top, rgba(11, 13, 23, 0.9), transparent)'
      }} />
    </section>
  );
}
