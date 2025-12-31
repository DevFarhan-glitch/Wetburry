'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';
import PersonalVisas from '@/components/PersonalVisas';
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
      <PersonalVisas />
      
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

      <section id="contact" style={{ 
        padding: '140px 0', 
        backgroundColor: 'var(--primary)', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(184, 150, 126, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(184, 150, 126, 0.05) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />

        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '100px', alignItems: 'center' }}>
            <div className="fade-in-left">
              <div className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>
                <span style={{ color: 'var(--accent)', letterSpacing: '4px' }}>Get In Touch</span>
                <h2 style={{ 
                  color: 'white', 
                  fontSize: '3.8rem', 
                  marginBottom: '25px',
                  WebkitTextStroke: '0.5px rgba(255,255,255,0.1)'
                }}>
                  Ready to <span style={{ color: 'var(--accent)' }}>Talk?</span><br />
                  Let&apos;s Build Your Future
                </h2>
              </div>
              <p style={{ 
                color: 'rgba(255,255,255,0.7)', 
                marginBottom: '50px', 
                fontSize: '1.2rem', 
                lineHeight: '1.9',
                maxWidth: '550px'
              }}>
                Expert immigration guidance is just a message away. Whether you&apos;re looking for business expansion or family reunification, our team is here to support you.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <a 
                  href="tel:+447481758526" 
                  className="contact-info-card"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '25px', 
                    color: 'white',
                    padding: '30px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'var(--transition)',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0',
                    boxShadow: '0 15px 30px rgba(184, 150, 126, 0.2)'
                  }}>
                    <Phone size={28} color="white" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '8px', fontWeight: '700' }}>Direct Consultation</span>
                    <span style={{ fontWeight: '600', fontSize: '1.5rem', fontFamily: 'Marcellus, serif' }}>+44 7481 758 526</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="fade-in-right" style={{ position: 'relative' }}>
              {/* Floating accent bar */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderTop: '2px solid var(--accent)',
                borderRight: '2px solid var(--accent)',
                zIndex: -1
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '100px',
                height: '100px',
                borderBottom: '2px solid var(--accent)',
                borderLeft: '2px solid var(--accent)',
                zIndex: -1
              }} />

              <div style={{ 
                background: 'white', 
                padding: '70px 60px', 
                borderRadius: '0',
                boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
                position: 'relative'
              }}>
                <form className="contact-form">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Inquiry Type</label>
                    <select required>
                      <option value="">Choose a Service...</option>
                      <option value="business">Business & Investor Visas</option>
                      <option value="personal">Personal & Family Visas</option>
                      <option value="citizenship">British Citizenship</option>
                      <option value="sponsor">Sponsor License</option>
                      <option value="other">General Consultation</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea rows={5} placeholder="Tell us about your case..." required></textarea>
                  </div>
                  <button type="submit" className="btn" style={{ 
                    width: '100%', 
                    marginTop: '20px',
                    padding: '22px',
                    fontSize: '0.9rem'
                  }}>
                    Send Message <ArrowUp size={20} style={{ transform: 'rotate(90deg)' }} />
                  </button>
                </form>
              </div>
            </div>
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
