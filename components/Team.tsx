"use client";

const team = [
  {
    name: "Nama Anda",
    role: "Co-Founder & CEO",
    expertise: "Fullstack Developer · System Architect",
    color: "#1a6fd4",
    initials: "NY",
    social: { github: "#", linkedin: "#" },
  },
  {
    name: "Nama Rekan",
    role: "Co-Founder & CTO",
    expertise: "Backend Engineer · DevOps",
    color: "#8b5cf6",
    initials: "NR",
    social: { github: "#", linkedin: "#" },
  },
];

const benefits = [
  { title: "Konsultasi Gratis", tags: ["Ideasi", "Solusi"], type: "100% Free", typeColor: "#059669", typeBg: "rgba(16,185,129,0.1)" },
  { title: "Desain Premium", tags: ["UI/UX", "Modern"], type: "High Quality", typeColor: "#1a6fd4", typeBg: "rgba(26,111,212,0.1)" },
  { title: "Kode Skalabel", tags: ["Cepat", "Aman"], type: "Performa", typeColor: "#8b5cf6", typeBg: "rgba(139,92,246,0.1)" },
  { title: "Support Terjamin", tags: ["Garansi", "Maintenance"], type: "Reliable", typeColor: "#d97706", typeBg: "rgba(240,165,0,0.1)" },
];

export default function Team() {
  return (
    <section id="team" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Team */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            TIM KAMI
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#020b1a", marginBottom: 16 }}>
            Orang-orang di Balik <span className="gradient-text">Rasena Tech</span>
          </h2>
          <p style={{ color: "#475569", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            Tim kami terdiri dari pengembang berpengalaman yang passionate terhadap teknologi dan inovasi.
          </p>
        </div>

        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }}>
          {team.map((t, i) => (
            <div key={i} className="card-hover" style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: 24,
              padding: 32,
              textAlign: "center",
              maxWidth: 280,
              flex: "1 1 240px",
            }}>
              {/* Avatar placeholder */}
              <div style={{
                width: 100, height: 100,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${t.color}33, ${t.color}55)`,
                border: `3px solid ${t.color}30`,
                margin: "0 auto 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
                {/* Placeholder avatar icon */}
                <svg width="44" height="44" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" fill={t.color} opacity="0.7"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={t.color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
                </svg>
                <div style={{
                  position: "absolute", bottom: 4, right: 4,
                  width: 16, height: 16, borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid white",
                }} />
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700, color: "#020b1a", marginBottom: 4 }}>{t.name}</h3>
              <div style={{ color: t.color, fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{t.role}</div>
              <div style={{ color: "#64748b", fontSize: 12, marginBottom: 20 }}>{t.expertise}</div>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <a href={t.social.github} style={{ width: 36, height: 36, borderRadius: 9, background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href={t.social.linkedin} style={{ width: 36, height: 36, borderRadius: 9, background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Promo CTA */}
        <div style={{ background: "linear-gradient(135deg, #f8fafc, #eff6ff)", border: "1px solid #e2e8f0", borderRadius: 24, padding: "48px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#020b1a", marginBottom: 8 }}>
                Mulai Transformasi Digital Anda 🚀
              </h3>
              <p style={{ color: "#475569", fontSize: 14 }}>Jadikan bisnis Anda lebih efisien dan menonjol dengan solusi teknologi dari kami.</p>
            </div>
            <a href="#contact" className="btn-primary" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Konsultasi Gratis
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }} className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 14,
                padding: "16px 20px",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#020b1a", marginBottom: 6 }}>{b.title}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {b.tags.map(t => (
                      <span key={t} style={{ background: "#f1f5f9", color: "#64748b", borderRadius: 5, padding: "2px 8px", fontSize: 11, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <span style={{
                  background: b.typeBg,
                  color: b.typeColor,
                  borderRadius: 100,
                  padding: "4px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}>{b.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .benefits-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
