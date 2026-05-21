"use client";

const steps = [
  { num: "01", title: "Konsultasi & Discovery", desc: "Kami dengarkan kebutuhan bisnis Anda secara mendalam — bukan sekadar obrolan, tapi analisis nyata." },
  { num: "02", title: "Desain & Prototype", desc: "Tim kami langsung buat prototype yang bisa Anda lihat dan komentari sebelum satu baris kode ditulis." },
  { num: "03", title: "Development & Testing", desc: "Dibangun dengan standar produksi, QA ketat, dan laporan progress mingguan yang transparan." },
  { num: "04", title: "Launch & Support", desc: "Kami tidak hilang setelah launch. Support aktif dan iterasi berkelanjutan sesuai kebutuhan bisnis Anda." },
];

const comparisons = [
  { label: "Konsultasi awal", other: "Ngobrol tanpa hasil nyata", us: "Discovery & analisis terstruktur" },
  { label: "Tim yang handle", other: "Ditangani tim sales", us: "Langsung developer & analis" },
  { label: "Transparansi proses", other: "Update seadanya", us: "Laporan & demo mingguan" },
  { label: "Deliverable awal", other: "Tidak ada", us: "Prototype sebelum kontrak" },
  { label: "Setelah launch", other: "Proyek selesai, tim hilang", us: "Support & iterasi berkelanjutan" },
  { label: "Komitmen awal", other: "Push langsung ke kontrak", us: "Zero komitmen di awal" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,111,212,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-tag">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            KENAPA PILIH KAMI
          </div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, color: "#0f1c2e", lineHeight: 1.15, marginBottom: 0,
          }}>
            Konsultasi Gratis —<br />
            <span style={{ color: "#1a6fd4" }}>Langsung Dikerjakan, Bukan Sekadar Obrolan</span>
          </h2>
        </div>

        {/* Two column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="about-grid">

          {/* LEFT — Steps */}
          <div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 16, color: "#4a5568", lineHeight: 1.8, marginBottom: 40,
            }}>
              Banyak yang bilang <em>"konsultasi gratis"</em> — tapi hasilnya abstrak. Di Rasena Tech, setiap sesi konsultasi menghasilkan sesuatu yang nyata: analisis kebutuhan, alur sistem, dan gambaran solusi yang bisa langsung Anda evaluasi.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 20, position: "relative" }}>
                  {/* Line connector */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: "#1a6fd4",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 12, fontWeight: 800, color: "white",
                      letterSpacing: "0.5px",
                    }}>{s.num}</div>
                    {i < steps.length - 1 && (
                      <div style={{ width: 1, flex: 1, minHeight: 24, background: "rgba(26,111,212,0.15)", margin: "4px 0" }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < steps.length - 1 ? 28 : 0 }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 700, color: "#0f1c2e", marginBottom: 6 }}>{s.title}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Comparison table */}
          <div>
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1.5px solid #e2e8f0" }}>

              {/* Table header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.1fr", background: "#f1f5f9" }}>
                <div style={{ padding: "13px 18px" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.5px" }}>ASPEK</span>
                </div>
                <div style={{ padding: "13px 18px", borderLeft: "1px solid #e2e8f0" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.5px" }}>SOFTWARE HOUSE LAIN</span>
                </div>
                <div style={{ padding: "13px 18px", borderLeft: "1px solid #e2e8f0", background: "#1a6fd4" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "white" }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "white", letterSpacing: "0.5px" }}>RASENA TECH ✦</span>
                  </div>
                </div>
              </div>

              {/* Rows */}
              {comparisons.map((row, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1.1fr",
                  borderTop: "1px solid #f1f5f9",
                  background: "white",
                }}>
                  <div style={{ padding: "14px 18px", display: "flex", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#0f1c2e" }}>{row.label}</span>
                  </div>
                  <div style={{ padding: "14px 18px", borderLeft: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="13" height="13" fill="none" stroke="#ef4444" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><path d="M18 6L6 18M6 6l12 12"/></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "#94a3b8", lineHeight: 1.4 }}>{row.other}</span>
                  </div>
                  <div style={{ padding: "14px 18px", borderLeft: "1px solid rgba(26,111,212,0.15)", background: "rgba(26,111,212,0.04)", display: "flex", alignItems: "center", gap: 8 }}>
                    <svg width="13" height="13" fill="none" stroke="#1a6fd4" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><path d="M20 6L9 17l-5-5"/></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#0f1c2e", lineHeight: 1.4 }}>{row.us}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA below table */}
            <a href="#contact" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              marginTop: 16,
              background: "#1a6fd4", color: "white",
              padding: "14px 28px", borderRadius: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700, fontSize: 14,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#155cad")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1a6fd4")}
            >
              Konsultasi Gratis Sekarang
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 10 }}>
              Tidak ada komitmen. Tim merespons dalam 1 hari kerja.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
      ` }} />
    </section>
  );
}