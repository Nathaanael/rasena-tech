"use client";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, PT Maju Bersama",
    text: "Rasena Tech benar-benar memahami kebutuhan bisnis kami. Sistem ERP yang mereka bangun berhasil memangkas waktu operasional kami hingga 60%. Komunikasi lancar, delivery tepat waktu!",
    rating: 5,
    project: "ERP System",
    color: "#1a6fd4",
    initials: "BS",
  },
  {
    name: "Sari Dewi",
    role: "Founder, Toko Online Nusantara",
    text: "Platform e-commerce kami sekarang bisa handle ribuan transaksi per hari tanpa masalah. Tim Rasena Tech sangat profesional dan sabar dalam menjelaskan setiap proses.",
    rating: 5,
    project: "E-Commerce Platform",
    color: "#8b5cf6",
    initials: "SD",
  },
  {
    name: "Ahmad Rizky",
    role: "Director, Klinik Sehat Bersama",
    text: "Aplikasi manajemen klinik dari Rasena Tech luar biasa. Antrian digital, rekam medis elektronik, semua dalam satu sistem. Pasien pun puas karena tidak perlu antri lama lagi.",
    rating: 5,
    project: "Clinic Management App",
    color: "#0ea5e9",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "100px 24px", background: "linear-gradient(160deg, #020b1a, #041529 50%, #020b1a)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag" style={{ color: "#38bdf8", borderColor: "rgba(59,143,232,0.3)", background: "rgba(26,111,212,0.12)" }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            TESTIMONI
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white", marginBottom: 16 }}>
            Kata Mereka tentang <span className="gradient-text">Rasena Tech</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="glass card-hover" style={{ borderRadius: 20, padding: 28 }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
                {Array(t.rating).fill(0).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f0a500"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.color}44, ${t.color}22)`,
                  border: `2px solid ${t.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Sora', sans-serif", fontWeight: 700, color: t.color, fontSize: 14,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>{t.role}</div>
                </div>
                <div style={{ marginLeft: "auto", background: `${t.color}20`, border: `1px solid ${t.color}30`, borderRadius: 100, padding: "3px 10px", fontSize: 10, color: t.color, fontWeight: 600 }}>
                  {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 580px) and (max-width: 900px) { .testi-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
