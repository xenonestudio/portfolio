import React, { useState } from 'react';
import { Calendar, Briefcase, ChevronRight, ChevronDown } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Full Stack Developer & Tech Lead (Outsourcing)',
    company: 'Xenón Estudio / Neurón C.A. / ZippyTech',
    period: 'Feb 2020 – Presente',
    shortDesc: 'Liderazgo técnico de proyectos SaaS, optimizaciones avanzadas de rendimiento y desarrollo de integraciones de hardware e interacciones 3D.',
    details: [
      'AERUM 360 (Vista360): Diseñé la arquitectura multi-tenant de la plataforma para tracking telemétrico y lecturas de consumo de servicios integrando OCR y microcontroladores ESP32.',
      'Virtual Vista: Desarrollé de forma integral una plataforma autónoma para la gestión y despliegue de tours virtuales 360° usando React, Angular y la librería WebGL Pannellum, eliminando costos de hosting de terceros.',
      '.LSX (LexSank Variational Indexed Format): Diseñé un formato propietario de compresión de imágenes optimizado mediante Node.js y decodificadores en el navegador para acelerar cargas de renderizado indexado.',
      'Telemetría e IoT: Desarrollé lecturas de telemetría y visualización de vectores en tiempo real (consumo, voltaje y estado de carga de baterías) integrando microcontroladores ESP32 y brokers MQTT/WebSockets.',
      'Automatización & Scraping: Programé flujos complejos de automatización y manipulación remota del DOM usando Playwright y Puppeteer sobre entornos contenerizados en GCP y Firebase.',
      'WebRTC Streaming: Creé una solución de streaming web de pantalla y audio en tiempo real desde Android a PC local mediante redes Wi-Fi.'
    ],
    tech: ['Node.js', 'React', 'Three.js', 'Pannellum', 'WebRTC', 'MQTT', 'Docker', 'GCP', 'Firebase', 'Playwright', 'Puppeteer']
  },
  {
    id: 2,
    role: 'Coordinador de Sistemas & Network Engineer',
    company: 'Cindetec S.A.',
    period: 'Oct 2021 – Jun 2024',
    shortDesc: 'Administración de servidores Linux/UNIX carrier-class, desarrollo de software interno y soporte técnico de redes de segundo/tercer nivel para el ISP.',
    details: [
      'Administración y virtualización de servidores corporativos en entornos Linux/UNIX (servicios web, proxies, bases de datos y DNS).',
      'Desarrollo e integración de módulos de facturación y aprovisionamiento automático de clientes utilizando PHP, Java (Tomcat) y bases de datos PostgreSQL/MySQL.',
      'Configuración lógica de enrutamiento MikroTik y administración de enlaces de datos inalámbricos Ubiquiti de largo alcance (P2P).'
    ],
    tech: ['PHP', 'Java', 'PostgreSQL', 'Linux Server', 'Tomcat', 'MikroTik', 'Ubiquiti']
  },
  {
    id: 3,
    role: 'Cofundador & Director Técnico (WISP / ISP)',
    company: 'Cindetec S.A.',
    period: 'Ene 2019 – Dic 2021',
    shortDesc: 'Co-fundé y estructuré el Proveedor de Servicios de Internet (ISP), liderando el despliegue de infraestructura lógica y física de red en un entorno altamente competitivo.',
    details: [
      'Diseño e implementación integral de la red inalámbrica y facturación automática desde cero, dando soporte a más de 300 usuarios concurrentes.',
      'Optimización operativa de recursos para maximizar rentabilidad operativa del ISP frente a competidores con mayor capital.',
      'Reducción de caídas de red (downtime) en un 85% mediante redundancia de enlaces MikroTik y monitoreo preventivo de telemetría.'
    ],
    tech: ['MikroTik', 'Ubiquiti', 'Redes de Datos', 'Scripting RouterOS', 'SQLite']
  },
  {
    id: 4,
    role: 'Telecom & Network Engineer — Fibra Óptica GPON & Redes',
    company: 'Cable Norte C.A.',
    period: 'Feb 2017 – Sep 2021',
    shortDesc: 'Ingeniería de planta externa carrier-class, diseño de tendidos de fibra y redes de transporte corporativo de datos de banda ancha.',
    details: [
      'Planificación, diseño y despliegue físico de más de 45 kilómetros de redes de Fibra Óptica al Hogar (FTTH).',
      'Aprovisionamiento y configuración de cabeceras ópticas (OLTs) y terminales de usuario (ONUs) en redes GPON.',
      'Implementación de pruebas piloto de nodos LoRa Mesh de área amplia y bajo consumo para telemetría autónoma.'
    ],
    tech: ['Fibra Óptica', 'GPON', 'OLT/ONU', 'MikroTik', 'Ubiquiti', 'LoRa Mesh', 'Cisco']
  },
  {
    id: 5,
    role: 'Coordinador de Infraestructura de Medios, Diseño Gráfico & Servidores',
    company: 'Cable Norte C.A.',
    period: 'Feb 2014 – Dic 2019',
    shortDesc: 'Gestión técnica y creativa del departamento de medios, administración de servidores de contenido y dirección de arte publicitario.',
    details: [
      'Administración de servidores locales de almacenamiento de medios de comunicación y redes sociales corporativas.',
      'Dirección de la imagen corporativa de la marca, producción técnica de anuncios y diseño digital de piezas publicitarias.'
    ],
    tech: ['Adobe Creative Suite', 'Diseño Gráfico', 'Servidores de Medios', 'CorelDraw', 'Blender']
  }
];

export default function Timeline() {
  const [expandedId, setExpandedId] = useState(1);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="timeline">
      {EXPERIENCES.map((exp) => {
        const isExpanded = expandedId === exp.id;
        return (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div
              className="glass-card"
              onClick={() => toggleExpand(exp.id)}
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                borderLeft: isExpanded ? '3px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
                transition: 'border var(--transition-smooth)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>{exp.role}</h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.85rem',
                    marginTop: '0.25rem',
                    fontWeight: 500
                  }}>
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-text-muted)',
                  fontSize: '0.85rem'
                }}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                  <div style={{ marginLeft: '0.5rem', color: 'var(--color-text-secondary)' }}>
                    {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                </div>
              </div>

              <p style={{
                color: 'var(--color-text-secondary)',
                fontSize: '0.9rem',
                marginTop: '0.75rem'
              }}>{exp.shortDesc}</p>

              {isExpanded && (
                <div style={{
                  marginTop: '1.25rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Responsabilidades y Logros:</h4>
                  <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.25rem' }}>
                    {exp.details.map((detail, idx) => (
                      <li key={idx} style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '0.5rem'
                      }}>{detail}</li>
                    ))}
                  </ul>

                  <h4 style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tecnologías Utilizadas:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.tech.map((t) => (
                      <span key={t} style={{
                        background: 'rgba(0, 240, 255, 0.05)',
                        border: '1px solid rgba(0, 240, 255, 0.1)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: 'var(--accent-cyan)'
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
