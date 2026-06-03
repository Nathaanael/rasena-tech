"use client";

const team = [
  {
    name: "Raffi Dzaky Mahendra",
    role: "Fullstack Developer",
    expertise: ["System Architect", "Backend"],
    color: "#1a6fd4",
    initials: "RM",
  },
  {
    name: "Nathanael Chrystian Prasetyo",
    role: "Fullstack Developer",
    expertise: ["UI/UX Enthusiast", "Frontend"],
    color: "#8b5cf6",
    initials: "NR",
  },
  {
    name: "Sean Nathaniel Prabowo",
    role: "Fullstack Developer",
    expertise: ["QA Specialist", "Testing"],
    color: "#0ea5e9",
    initials: "SP",
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
              {/* Avatar */}
              <div style={{
                width: 100, height: 100,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${t.color}33, ${t.color}55)`,
                border: `3px solid ${t.color}30`,
                margin: "0 auto 20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
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
              <div style={{ color: t.color, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>{t.role}</div>

              {/* Expertise badges */}
              <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
                {t.expertise.map((tag) => (
                  <span key={tag} style={{
                    background: `${t.color}12`,
                    color: t.color,
                    border: `1px solid ${t.color}30`,
                    borderRadius: 100,
                    padding: "4px 12px",
                    fontSize: 11,
                    fontWeight: 600,
                  }}>{tag}</span>
                ))}
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
                    {b.tags.map(tag => (
                      <span key={tag} style={{ background: "#f1f5f9", color: "#64748b", borderRadius: 5, padding: "2px 8px", fontSize: 11, fontWeight: 500 }}>{tag}</span>
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

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) { .benefits-grid { grid-template-columns: 1fr !important; } }
      ` }} />
    </section>
  );
}