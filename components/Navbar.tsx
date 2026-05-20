"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Beranda", href: "#hero" },
    { label: "Layanan", href: "#services" },
    { label: "Proyek", href: "#projects" },
    { label: "Tentang", href: "#about" },
    { label: "Tim", href: "#team" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(15,28,46,0.1)"
          : "1px solid rgba(15,28,46,0.06)",
        padding: "0 24px",
        boxShadow: scrolled ? "0 2px 20px rgba(15,28,46,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
              src="/logo.png"
              alt="rasenatech logo"
              style={{ height: 50, width: "auto", display: "block" }}
            />
          <div>
            <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 19, color: "#0f1c2e", letterSpacing: "-0.3px", lineHeight: 1 }}>
              rasena<span style={{ color: "#1a6fd4" }}>tech</span>
            </div>
            <div style={{ fontSize: 9, color: "#94a3b8", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Sora', sans-serif" }}>
              digital solutions
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 2, alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{
              color: "#4a5568",
              textDecoration: "none",
              padding: "8px 13px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "'Sora', sans-serif",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = "#1a6fd4";
              (e.target as HTMLElement).style.background = "rgba(26,111,212,0.07)";
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = "#4a5568";
              (e.target as HTMLElement).style.background = "transparent";
            }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" style={{
            marginLeft: 10,
            padding: "9px 20px",
            fontSize: 14,
            textDecoration: "none",
            borderRadius: 9,
            background: "#1a6fd4",
            color: "white",
            fontWeight: 600,
            fontFamily: "'Sora', sans-serif",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#155cad")}
          onMouseLeave={e => (e.currentTarget.style.background = "#1a6fd4")}
          >
            Mulai Proyek →
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#0f1c2e" }}
          className="hamburger"
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "white",
          borderTop: "1px solid rgba(15,28,46,0.08)",
          padding: "12px 24px 20px",
        }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block",
              color: "#374151",
              textDecoration: "none",
              padding: "11px 0",
              fontSize: 15,
              fontWeight: 500,
              fontFamily: "'Sora', sans-serif",
              borderBottom: "1px solid rgba(15,28,46,0.06)",
            }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            display: "block",
            textAlign: "center",
            marginTop: 14,
            padding: "12px",
            background: "#1a6fd4",
            color: "white",
            borderRadius: 9,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            fontFamily: "'Sora', sans-serif",
          }}>
            Mulai Proyek →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
