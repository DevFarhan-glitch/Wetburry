'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { FileText, Calendar, Upload, CheckCircle, Phone, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: <FileText size={36} />,
    title: 'Fill in the Form',
    desc: 'Start by completing the form on our website. Be sure to include a clear message—this helps our experts understand your needs and respond promptly.'
  },
  {
    icon: <Calendar size={36} />,
    title: 'Book a Meeting with Our Expert',
    desc: 'Once your form is submitted, use our online booking system to schedule a meeting at your convenience. This allows you to discuss your needs, ask questions, and explore the next steps.'
  },
  {
    icon: <Upload size={36} />,
    title: 'Provide the Required Documents',
    desc: 'After your initial meeting, we\'ll send you a secure email with a list of required documents and submission instructions. These are essential for moving forward with your case.'
  },
  {
    icon: <CheckCircle size={36} />,
    title: 'Review and Finalize',
    desc: 'Once all documents are received, our team will carefully review them, craft a tailored plan, and arrange a follow-up meeting to share our insights and finalize the process.'
  }
];

const testimonials = [
  {
    name: 'Ananya P.',
    text: 'Westbury Law made our dream of reuniting with our family a reality. Their team guided us through every step with compassion and professionalism. We couldn\'t have asked for a better experience!'
  },
  {
    name: 'Jorge M.',
    text: 'The team at Westbury Law doesn\'t just handle cases—they change lives. Their honesty and dedication helped me feel confident throughout my immigration process. Highly recommended!'
  },
  {
    name: 'Sara K.',
    text: 'Choosing Westbury Law was the best decision I made. Their experience and commitment gave me peace of mind and helped me achieve a brighter future for my family.'
  }
];

export default function Home() {
  const [stepsVisible, setStepsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const stepsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stepsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (stepsRef.current) {
      stepsObserver.observe(stepsRef.current);
    }

    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }

    // Back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (stepsRef.current) {
        stepsObserver.unobserve(stepsRef.current);
      }
      if (testimonialsRef.current) {
        testimonialsObserver.unobserve(testimonialsRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      
      {/* How It Works Section */}
      <section ref={stepsRef} style={{ backgroundColor: 'var(--bg-tan)' }}>
        <div className="container">
          <div className="section-title">
            <span>Our Process</span>
            <h2>How It Works – From Application to Approval</h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '35px' 
          }}>
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={stepsVisible ? 'fade-in-up' : ''}
                style={{
                  padding: '45px 40px',
                  background: 'var(--bg-white)',
                  borderRadius: '0',
                  border: '1px solid #eee',
                  position: 'relative',
                  transition: 'var(--transition)',
                  opacity: stepsVisible ? 1 : 0,
                  animationDelay: `${0.1 * index}s`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '40px',
                  width: '45px',
                  height: '45px',
                  background: 'var(--accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  fontFamily: 'Marcellus, serif',
                  boxShadow: '0 10px 30px rgba(184, 150, 126, 0.3)'
                }}>
                  {index + 1}
                </div>
                <div style={{ color: 'var(--accent)', marginBottom: '25px', marginTop: '15px' }}>
                  {step.icon}
                </div>
                <h4 style={{ 
                  marginBottom: '18px', 
                  fontSize: '1.3rem',
                  fontFamily: 'Marcellus, serif',
                  fontWeight: '400'
                }}>
                  {step.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="section-title">
            <span style={{ color: 'var(--accent)' }}>Testimonials</span>
            <h2 style={{ color: 'white' }}>Client Success Stories & Feedback</h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '35px' 
          }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={testimonialsVisible ? 'fade-in-up' : ''}
                style={{
                  padding: '50px 45px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '0',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'var(--transition)',
                  opacity: testimonialsVisible ? 1 : 0,
                  animationDelay: `${0.15 * index}s`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '20px',
                  fontFamily: 'Marcellus, serif'
                }}>
                  &ldquo;
                </div>
                <p style={{ 
                  fontStyle: 'italic', 
                  fontSize: '1.05rem', 
                  lineHeight: '1.9',
                  color: '#e0e0e0',
                  marginBottom: '30px'
                }}>
                  {testimonial.text}
                </p>
                <p style={{ 
                  fontWeight: '700', 
                  color: 'var(--accent)',
                  fontSize: '1rem',
                  letterSpacing: '1px'
                }}>
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ padding: '100px 0', backgroundColor: 'var(--accent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ 
            color: 'white', 
            marginBottom: '25px', 
            fontSize: '2.8rem',
            fontFamily: 'Marcellus, serif',
            fontWeight: '400'
          }}>
            Ready to Talk? Schedule a Consultation Now
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.95)', 
            marginBottom: '40px', 
            fontSize: '1.15rem', 
            maxWidth: '650px', 
            margin: '0 auto 40px',
            lineHeight: '1.8'
          }}>
            We make it easy to get the help you need. Professional advice, fast responses, and a team that cares.
          </p>
          <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link 
              href="#contact" 
              className="btn" 
              style={{ backgroundColor: 'var(--primary)', padding: '18px 45px' }}
            >
              Contact Us
            </Link>
            <a 
              href="tel:+447481758526" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                color: 'white', 
                fontWeight: '700',
                fontSize: '1.3rem',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Phone size={26} /> +44 7481 758 526
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </main>
  );
}
