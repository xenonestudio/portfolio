import React, { useState, useRef, useEffect } from 'react';
import { trackEvent } from './firebase';

const COMMANDS = {
  help: [
    'Comandos disponibles:',
    '  about       - Breve biografía profesional.',
    '  skills      - Stack tecnológico y habilidades principales.',
    '  experience  - Historial de puestos de trabajo y logros.',
    '  education   - Títulos y estudios académicos.',
    '  apps        - Aplicaciones publicadas en Google Play.',
    '  clear       - Limpiar la pantalla de la terminal.'
  ],
  about: [
    'Iclex Sánchez (Lex Sank) — Ingeniero de Software, IoT & Redes',
    '----------------------------------------------------------------',
    'Especialista en conectar el mundo físico (Hardware IoT, microcontroladores,',
    'sistemas autónomos solares, redes carrier-class GPON/FTTH) con el mundo digital',
    '(SaaS multi-tenant, WebGL 3D, compresión de imágenes, backend y DevOps).',
    'Cofundador de Cindetec S.A. (ISP/WISP) y fundador de Xenón Estudio.',
    'Apasionado por la convergencia de Software + Telecomunicaciones + UI/UX y 3D.'
  ],
  skills: [
    'Habilidades Técnicas Principales:',
    '----------------------------------------------------------------',
    '[Frontend]        React, Angular, WebGL, Pannellum, HTML5, CSS3, JS/ES6+',
    '[Backend / SaaS]  Node.js, PHP, Laravel, Java (Tomcat), C++',
    '[Bases de Datos]  PostgreSQL, MySQL, SQLite, MongoDB (Teórico)',
    '[IoT / Hardware]  ESP32, LoRa Mesh, WebRTC, WebSockets, MQTT, Carga Solar',
    '[Redes / Telco]   Fibra Óptica FTTH/GPON, OLT/ONU, MikroTik (MTCNA), Ubiquiti',
    '[DevOps / Cloud]  Docker Desktop, Nginx Proxy Manager, GCP, Firebase, Linux VPS',
    '[Diseño / 3D]     Blender (3D), Figma (UI/UX), Adobe Creative Suite, CorelDraw'
  ],
  education: [
    'Educación Formal:',
    '----------------------------------------------------------------',
    '🎓 TSU en Informática (2016 - 2021) - I.U.T. Antonio José de Sucre',
    '🎓 TSU en Diseño Gráfico (2017 - 2019) - I.U.T. Antonio José de Sucre'
  ],
  apps: [
    'Aplicaciones en Google Play Store:',
    '----------------------------------------------------------------',
    '• PsiqueAmor      - Soporte de pareja e interacciones diarias (1000+ descargas).',
    '• Ovis Place      - Comercio electrónico y catálogo comercial (500+ descargas).',
    '• Wings & Brew    - Comandas digitales y gestión de restaurantes (100+ descargas).',
    '• OR GOLD         - Catálogo corporativo de joyería fina (100+ descargas).',
    '• Neo Phone Store - Exhibición y compra de móviles (100+ descargas).',
    '• Amarillas App   - Directorio telefónico y guía comercial (500+ descargas).'
  ],
  experience: [
    'Experiencia Laboral Clave:',
    '----------------------------------------------------------------',
    '[2020 - Pres.] Tech Lead & Full Stack Developer - Xenón / Neurón',
    '               Liderazgo de apps, WebGL 3D (Virtual Vista) y telemetría.',
    '               Diseñé el formato de compresión propietario .LSX.',
    '[2021 - 2024] Coordinador de Sistemas - Cindetec S.A. (ISP)',
    '               Administración de servidores Linux carrier-class y base PostgreSQL.',
    '[2019 - 2021] Cofundador & Director Técnico - Cindetec S.A. (WISP/ISP)',
    '               Diseño e implementación de red desde cero para más de 300 usuarios.',
    '[2017 - 2021] Telecom & Network Engineer - Cable Norte C.A.',
    '               Despliegue de más de 45km de Fibra Óptica (FTTH/GPON).'
  ]
};

export default function Terminal() {
  const [history, setHistory] = useState([
    'Xenon OS [Version 1.0.4]',
    '(c) Xenon Estudio. Todos los derechos reservados.',
    '',
    'Escribe \'help\' para listar los comandos disponibles y explorar mi CV.'
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on content updates
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim().toLowerCase();
      const newHistory = [...history, `guest@xenon-os:~$ ${input}`];

      // Track event in Firebase Analytics
      if (trimmedInput !== '') {
        trackEvent('terminal_command', { command: trimmedInput });
      }

      if (trimmedInput === 'clear') {
        setHistory([]);
      } else if (trimmedInput === '') {
        setHistory(newHistory);
      } else if (COMMANDS[trimmedInput]) {
        setHistory([...newHistory, ...COMMANDS[trimmedInput], '']);
      } else {
        setHistory([
          ...newHistory,
          `Comando no reconocido: '${input}'. Escribe 'help' para ver los comandos válidos.`,
          ''
        ]);
      }
      setInput('');
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal-window glow-cyan" onClick={focusInput} style={{ cursor: 'text' }}>
      <div className="terminal-header">
        <div className="terminal-dot-btn dot-red"></div>
        <div className="terminal-dot-btn dot-yellow"></div>
        <div className="terminal-dot-btn dot-green"></div>
        <div className="terminal-title">guest@xenon-os:~ (Terminal interactiva)</div>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, idx) => (
          <div key={idx} style={{ minHeight: '18px', whiteSpace: 'pre-wrap' }}>
            {line}
          </div>
        ))}
        <div className="terminal-prompt-line">
          <span>guest@xenon-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
