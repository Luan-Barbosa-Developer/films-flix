import './footer.css';

import { useState, useEffect } from 'react';

export default function Footer() {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <p>
        Site desenvolvido por{' '}
        <a href="https://github.com/Luan-Barbosa-Developer" target="blank" rel="noopener noreferrer">
          Luan Barbosa
        </a>
      </p>
      <div className="social-links">
        <a
          href="https://github.com/Luan-Barbosa-Developer"
          target="blank"
          rel="noopener noreferrer"
        >
          🐙 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luan-barbosa-89489220b/"
          target="blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
      </div>

      {showButton && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ⬆️ Voltar ao topo
        </button>
      )}

      <p className="footer-copy">© {new Date().getFullYear()} Luan Barbosa. Todos os direitos reservados.</p>
    </footer>
  );
}
