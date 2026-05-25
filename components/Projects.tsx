"use client";

import { useState, useRef, useCallback, type ReactNode } from "react";

const projects = [
  {
    title: "Overtime System - Polytron",
    category: "Web App",
    tags: ["Next.js", "API", "MySQL"],
    desc: "Platform manajemen lembur untuk Polytron dengan integrasi API dan database MySQL untuk manajemen data lembur dan hutang lembur.",
    color: "#1a6fd4",
    year: "2025",
    images: [
      "/nathan/polytron/pol1.png",
      "/nathan/polytron/pol2.png",
    ],
  },
  {
    title: "EasyTour - Rekomendasi Pariwisata",
    category: "Mobile App",
    tags: ["Kotlin", "Firebase", "Machine Learning", "API"],
    desc: "Aplikasi mobile rekomendasi destinasi wisata berbasis lokasi dengan fitur personalisasi menggunakan machine learning dan integrasi API untuk data tempat wisata.",
    color: "#8b5cf6",
    year: "2024",
    images: [
      "/nathan/easytour/et1.png",
      "/nathan/easytour/et2.png",
    ],
  },
  {
    title: "Sistem Manajemen Pembayaran Air Artesis - Gunungpati",
    category: "Web App",
    tags: ["Laravel", "MySQL"],
    desc: "Sistem manajemen pembayaran air artesis di wilayah Gunungpati dengan integrasi database MySQL.",
    color: "#10b981",
    year: "2025",
    images: [
      "/nathan/gunungpati/gp1.png",
      "/nathan/gunungpati/gp2.jpg",
    ],
  },
  {
    title: "Company Profile - PT. Dua Cendrawasih Perkasa",
    category: "Web App",
    tags: ["Laravel", "MySQL"],
    desc: "Profile perusahaan untuk PT. Dua Cendrawasih Perkasa.",
    color: "#f97316",
    year: "2024",
    images: [
      "/nathan/duacendrawasih/dc1.png",
      "/nathan/duacendrawasih/dc2.png",
    ],
  },
  {
    title: "OCR Dokumen Otomatis",
    category: "AI & Automation",
    tags: ["Python", "Tesseract", "FastAPI"],
    desc: "Sistem ekstraksi teks otomatis dari dokumen scan dan foto, terintegrasi langsung ke sistem web klien.",
    color: "#0ea5e9",
    year: "2024",
    images: [
      "https://placehold.co/800x450/0ea5e9/ffffff?text=OCR+Upload",
      "https://placehold.co/800x450/0284c7/ffffff?text=OCR+Hasil+Ekstraksi",
    ],
  },
  {
    title: "ChatBot Layanan Pelanggan",
    category: "AI & Automation",
    tags: ["LLM", "Node.js", "WebSocket"],
    desc: "Chatbot berbasis AI yang diintegrasikan ke website untuk menjawab pertanyaan pelanggan secara otomatis 24/7.",
    color: "#6366f1",
    year: "2024",
    images: [
      "https://placehold.co/800x450/6366f1/ffffff?text=ChatBot+Interface",
      "https://placehold.co/800x450/4f46e5/ffffff?text=ChatBot+Admin+Panel",
      "https://placehold.co/800x450/3730a3/ffffff?text=ChatBot+Analytics",
    ],
  },
  {
    title: "Recommendation Engine",
    category: "AI & Automation",
    tags: ["Python", "ML", "React"],
    desc: "Sistem rekomendasi produk berbasis perilaku pengguna yang ditanamkan langsung di website klien.",
    color: "#ec4899",
    year: "2024",
    images: [
      "https://placehold.co/800x450/ec4899/ffffff?text=Rekomendasi+Produk",
      "https://placehold.co/800x450/be185d/ffffff?text=Model+Training",
    ],
  },
  {
    title: "Properti.id Landing Page",
    category: "Landing Page",
    tags: ["Next.js", "Tailwind", "Framer"],
    desc: "Landing page developer properti premium dengan kalkulator KPR dan integrasi WhatsApp CRM.",
    color: "#f0a500",
    year: "2023",
    images: [
      "https://placehold.co/800x450/f0a500/ffffff?text=Properti+Hero",
      "https://placehold.co/800x450/c58400/ffffff?text=Kalkulator+KPR",
    ],
  },
];

const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(projects.length / PER_PAGE);

