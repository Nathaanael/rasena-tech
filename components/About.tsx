"use client";

const values = [
  {
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    title: "Kualitas Tanpa Kompromi",
    desc: "Setiap baris kode kami tulis dengan standar terbaik. QA testing ketat sebelum setiap delivery.",
  },
  {
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    title: "Delivery Tepat Waktu",
    desc: "Kami menghargai waktu Anda. Sprint terstruktur dan komunikasi transparan memastikan proyek selesai sesuai jadwal.",
  },
  {
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    title: "Kolaborasi Aktif",
    desc: "Klien dilibatkan di setiap tahap. Daily update, demo mingguan, dan feedback loop yang responsif.",
  },
  {
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Keamanan & Skalabilitas",
    desc: "Arsitektur yang aman dan scalable sejak awal. Siap tumbuh bersama bisnis Anda tanpa refactor besar.",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "linear-gradient(160deg, #020b1a 0%, #041529 50%, #020b1a 100%)", position: "relative", overflow: "hidden" }}>
      {/* Decorative */}
      <div style={{ position: "absolute", top: "20%", right: 0, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,111,212,0.1) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: "10%", left: 0, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="about-grid">
          {/* Left */}
          <div>
            <div className="section-tag" style={{ color: "#38bdf8", borderColor: "rgba(59,143,232,0.3)", background: "rgba(26,111,212,0.12)" }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              TENTANG RASENA TECH
            </div>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "white", marginBottom: 20, lineHeight: 1.2 }}>
              Kami Bukan Sekadar<br/><span className="gradient-text">Vendor IT</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Rasena Tech adalah software house yang didirikan oleh praktisi teknologi dengan semangat membantu bisnis Indonesia bertransformasi secara digital. Kami percaya bahwa teknologi yang tepat adalah investasi, bukan sekadar pengeluaran.
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              Dengan pendekatan <strong style={{ color: "rgba(255,255,255,0.8)" }}>agile</strong> dan komunikasi yang terbuka, kami memastikan setiap solusi yang kami bangun benar-benar menjawab kebutuhan spesifik bisnis Anda — bukan template yang dipaksakan.
            </p>

            {/* Process steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {["Discovery & Analisis Kebutuhan", "Desain UI/UX & Prototype", "Development & Testing", "Launch & Support Berkelanjutan"].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "linear-gradient(135deg,#1a6fd4,#0ea5e9)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: "white", flexShrink: 0,
                  }}>{i + 1}</div>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500 }}>{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Values */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {values.map((v, i) => (
              <div key={i} className="glass card-hover" style={{
                borderRadius: 18,
                padding: 24,
                transition: "all 0.3s ease",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 11,
                  background: "linear-gradient(135deg,rgba(26,111,212,0.3),rgba(14,165,233,0.2))",
                  border: "1px solid rgba(59,143,232,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#38bdf8",
                  marginBottom: 14,
                }}>
                  {v.icon}
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 700, color: "white", marginBottom: 8 }}>{v.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
