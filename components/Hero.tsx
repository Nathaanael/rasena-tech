"use client";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: "#f0f4fa",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Subtle background shape */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 70% 50%, rgba(26,111,212,0.07) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 48px 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(26,111,212,0.08)",
              border: "1px solid rgba(26,111,212,0.2)",
              borderRadius: 100, padding: "5px 14px", marginBottom: 28,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1a6fd4" }} />
              <span style={{ color: "#1a6fd4", fontSize: 11, fontWeight: 700, letterSpacing: "1.2px", fontFamily: "'Sora', sans-serif" }}>
                SOFTWARE HOUSE INDONESIA
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              color: "#0f1c2e",
              lineHeight: 1.2,
              marginBottom: 22,
              letterSpacing: "-0.01em",
            }}>
              Solusi Digital untuk{" "}
              <span style={{ color: "#1a6fd4" }}>Bisnis yang</span>
              <br />
              <span style={{ color: "#1a6fd4" }}>Lebih Cerdas</span>
            </h1>

            {/* Desc */}
            <p style={{
              fontSize: 16,
              color: "#4a5568",
              lineHeight: 1.85,
              marginBottom: 36,
              maxWidth: 460,
              fontFamily: "'Sora', sans-serif",
            }}>
              Kami mentransformasi kebutuhan bisnis Anda ke dalam sistem website yang kuat, aman, dan terintegrasi. Solusi software custom berbasis web untuk memodernisasi cara kerja perusahaan Anda.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#1a6fd4", color: "white",
                padding: "13px 26px", borderRadius: 10,
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600, fontSize: 14,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#155cad")}
                onMouseLeave={e => (e.currentTarget.style.background = "#1a6fd4")}
              >
                Konsultasi Gratis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#projects" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "white", color: "#0f1c2e",
                padding: "13px 26px", borderRadius: 10,
                border: "1.5px solid rgba(15,28,46,0.15)",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600, fontSize: 14,
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}>
                Pelajari Fitur
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: "flex", gap: 36, flexWrap: "wrap",
              paddingTop: 32, borderTop: "1px solid rgba(15,28,46,0.1)",
            }}>
              {[
                { num: "5+", label: "Proyek Selesai" },
                { num: "100%", label: "Kepuasan Klien" },
                { num: "24/7", label: "Support Aktif" },
                { num: "On-Time", label: "Delivery" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 800, color: "#0f1c2e", lineHeight: 1.2 }}>{s.num}</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: "#718096", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Dashboard Mockup */}
          <div className="hero-visual" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{
              background: "white",
              borderRadius: 18,
              boxShadow: "0 4px 40px rgba(15,28,46,0.10), 0 1px 4px rgba(15,28,46,0.06)",
              width: 380,
              overflow: "hidden",
              border: "1px solid rgba(15,28,46,0.07)",
            }}>
              {/* Browser chrome */}
              <div style={{ background: "#1e2d3d", padding: "10px 16px", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f87171", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fbbf24", display: "inline-block" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                <span style={{ flex: 1, textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: 11, fontFamily: "'Sora', sans-serif", letterSpacing: "0.5px" }}>
                  DASHBOARD ANALYTICS
                </span>
              </div>

              {/* Dashboard body */}
              <div style={{ padding: "20px 20px 24px" }}>
                {/* Metric row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
                  {[
                    { label: "Proyek Aktif", val: "30+", color: "#1a6fd4" },
                    { label: "Menunggu Review", val: "8", color: "#f97316" },
                    { label: "Total Klien", val: "Rp 4.2M", color: "#0f1c2e" },
                  ].map(m => (
                    <div key={m.label} style={{
                      background: "#f8fafc",
                      borderRadius: 10,
                      padding: "12px 10px",
                      border: "1px solid rgba(15,28,46,0.06)",
                    }}>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 700, color: m.color }}>{m.val}</div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, color: "#94a3b8", marginTop: 2, lineHeight: 1.3 }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pipeline section */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 700, color: "#0f1c2e", letterSpacing: "0.5px" }}>
                      PIPELINE AKTIF
                    </span>
                    <span style={{ background: "#dcfce7", color: "#16a34a", fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 20, fontFamily: "'Sora', sans-serif" }}>
                      Live
                    </span>
                  </div>

                  {[
                    { name: "Approach", amount: "Rp 250 Jt", tag: "Analisis", tagBg: "#eff6ff", tagColor: "#1a6fd4", barColor: "#1a6fd4", barW: "72%" },
                    { name: "Review Kepala Cabang", amount: "Rp 500 Jt", tag: "Komite", tagBg: "#fff7ed", tagColor: "#ea580c", barColor: "#f97316", barW: "55%" },
                    { name: "Analis Review", amount: "Rp 75 Jt", tag: "Approved", tagBg: "#f0fdf4", tagColor: "#16a34a", barColor: "#22c55e", barW: "88%" },
                    { name: "Akses Direktur", amount: "Rp 1.2 M", tag: "Direktur", tagBg: "#fdf4ff", tagColor: "#9333ea", barColor: "#a855f7", barW: "40%" },
                  ].map((row) => (
                    <div key={row.name} style={{ marginBottom: 11 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                        <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: "#374151" }}>{row.name}</span>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 600, color: "#0f1c2e" }}>{row.amount}</span>
                          <span style={{ background: row.tagBg, color: row.tagColor, fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 20, fontFamily: "'Sora', sans-serif" }}>
                            {row.tag}
                          </span>
                        </div>
                      </div>
                      <div style={{ height: 5, background: "#f1f5f9", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: row.barW, background: row.barColor, borderRadius: 3, transition: "width 0.6s ease" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div style={{
              position: "absolute", top: -16, right: -16,
              background: "white",
              borderRadius: 14,
              padding: "11px 16px",
              boxShadow: "0 4px 20px rgba(15,28,46,0.1)",
              border: "1px solid rgba(15,28,46,0.06)",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1a6fd4" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 700, color: "#0f1c2e" }}>+147%</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, color: "#94a3b8" }}>Efisiensi Proses</div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div style={{
              position: "absolute", bottom: -14, left: -20,
              background: "white",
              borderRadius: 14,
              padding: "11px 16px",
              boxShadow: "0 4px 20px rgba(15,28,46,0.1)",
              border: "1px solid rgba(15,28,46,0.06)",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, fontWeight: 700, color: "#0f1c2e" }}>Kredit Disetujui</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 10, color: "#94a3b8" }}>Rp 500 Jt — PT. Maju Jaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
