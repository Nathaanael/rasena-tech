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
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(26,111,212,0.07) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "100px 48px 80px", width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>

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
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
          color: "#0f1c2e",
          lineHeight: 1.2,
          marginBottom: 22,
          letterSpacing: "-0.01em",
        }}>
          Solusi Digital untuk{" "}
          <span style={{ color: "#1a6fd4" }}>Bisnis yang Lebih Cerdas</span>
        </h1>

        {/* Desc */}
        <p style={{
          fontSize: 16,
          color: "#4a5568",
          lineHeight: 1.85,
          marginBottom: 36,
          maxWidth: 520,
          margin: "0 auto 36px",
          fontFamily: "'Sora', sans-serif",
        }}>
          Kami mentransformasi kebutuhan bisnis Anda ke dalam sistem website yang kuat, aman, dan terintegrasi. Solusi software custom berbasis web untuk memodernisasi cara kerja perusahaan Anda.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56, justifyContent: "center" }}>
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
          }}>
            Pelajari Fitur
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: 0, flexWrap: "wrap",
          paddingTop: 32, borderTop: "1px solid rgba(15,28,46,0.1)",
          justifyContent: "center",
        }}>
          {[
            { num: "5+", label: "Proyek Selesai" },
            { num: "100%", label: "Kepuasan Klien" },
            { num: "24/7", label: "Support Aktif" },
            { num: "On-Time", label: "Delivery" },
          ].map((s, i, arr) => (
            <div key={s.label} style={{
              padding: "0 32px",
              borderRight: i < arr.length - 1 ? "1px solid rgba(15,28,46,0.1)" : "none",
            }}>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 800, color: "#0f1c2e", lineHeight: 1.2 }}>{s.num}</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 12, color: "#718096", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}