import React from 'react';
import { Star, Download, ExternalLink } from 'lucide-react';

const APPS = [
  {
    id: 1,
    title: 'PsiqueAmor',
    category: 'Estilo de vida / Psicología',
    downloads: '1,000+',
    rating: '4.8',
    description: 'Aplicación diseñada para ofrecer soporte interactivo, consejos prácticos, ejercicios diarios y dinámicas interactivas para parejas.',
    url: 'https://play.google.com/store/apps/details?id=com.psiqueamor.app'
  },
  {
    id: 2,
    title: 'Ovis Place',
    category: 'Compras / Catálogo',
    downloads: '500+',
    rating: '4.5',
    description: 'Catálogo de comercio electrónico y directorio comercial para conectar tiendas y servicios locales con usuarios en tiempo real.',
    url: 'https://play.google.com/store/apps/details?id=com.ovis.web'
  },
  {
    id: 3,
    title: 'Wings & Brew',
    category: 'Alimentos y Bebidas',
    downloads: '100+',
    rating: '4.7',
    description: 'Sistema interactivo de pedidos en mesa y menú digital inteligente para mejorar los tiempos de atención en restaurantes y bodegones.',
    url: 'https://play.google.com/store/apps/details?id=com.wings.web'
  },
  {
    id: 4,
    title: 'OR GOLD Venezuela',
    category: 'Negocios / Catálogo',
    downloads: '100+',
    rating: '4.6',
    description: 'Catálogo de productos corporativos y galería de joyería fina de alta gama liderada por la diseñadora Olga Rodríguez.',
    url: 'https://play.google.com/store/apps/details?id=com.ORgold.web'
  },
  {
    id: 5,
    title: 'Neo Phone Store',
    category: 'Compras / Tecnología',
    downloads: '100+',
    rating: '4.4',
    description: 'Tienda virtual interactiva para la exhibición y compra de dispositivos móviles y accesorios tecnológicos.',
    url: 'https://play.google.com/store/apps/details?id=com.NeoStore.app'
  },
  {
    id: 6,
    title: 'Amarillas App',
    category: 'Directorios / Servicios',
    downloads: '500+',
    rating: '4.3',
    description: 'Directorio telefónico y guía comercial interactiva de servicios profesionales y comercios de la región.',
    url: 'https://play.google.com/store/apps/details?id=com.amarilla.app'
  }
];

export default function AppShowcase() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      margin: '2rem 0'
    }}>
      {APPS.map((app) => (
        <div key={app.id} className="glass-card" style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '220px'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>{app.title}</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{app.category}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(245, 158, 11, 0.1)',
                color: '#f59e0b',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                <Star size={12} fill="#f59e0b" />
                <span>{app.rating}</span>
              </div>
            </div>
            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.85rem',
              marginTop: '0.75rem',
              lineHeight: '1.5'
            }}>{app.description}</p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
              <Download size={14} />
              <span>{app.downloads} descargas</span>
            </div>
            <a
              href={app.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem',
                color: 'var(--accent-cyan)',
                fontWeight: 500
              }}
            >
              <span>Ver en Play Store</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
