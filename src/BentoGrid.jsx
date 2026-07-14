import React, { useRef, useEffect, useState } from 'react';
import { Cpu, Globe, Share2, Layers, HardDrive, Play } from 'lucide-react';

export default function BentoGrid() {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [telemetry, setTelemetry] = useState([40, 50, 45, 60, 55, 70, 65, 80]);

  // Telemetry real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => {
        const next = [...prev.slice(1)];
        const lastValue = prev[prev.length - 1];
        const change = (Math.random() - 0.5) * 15;
        const newValue = Math.max(10, Math.min(90, lastValue + change));
        next.push(newValue);
        return next;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // WebGL/Canvas interactive particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 2 + 1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.fill();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 80) {
            ctx.strokeStyle = `rgba(0, 240, 255, ${1 - dist / 80})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Format telemetry SVG path
  const svgPath = telemetry
    .map((val, idx) => `${idx * 25},${100 - val}`)
    .reduce((acc, current, idx) => (idx === 0 ? `M ${current}` : `${acc} L ${current}`), '');

  return (
    <div className="bento-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      margin: '3rem 0'
    }}>
      {/* 1. Canvas / WebGL Node Graph Card */}
      <div className="glass-card" style={{
        gridColumn: 'span 2',
        position: 'relative',
        height: '280px',
        overflow: 'hidden',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
        <canvas ref={canvasRef} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--accent-cyan)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>Visualización Interactiva</span>
          <h3 style={{ fontSize: '1.5rem', margin: '0.25rem 0', color: 'var(--color-text-primary)' }}>Nodos & Conexiones WebGL</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            Desarrollo de simuladores visuales en tiempo real y tours 360° usando renderizadores WebGL y aceleración gráfica por hardware.
          </p>
        </div>
      </div>

      {/* 2. Full Stack Developer Card */}
      <div className="glass-card" style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px'
      }}>
        <div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(171, 32, 253, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-purple)',
            marginBottom: '1rem'
          }}>
            <Layers size={20} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Estructura de Software</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            Construcción de arquitecturas SaaS distribuidas, APIS RESTful seguras y microservicios escalables.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem' }}>
          {['Node.js', 'React.js', 'PHP', 'Laravel', 'TypeScript', 'Docker'].map((tech) => (
            <span key={tech} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              color: 'var(--color-text-primary)'
            }}>{tech}</span>
          ))}
        </div>
      </div>

      {/* 3. Telemetry / IoT Live Chart Card */}
      <div className="glass-card" style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px'
      }}>
        <div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(16, 185, 129, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-green)',
            marginBottom: '1rem'
          }}>
            <Cpu size={20} />
          </div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>IoT & Telemetría</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
            Integración de sensores, comunicaciones MQTT de baja latencia y redes mesh con microcontroladores ESP32.
          </p>
        </div>
        <div style={{ height: '80px', width: '100%', marginTop: '1rem', position: 'relative' }}>
          <svg style={{ width: '100%', height: '100%' }}>
            <path
              d={svgPath}
              fill="none"
              stroke="var(--accent-green)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {telemetry.map((val, idx) => (
              <circle
                key={idx}
                cx={idx * 25}
                cy={100 - val}
                r="3"
                fill="var(--accent-green)"
              />
            ))}
          </svg>
          <span style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontSize: '0.65rem',
            color: 'var(--accent-green)',
            fontWeight: 700,
            textTransform: 'uppercase'
          }}>Telemetría en vivo</span>
        </div>
      </div>

      {/* 4. Network FTTH/GPON Card */}
      <div className="glass-card" style={{
        gridColumn: 'span 2',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(0, 240, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem'
            }}>
              <Globe size={20} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Telecomunicaciones & Fibra Óptica</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Diseño, montaje y configuración lógica de redes de Fibra Óptica FTTH en tecnología GPON e infraestructuras de enrutamiento MikroTik/Ubiquiti para ISPs.
            </p>
          </div>
          {/* Custom GPON Icon Graphic */}
          <div style={{
            opacity: 0.15,
            transform: 'scale(1.5)',
            transformOrigin: 'top right'
          }}>
            <HardDrive size={80} color="var(--accent-cyan)" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', marginTop: '1rem' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>45+ KM</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Red FTTH Desplegada</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>300+</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Usuarios Concurrentes</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>100%</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Configuración Lógica</div>
          </div>
        </div>
      </div>
    </div>
  );
}
