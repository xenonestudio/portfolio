import React, { useState } from 'react';
import { 
  Mail, 
  Terminal as TerminalIcon, 
  Cpu, 
  Globe, 
  FileText, 
  Layers, 
  ExternalLink,
  MapPin,
  Sparkles,
  PhoneCall,
  Send,
  CheckCircle,
  Award,
  Navigation
} from 'lucide-react';
import Terminal from './Terminal';
import BentoGrid from './BentoGrid';
import Timeline from './Timeline';
import AppShowcase from './AppShowcase';
import profileImg from './assets/foto.png';

// Direct SVG components for Brand Icons (removed in Lucide v0.400+)
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* -------------------------------------------------------------
         NAVBAR / HEADER
         ------------------------------------------------------------- */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 11, 14, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
            <span>LexSank</span>
            <span style={{ color: 'var(--accent-cyan)' }}>/&gt;</span>
          </a>
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
            <a href="#about">Sobre mí</a>
            <a href="#console">Terminal</a>
            <a href="#skills">Habilidades</a>
            <a href="#experience">Experiencia</a>
            <a href="#apps">Apps</a>
            <a href="#contact">Contacto</a>
          </nav>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://github.com/xenonestudio" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-secondary)' }}>
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lexsank/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-secondary)' }}>
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------
         HERO SECTION
         ------------------------------------------------------------- */}
      <section id="about" style={{ padding: '6rem 0 4rem 0', position: 'relative' }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '850px'
        }}>
          {/* Profile Image with Cyberpunk border */}
          <div style={{
            position: 'relative',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            padding: '4px',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.25)',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'var(--bg-primary)'
            }}>
              <img 
                src={profileImg} 
                alt="Iclex Sánchez" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center 15%'
                }} 
              />
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 240, 255, 0.05)',
            border: '1px solid rgba(0, 240, 255, 0.1)',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            color: 'var(--accent-cyan)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={12} />
            <span>Ingeniero de Software, IoT & Redes de Telecomunicación</span>
          </div>
          
          <h1 style={{
            fontSize: '3.5rem',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            fontWeight: 700
          }}>
            La convergencia de <span className="text-gradient-cyan">Software</span>, <span className="text-gradient-purple">Hardware</span> y <span style={{ color: 'var(--accent-green)' }}>Redes Carrier-Class</span>.
          </h1>
          
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '2.5rem'
          }}>
            Diseño e implemento arquitecturas SaaS distribuidas, sistemas de telemetría IoT con microcontroladores ESP32 alimentados por energía solar, redes de Fibra Óptica GPON/FTTH y gráficos interactivos 3D WebGL con dirección de arte visual UI/UX premium.
          </p>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            marginBottom: '3rem'
          }}>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>Búsqueda Activa</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Disponibilidad Inmediata</div>
            </div>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-purple)' }}>Remoto / Híbrido</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Disponibilidad de Viaje</div>
            </div>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-green)' }}>Inglés Técnico</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Lectura y Escritura Fluida</div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a href="#contact" className="glow-cyan" style={{
              background: 'linear-gradient(135deg, var(--accent-cyan), #0077ff)',
              color: '#000',
              fontWeight: 600,
              padding: '0.85rem 1.75rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(0, 240, 255, 0.2)'
            }}>
              <PhoneCall size={16} />
              <span>Contrátame</span>
            </a>
            <a href="https://www.linkedin.com/in/lexsank/" target="_blank" rel="noreferrer" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--color-text-primary)',
              fontWeight: 500,
              padding: '0.85rem 1.75rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <FileText size={16} />
              <span>Ver LinkedIn</span>
            </a>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--color-text-muted)',
            fontSize: '0.85rem',
            marginTop: '2rem'
          }}>
            <MapPin size={14} />
            <span>San Cristóbal, Táchira, Venezuela (Barrio Obrero)</span>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
         INTERACTIVE TERMINAL SECTION
         ------------------------------------------------------------- */}
      <section id="console" style={{ padding: '3rem 0', background: '#07080a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>&gt;</span> Terminal Interactiva
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Explora mi experiencia y proyectos usando comandos de red estándar en tiempo real.
            </p>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Terminal />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
         BENTO GRID / SKILLS SECTION
         ------------------------------------------------------------- */}
      <section id="skills" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Habilidades Multidisciplinarias</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                Unificando desarrollo de software, hardware IoT y redes de telecomunicaciones.
              </p>
            </div>
          </div>
          <BentoGrid />
        </div>
      </section>

      {/* -------------------------------------------------------------
         EXPERIENCE / TIMELINE SECTION
         ------------------------------------------------------------- */}
      <section id="experience" style={{ padding: '5rem 0', background: '#07080a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Trayectoria Profesional</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Proyectos clave, roles de liderazgo y despliegue de infraestructura crítica.
            </p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Timeline />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
         APPS / GOOGLE PLAY SHOWCASE SECTION
         ------------------------------------------------------------- */}
      <section id="apps" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Showcase de Apps Móviles</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Aplicaciones activas y publicadas por mí como desarrollador en Google Play Console.
            </p>
          </div>
          <AppShowcase />
        </div>
      </section>

      {/* -------------------------------------------------------------
         CONTACT FORM SECTION
         ------------------------------------------------------------- */}
      <section id="contact" style={{ padding: '6rem 0', background: '#07080a', flexGrow: 1 }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>¿Tienes un proyecto en mente?</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Estoy disponible para proyectos de consultoría, desarrollo de software a medida e integraciones IoT.
            </p>
          </div>
          
          <form className="glass-card" onSubmit={handleSubmit} style={{
            width: '100%',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Nombre Completo</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Correo Electrónico</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>Mensaje</label>
              <textarea
                required
                rows="4"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  color: '#fff',
                  outline: 'none',
                  fontFamily: 'inherit',
                  resize: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              className="glow-cyan"
              style={{
                background: 'linear-gradient(135deg, var(--accent-cyan), #0077ff)',
                color: '#000',
                border: 'none',
                fontWeight: 600,
                padding: '0.85rem',
                borderRadius: '6px',
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '0.5rem',
                transition: 'var(--transition-smooth)'
              }}
            >
              <Send size={16} />
              <span>{isSent ? 'Mensaje Enviado ✓' : 'Enviar Mensaje'}</span>
            </button>
          </form>
        </div>
      </section>

      {/* -------------------------------------------------------------
         FOOTER
         ------------------------------------------------------------- */}
      <footer style={{
        background: '#040507',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '3rem 0',
        color: 'var(--color-text-muted)',
        fontSize: '0.85rem'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>Iclex Jesús Sánchez Cravo</div>
            <div>&copy; {new Date().getFullYear()} Xenón Estudio. Todos los derechos reservados.</div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/xenonestudio" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/lexsank/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:lexsank@gmail.com">lexsank@gmail.com</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
