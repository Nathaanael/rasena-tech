"use client";

export default function Footer() {
  return (
    <footer style={{ background: "#020b1a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              {/* Logo */}
              <a href="#hero" className="nav-logo">
                <img src="/logo.png" alt="rasenatech logo" style={{ borderRadius: "50%" }} />
              </a>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 20, color: "white" }}>
                  rasena<span style={{ color: "#38bdf8" }}>tech</span>
                </div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "1.5px" }}>DIGITAL SOLUTIONS</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Software house profesional yang menghadirkan solusi digital untuk pertumbuhan bisnis Indonesia.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, href: "https://www.instagram.com/rasenatech?igsh=MXFkdzJwZXhzdnloNw==" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(26,111,212,0.3)"; (e.currentTarget as HTMLElement).style.color = "#38bdf8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Layanan", links: ["Web Development", "Mobile App", "Enterprise System", "UI/UX Design", "Dashboard & Data"] },
            { title: "Perusahaan", links: ["Tentang Kami", "Tim", "Portofolio", "Blog", "Karir"] },
            { title: "Dukungan", links: ["Konsultasi Gratis", "Hubungi Kami", "FAQ", "Privacy Policy", "Terms of Service"] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ color: "white", fontWeight: 700, fontSize: 14, marginBottom: 20, fontFamily: "'Sora', sans-serif" }}>{col.title}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "#38bdf8"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)"}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © 2024 Rasena Tech. All rights reserved.
          </div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
            Built by Rasena Tech Team
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px) { .footer-grid { grid-template-columns: 1fr !important; } }
      ` }} />
    </footer>
  );
}
