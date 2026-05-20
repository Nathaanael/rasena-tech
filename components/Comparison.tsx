"use client";

const rows = [
  {
    aspek: "Pencatatan Data",
    before: "Manual di Excel / kertas, rawan hilang",
    after: "Otomatis tersimpan di database terpusat",
  },
  {
    aspek: "Pembuatan Laporan",
    before: "Rekap manual, berjam-jam tiap bulan",
    after: "Generate otomatis real-time, tinggal ekspor",
  },
  {
    aspek: "Koordinasi Tim",
    before: "Info tersebar di WA, email, catatan pribadi",
    after: "Semua terpusat dalam satu sistem terstruktur",
  },
  {
    aspek: "Pelayanan Pelanggan",
    before: "Respons lambat, cek data manual",
    after: "Staff akses data instan, respons cepat & akurat",
  },
  {
    aspek: "Keamanan Data",
    before: "File lokal, tidak ter-backup, mudah hilang",
    after: "Tersimpan aman di cloud dengan backup otomatis",
  },
  {
    aspek: "Skalabilitas",
    before: "Makin besar bisnis, makin kacau prosesnya",
    after: "Sistem tumbuh seiring bisnis Anda berkembang",
  },
];

export default function Comparison() {
  return (
    <section id="comparison" style={{
      padding: "100px 24px",
      background: "linear-gradient(160deg, #020b1a 0%, #041529 50%, #020b1a 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "30%", right: 0, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,111,212,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="section-tag" style={{ color: "#38bdf8", borderColor: "rgba(59,143,232,0.3)", background: "rgba(26,111,212,0.12)" }}>
            BENCHMARKING
          </div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: 16,
          }}>
            Bisnis Anda Sebelum &{" "}
            <span style={{ color: "#38bdf8" }}>Sesudah Sistem</span>
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "rgba(255,255,255,0.5)", fontSize: 15,
            maxWidth: 500, margin: "0 auto", lineHeight: 1.7,
          }}>
            Dari proses manual yang memakan waktu menuju sistem digital yang efisien, transparan, dan berbasis data.
          </p>
        </div>

        {/* Table */}
        <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>

          {/* Table header */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr",
            background: "rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ padding: "16px 24px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}>ASPEK</span>
            </div>
            <div style={{ padding: "16px 24px", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}>TANPA SISTEM</span>
            </div>
            <div style={{ padding: "16px 24px", borderLeft: "1px solid rgba(255,255,255,0.06)", background: "rgba(26,111,212,0.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8" }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#38bdf8", letterSpacing: "0.5px" }}>DENGAN SISTEM ✦</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr",
              borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >
              {/* Aspek */}
              <div style={{ padding: "18px 24px", display: "flex", alignItems: "center" }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 14, fontWeight: 700, color: "white",
                }}>
                  {i + 1}. {row.aspek}
                </span>
              </div>

              {/* Before */}
              <div style={{ padding: "18px 24px", borderLeft: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="14" height="14" fill="none" stroke="#ef4444" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><path d="M18 6L6 18M6 6l12 12"/></svg>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.5,
                }}>
                  {row.before}
                </span>
              </div>

              {/* After */}
              <div style={{ padding: "18px 24px", borderLeft: "1px solid rgba(26,111,212,0.2)", background: "rgba(26,111,212,0.07)", display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="14" height="14" fill="none" stroke="#38bdf8" strokeWidth="2.5" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><path d="M20 6L9 17l-5-5"/></svg>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 13, fontWeight: 600, color: "white", lineHeight: 1.5,
                }}>
                  {row.after}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}