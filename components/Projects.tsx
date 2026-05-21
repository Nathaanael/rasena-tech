"use client";

import type { ReactNode } from "react";

const projects = [
  {
    title: "SiMAK – Sistem Manajemen Akademik",
    category: "Web App",
    tags: ["Next.js", "Laravel", "MySQL"],
    desc: "Platform akademik terpadu untuk perguruan tinggi, mencakup KRS online, absensi digital, nilai, dan jadwal kuliah.",
    color: "#1a6fd4",
    year: "2024",
  },
  {
    title: "TokoKu E-Commerce Platform",
    category: "E-Commerce",
    tags: ["React", "Node.js", "PostgreSQL"],
    desc: "Marketplace multi-vendor dengan fitur pembayaran gateway terintegrasi, manajemen stok, dan dashboard penjual.",
    color: "#8b5cf6",
    year: "2024",
  },
  {
    title: "FinDash – Dashboard Keuangan",
    category: "Dashboard",
    tags: ["React", "D3.js", "Python"],
    desc: "Dashboard analitik keuangan perusahaan dengan visualisasi real-time, forecast, dan laporan otomatis.",
    color: "#10b981",
    year: "2024",
  },
  {
    title: "RajaKlinik – Sistem Klinik Digital",
    category: "Web App",
    tags: ["Vue.js", "Laravel", "Redis"],
    desc: "Sistem informasi manajemen klinik: rekam medis, antrian digital, resep, billing, dan laporan dokter.",
    color: "#f97316",
    year: "2024",
  },
  {
    title: "OCR Dokumen Otomatis",
    category: "AI & Automation",
    tags: ["Python", "Tesseract", "FastAPI"],
    desc: "Sistem ekstraksi teks otomatis dari dokumen scan dan foto, terintegrasi langsung ke sistem web klien.",
    color: "#0ea5e9",
    year: "2024",
  },
  {
    title: "ChatBot Layanan Pelanggan",
    category: "AI & Automation",
    tags: ["LLM", "Node.js", "WebSocket"],
    desc: "Chatbot berbasis AI yang diintegrasikan ke website untuk menjawab pertanyaan pelanggan secara otomatis 24/7.",
    color: "#6366f1",
    year: "2024",
  },
  {
    title: "Recommendation Engine",
    category: "AI & Automation",
    tags: ["Python", "ML", "React"],
    desc: "Sistem rekomendasi produk berbasis perilaku pengguna yang ditanamkan langsung di website klien.",
    color: "#ec4899",
    year: "2024",
  },
  {
    title: "Properti.id Landing Page",
    category: "Landing Page",
    tags: ["Next.js", "Tailwind", "Framer"],
    desc: "Landing page developer properti premium dengan kalkulator KPR dan integrasi WhatsApp CRM.",
    color: "#f0a500",
    year: "2023",
  },
];

const iconMap: Record<string, ReactNode> = {
  "Web App": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>,
  "E-Commerce": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>,
  "Dashboard": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  "AI & Automation": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 2a4 4 0 014 4v1h1a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1V6a4 4 0 014-4z"/><circle cx="9" cy="13" r="1" fill="currentColor"/><circle cx="15" cy="13" r="1" fill="currentColor"/><path d="M9 17s1 1 3 1 3-1 3-1"/></svg>,
  "Landing Page": <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: "#f0f4fa" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div className="section-tag">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
            PORTOFOLIO
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800, color: "#0f1c2e", lineHeight: 1.2,
            }}>
              Proyek yang Telah<br />Kami <span style={{ color: "#1a6fd4" }}>Bangun</span>
            </h2>
            <p style={{
              color: "#64748b", fontSize: 15, maxWidth: 380,
              lineHeight: 1.7, fontFamily: "'Sora', sans-serif",
            }}>
              Dari web app hingga solusi AI — setiap proyek dirancang untuk memberikan dampak nyata bagi bisnis klien.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }} className="bento-grid">

          {projects.map((p, i) => {
            // Alternating wide/narrow: 0,3,4,7 → span 7; others → span 5
            const wide = [0, 3, 4, 7].includes(i);
            return (
              <div
                key={i}
                style={{
                  gridColumn: `span ${wide ? 7 : 5}`,
                  background: "white",
                  borderRadius: 18,
                  padding: "28px 28px 24px",
                  border: "1.5px solid #e8edf4",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(15,28,46,0.09)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${p.color}15`,
                    color: p.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {iconMap[p.category]}
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: "#94a3b8", letterSpacing: "0.5px",
                    fontFamily: "'Sora', sans-serif",
                  }}>
                    {p.year}
                  </span>
                </div>

                {/* Category */}
                <div>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: p.color, letterSpacing: "0.5px",
                    fontFamily: "'Sora', sans-serif",
                    textTransform: "uppercase",
                  }}>
                    {p.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: wide ? 17 : 15,
                  fontWeight: 700, color: "#0f1c2e",
                  lineHeight: 1.35, margin: 0,
                }}>
                  {p.title}
                </h3>

                {/* Desc */}
                <p style={{
                  color: "#64748b", fontSize: 13,
                  lineHeight: 1.65, margin: 0,
                  fontFamily: "'Sora', sans-serif",
                  flex: 1,
                }}>
                  {p.desc}
                </p>

                {/* Divider */}
                <div style={{ height: 1, background: "#f1f5f9" }} />

                {/* Tags */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      background: "#f1f5f9", color: "#475569",
                      borderRadius: 6, padding: "3px 10px",
                      fontSize: 11, fontWeight: 600,
                      fontFamily: "'Sora', sans-serif",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1.5px solid #1a6fd4", color: "#1a6fd4",
            padding: "12px 28px", borderRadius: 10,
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600, fontSize: 14,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "#1a6fd4";
            (e.currentTarget as HTMLElement).style.color = "white";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#1a6fd4";
          }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
            Diskusikan Proyek Anda
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .bento-grid > div { grid-column: span 1 !important; }
        }
        @media (max-width: 580px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </section>
  );
}
