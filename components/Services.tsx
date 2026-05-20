"use client";

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color: "#1a6fd4",
    title: "Web Development",
    desc: "Website company profile, e-commerce, landing page, hingga web app kompleks dengan performa tinggi dan desain modern.",
    features: ["Next.js / React", "Laravel / Node.js", "SEO Optimized", "Mobile Responsive"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/>
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
      </svg>
    ),
    color: "#8b5cf6",
    title: "Integrasi & Konsultasi IT",
    desc: "Layanan konsultasi arsitektur teknologi dan integrasi sistem yang menghubungkan berbagai platform bisnis Anda.",
    features: ["IT Blueprint", "API Gateway", "System Architecture", "Tech Audit"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    color: "#0ea5e9",
    title: "Enterprise System",
    desc: "Aplikasi bisnis custom yang mengotomasi proses operasional perusahaan.",
    features: ["ERP / CRM", "Custom Workflow", "Role & Permission", "API Integration"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    color: "#10b981",
    title: "UI/UX Design",
    desc: "Desain antarmuka yang estetis dan user-friendly. Dari wireframe hingga prototype interaktif siap dev.",
    features: ["Figma Design", "Prototyping", "Design System", "User Research"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: "#f97316",
    title: "Digital Marketing Tech",
    desc: "Integrasi tools marketing digital: landing page konversi tinggi, automation email, tracking analytics, dan dashboard laporan.",
    features: ["Landing Page", "Email Automation", "Google Analytics", "Conversion Rate"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    color: "#f0a500",
    title: "Data & Dashboard",
    desc: "Dashboard analitik bisnis real-time, integrasi multi-sumber data, visualisasi interaktif untuk pengambilan keputusan.",
    features: ["BI Dashboard", "Data Pipeline", "Real-time Chart", "Export Report"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 24px", background: "#f8fafc", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.4 }} className="dot-pattern" />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            LAYANAN KAMI
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#020b1a", marginBottom: 16 }}>
            Solusi Digital <span className="gradient-text">Lengkap</span> untuk Bisnis Anda
          </h2>
          <p style={{ color: "#475569", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Dari desain hingga deployment, kami hadir sebagai mitra teknologi terpercaya untuk setiap tahap perjalanan digital bisnis Anda.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="card-hover" style={{
              background: "white",
              borderRadius: 20,
              padding: 28,
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}>
              <div style={{
                width: 56, height: 56,
                borderRadius: 14,
                background: `${s.color}14`,
                border: `1px solid ${s.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: s.color,
                marginBottom: 20,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700, color: "#020b1a", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.features.map((f) => (
                  <span key={f} style={{
                    background: `${s.color}10`,
                    color: s.color,
                    border: `1px solid ${s.color}20`,
                    borderRadius: 100,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 600,
                  }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