const categoryIcons: Record<string, ReactNode> = {
  "Web App": (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 21V9" />
    </svg>
  ),
  "E-Commerce": (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  "Dashboard": (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  "AI & Automation": (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 2a4 4 0 014 4v1h1a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1V6a4 4 0 014-4z" />
      <circle cx="9" cy="13" r="1" fill="currentColor" /><circle cx="15" cy="13" r="1" fill="currentColor" />
      <path d="M9 17s1 1 3 1 3-1 3-1" />
    </svg>
  ),
  "Landing Page": (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  ),
  "Mobile App": (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 6h6" strokeLinecap="round" />
    </svg>
  ),
};

function ImageGallery({ images, color }: { images: string[]; color: string }) {
  const [cur, setCur] = useState(0);
  const total = images.length;

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCur((c) => (c - 1 + total) % total); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCur((c) => (c + 1) % total); };

  return (
    <div style={{ position: "relative", borderRadius: "12px 12px 0 0", overflow: "hidden", aspectRatio: "16/9", background: "#f8fafc", flexShrink: 0 }}>
      <img src={images[cur]} alt={`Preview ${cur + 1}`} draggable={false}
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", transition: "opacity 0.2s" }} />

      {total > 1 && (
        <>
          <button onClick={prev} aria-label="Sebelumnya" style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(15,28,46,0.5)", border: "none", borderRadius: 6, width: 26, height: 26, cursor: "pointer", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6" /></svg>
          </button>
          <button onClick={next} aria-label="Berikutnya" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(15,28,46,0.5)", border: "none", borderRadius: 6, width: 26, height: 26, cursor: "pointer", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6" /></svg>
          </button>
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4 }}>
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCur(i); }}
                style={{ width: i === cur ? 14 : 5, height: 5, borderRadius: 3, border: "none", padding: 0, cursor: "pointer", background: i === cur ? color : "rgba(255,255,255,0.5)", transition: "all 0.2s" }} />
            ))}
          </div>
        </>
      )}

      <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(15,28,46,0.6)", color: "white", fontSize: 10, fontWeight: 700, fontFamily: "'Sora', sans-serif", padding: "2px 7px", borderRadius: 4 }}>
        {cur + 1}/{total}
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: typeof projects[0] }) {
  return (
    <div style={{ background: "white", borderRadius: 18, border: "1.5px solid #e8edf4", display: "flex", flexDirection: "column", overflow: "hidden", flex: 1, minWidth: 0, transition: "transform 0.2s, box-shadow 0.2s" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(15,28,46,0.10)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
    >
      <ImageGallery images={p.images} color={p.color} />
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: `${p.color}18`, color: p.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {categoryIcons[p.category]}
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: "0.5px", fontFamily: "'Sora', sans-serif", textTransform: "uppercase" }}>
              {p.category}
            </span>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.5px", fontFamily: "'Sora', sans-serif" }}>{p.year}</span>
        </div>
        <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 700, color: "#0f1c2e", lineHeight: 1.35, margin: 0 }}>{p.title}</h3>
        <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7, margin: 0, fontFamily: "'Sora', sans-serif", flex: 1 }}>{p.desc}</p>
        <div style={{ height: 1, background: "#f1f5f9" }} />
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {p.tags.map((t) => (
            <span key={t} style={{ background: "#f1f5f9", color: "#475569", borderRadius: 6, padding: "3px 10px", fontSize: 11, fontWeight: 600, fontFamily: "'Sora', sans-serif" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((next: number) => {
    if (next === page) return;
    const dir = next > page ? "left" : "right";
    setAnimDir(dir);
    setVisible(false);
    setTimeout(() => {
      setPage(next);
      setVisible(true);
      setAnimDir(null);
    }, 220);
  }, [page]);

  const slice = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const slideStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${slice.length}, 1fr)`,
    gap: 20,
    transition: "opacity 0.22s ease, transform 0.22s ease",
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateX(0)"
      : animDir === "left"
        ? "translateX(-32px)"
        : "translateX(32px)",
  };

  return (
    <section id="projects" style={{ padding: "100px 24px", background: "#f0f4fa" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="section-tag" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            PORTOFOLIO
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0f1c2e", lineHeight: 1.2, margin: 0 }}>
              Proyek yang Telah<br />Kami <span style={{ color: "#1a6fd4" }}>Bangun</span>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={() => goTo(page - 1)} disabled={page === 0} aria-label="Slide sebelumnya"
                style={{ width: 42, height: 42, borderRadius: 10, border: "1.5px solid #dde4ef", background: "white", cursor: page === 0 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: page === 0 ? "#c0ccd8" : "#0f1c2e", transition: "all 0.2s" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6" /></svg>
              </button>
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 13, fontWeight: 600, color: "#64748b", minWidth: 44, textAlign: "center" }}>
                {page + 1} / {TOTAL_PAGES}
              </span>
              <button onClick={() => goTo(page + 1)} disabled={page === TOTAL_PAGES - 1} aria-label="Slide berikutnya"
                style={{ width: 42, height: 42, borderRadius: 10, border: "1.5px solid #dde4ef", background: "white", cursor: page === TOTAL_PAGES - 1 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: page === TOTAL_PAGES - 1 ? "#c0ccd8" : "#0f1c2e", transition: "all 0.2s" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div style={slideStyle}>
          {slice.map((p, i) => <ProjectCard key={page * PER_PAGE + i} p={p} />)}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 32 }}>
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Halaman ${i + 1}`}
              style={{ width: i === page ? 24 : 7, height: 7, borderRadius: 4, border: "none", padding: 0, cursor: "pointer", background: i === page ? "#1a6fd4" : "#c8d4e3", transition: "all 0.25s ease" }} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1.5px solid #1a6fd4", color: "#1a6fd4", padding: "12px 28px", borderRadius: 10, fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a6fd4"; (e.currentTarget as HTMLElement).style.color = "white"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#1a6fd4"; }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
            Diskusikan Proyek Anda
          </a>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          #projects [style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          #projects [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </section>
  );
}