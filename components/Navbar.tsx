"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navLinksRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer — auto-highlight active section
  useEffect(() => {
    const sections = ["#hero", "#services", "#projects", "#about", "#team", "#contact"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Sliding indicator
  useEffect(() => {
    const target = hovered ?? activeLink;
    const el = linkRefs.current[target];
    const container = navLinksRef.current;
    if (!el || !container) return;
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }, [hovered, activeLink]);

  const links = [
    { label: "Beranda", href: "#hero" },
    { label: "Layanan", href: "#services" },
    { label: "Proyek", href: "#projects" },
    { label: "Tentang", href: "#about" },
    { label: "Tim", href: "#team" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0 32px;
          transition: background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .nav-root.scrolled {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(28px) saturate(200%);
          -webkit-backdrop-filter: blur(28px) saturate(200%);
          border-bottom: 1px solid rgba(15,28,46,0.08);
          box-shadow: 0 2px 32px rgba(15,28,46,0.07);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          gap: 24px;
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }
        .nav-logo:hover { opacity: 0.85; }

        .nav-logo img {
          height: 56px;
          width: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .nav-logo:hover img { transform: scale(1.05); }

        .logo-text-wrap { display: flex; flex-direction: column; gap: 2px; }

        .logo-name {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          font-size: 18px;
          color: #0f1c2e;
          letter-spacing: -0.5px;
          line-height: 1;
        }
        .logo-name span { color: #1a6fd4; }

        .logo-sub {
          font-family: 'Sora', sans-serif;
          font-size: 8.5px;
          color: #b0bec5;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 500;
        }

        /* ── Desktop pill nav ── */
        .desktop-links {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(15,28,46,0.04);
          border: 1px solid rgba(15,28,46,0.07);
          border-radius: 14px;
          padding: 5px;
        }

        /* Sliding background indicator */
        .nav-indicator {
          position: absolute;
          top: 5px;
          height: calc(100% - 10px);
          border-radius: 9px;
          background: white;
          box-shadow: 0 1px 10px rgba(15,28,46,0.1);
          transition: left 0.28s cubic-bezier(0.4,0,0.2,1),
                      width 0.28s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.2s ease;
          pointer-events: none;
          z-index: 0;
        }

        .nav-link {
          position: relative;
          z-index: 1;
          color: #6b7f95;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 9px;
          font-size: 13.5px;
          font-weight: 500;
          font-family: 'Sora', sans-serif;
          transition: color 0.2s ease;
          white-space: nowrap;
          user-select: none;
        }

        .nav-link:hover { color: #0f1c2e; }
        .nav-link.active { color: #1a6fd4; font-weight: 600; }

        /* Active underline dot */
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1a6fd4;
          opacity: 0.7;
        }

        /* ── CTA ── */
        .nav-cta { display: flex; align-items: center; flex-shrink: 0; }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 22px;
          font-size: 13.5px;
          text-decoration: none;
          border-radius: 11px;
          background: #0f1c2e;
          color: white;
          font-weight: 600;
          font-family: 'Sora', sans-serif;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          letter-spacing: -0.1px;
          position: relative;
          overflow: hidden;
          border: 1.5px solid transparent;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26,111,212,0.35) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .cta-btn:hover {
          background: #1a6fd4;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(26,111,212,0.35);
          border-color: rgba(26,111,212,0.3);
        }
        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:active { transform: translateY(0); box-shadow: none; }

        .cta-icon {
          display: inline-flex;
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
        .cta-btn:hover .cta-icon { transform: translateX(4px); }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(15,28,46,0.04);
          border: 1px solid rgba(15,28,46,0.1);
          border-radius: 11px;
          cursor: pointer;
          color: #0f1c2e;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .hamburger:hover { background: rgba(15,28,46,0.09); }
        .hamburger:active { transform: scale(0.95); }

        /* Animated hamburger lines */
        .ham-line {
          display: block;
          width: 18px;
          height: 1.5px;
          background: currentColor;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s;
          transform-origin: center;
        }
        .ham-lines { display: flex; flex-direction: column; gap: 4px; }
        .ham-open .ham-line:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .ham-open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ham-open .ham-line:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        /* ── Mobile menu ── */
        .mobile-menu {
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(24px);
          border-top: 1px solid rgba(15,28,46,0.07);
          padding: 8px 16px 20px;
          animation: slideDown 0.25s cubic-bezier(0.4,0,0.2,1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #374151;
          text-decoration: none;
          padding: 13px 14px;
          font-size: 14.5px;
          font-weight: 500;
          font-family: 'Sora', sans-serif;
          border-radius: 11px;
          transition: background 0.15s, color 0.15s;
          position: relative;
        }

        .mobile-link:hover {
          background: rgba(26,111,212,0.06);
          color: #1a6fd4;
        }

        .mobile-link.active-mobile {
          color: #1a6fd4;
          background: rgba(26,111,212,0.07);
          font-weight: 600;
        }

        .mobile-link-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mobile-link-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #1a6fd4;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .mobile-link.active-mobile .mobile-link-dot { opacity: 1; }

        .mobile-chevron {
          color: #c8d4df;
          font-size: 16px;
          line-height: 1;
          transition: transform 0.2s, color 0.15s;
        }
        .mobile-link:hover .mobile-chevron,
        .mobile-link.active-mobile .mobile-chevron {
          color: #1a6fd4;
          transform: translateX(3px);
        }

        .mobile-divider {
          height: 1px;
          background: rgba(15,28,46,0.05);
          margin: 2px 14px;
        }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
          padding: 15px;
          background: #0f1c2e;
          color: white;
          border-radius: 13px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          font-family: 'Sora', sans-serif;
          transition: background 0.2s, transform 0.2s;
        }
        .mobile-cta:hover { background: #1a6fd4; transform: translateY(-1px); }
        .mobile-cta:active { transform: translateY(0); }

        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
          .nav-root { padding: 0 20px; }
        }
      ` }} />

      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <a href="#hero" className="nav-logo">
            <img src="/logo2.png" alt="rasenatech logo" />
            <div className="logo-text-wrap">
              <div className="logo-name">rasena<span>tech</span></div>
              <div className="logo-sub">digital solutions</div>
            </div>
          </a>

          {/* Desktop nav with sliding indicator */}
          <div
            className="desktop-links"
            ref={navLinksRef}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Sliding pill */}
            <div
              className="nav-indicator"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
              }}
            />
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                ref={(el) => { linkRefs.current[l.href] = el; }}
                className={`nav-link ${activeLink === l.href ? "active" : ""}`}
                onMouseEnter={() => setHovered(l.href)}
                onClick={() => { setActiveLink(l.href); setHovered(null); }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="nav-cta">
            <a href="#contact" className="cta-btn">
              Mulai Proyek
              <span className="cta-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "ham-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="ham-lines">
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {links.map((l, i) => (
              <div key={l.label}>
                <a
                  href={l.href}
                  className={`mobile-link ${activeLink === l.href ? "active-mobile" : ""}`}
                  onClick={() => { setMenuOpen(false); setActiveLink(l.href); }}
                >
                  {l.label}
                  <div className="mobile-link-right">
                    <span className="mobile-link-dot" />
                    <span className="mobile-chevron">›</span>
                  </div>
                </a>
                {i < links.length - 1 && <div className="mobile-divider" />}
              </div>
            ))}
            <a
              href="#contact"
              className="mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Mulai Proyek
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}