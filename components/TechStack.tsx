"use client";

const stackCategories = [
  {
    category: "AI",
    stacks: [
      { name: "OpenAI", color: "#10a37f", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M22.28 9.68c-.15-.65-.43-1.26-.8-1.8A5.25 5.25 0 0015.7 1.69a5.25 5.25 0 00-6.02.73 5.25 5.25 0 00-1.8-.8 5.25 5.25 0 00-5.78 1.12A5.25 5.25 0 001.72 9.68a5.25 5.25 0 00-.73 6.02 5.25 5.25 0 00.8 1.8 5.25 5.25 0 005.78 1.12 5.25 5.25 0 001.8.8 5.25 5.25 0 006.02-.73 5.25 5.25 0 001.8.8 5.25 5.25 0 005.78-1.12 5.25 5.25 0 001.12-5.78 5.25 5.25 0 00.73-6.02zM12 3a4 4 0 014 4H8a4 4 0 014-4zm0 18a4 4 0 01-4-4h8a4 4 0 01-4 4z"/></svg> },
      { name: "LangChain", color: "#475569", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
      { name: "Hugging Face", color: "#ffd21e", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><circle cx="12" cy="12" r="10"/><path d="M8 10a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zM8 15h8v2H8z"/></svg> }
    ]
  },
  {
    category: "Machine Learning",
    stacks: [
      { name: "TensorFlow", color: "#ff6f00", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M1.3 8.3L12 2l10.7 6.3L12 22 1.3 8.3z"/></svg> },
      { name: "PyTorch", color: "#ee4c2c", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM9 8l6 4-6 4V8z"/></svg> },
      { name: "Scikit-Learn", color: "#f7931e", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg> }
    ]
  },
  {
    category: "Web Development",
    stacks: [
      { name: "SQL", color: "#336791", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> },
      { name: "Laravel", color: "#ff2d20", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027.326.326 0 01-.068.009.336.336 0 01-.069-.009.316.316 0 01-.066-.027L.378 18.755A.378.378 0 01.19 18.43V3.576a.39.39 0 01.014-.1.354.354 0 01.028-.083l.005-.009.02-.031a.294.294 0 01.023-.025.296.296 0 01.045-.034l.029-.016 4.635-2.677a.378.378 0 01.378 0L9.93 3.3l4.553-2.626a.378.378 0 01.378 0l4.636 2.677.029.016a.296.296 0 01.045.034.296.296 0 01.023.025l.02.03.005.01a.354.354 0 01.028.083zm-.756 5.032V6.179l-1.816 1.047-2.508 1.444v4.283zm-4.701 8.2V14.38l-2.469 1.408-7.05 4.018zm-9.927-4.05l3.235-1.851L9.93 11.79v-8.2L5.38 6.257 5.38 14.457zm9.161.722l2.169-1.253 1.824-1.051V9.277l-2.507 1.445-1.486.855zm-4.323-8.9v8.178l3.236 1.85 1.485-.854V6.612l-2.508-1.443zm-4.323.1v8.2L9.174 18.1l.756-.434V9.488zm8.27 4.514l-3.234-1.851-3.236 1.851 3.236 1.85z"/></svg> },
      { name: "Node.js", color: "#339933", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2L2 7.7v8.6L12 22l10-5.7V7.7L12 2zM10 16v-6h4v6h-4z"/></svg> },
      { name: "Next.js", color: "#000000", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 13.92L10 10v6H8V8h2.32l5.36 5.92V8h2v8h-2.32z"/></svg> }
    ]
  }
];

export default function TechStack() {
  return (
    <section style={{ padding: "80px 24px", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            TEKNOLOGI
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#020b1a", marginBottom: 12 }}>
            AI, Machine Learning, & Web Development
          </h2>
          <p style={{ color: "#475569", fontSize: 15, maxWidth: 600, margin: "0 auto" }}>
            Kami mengintegrasikan teknologi terkini di bidang kecerdasan buatan, machine learning, dan pengembangan web untuk memberikan solusi terbaik.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {stackCategories.map((category, idx) => (
            <div key={idx}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#020b1a", marginBottom: 24, textAlign: "center" }}>
                {category.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
                {category.stacks.map((s, i) => (
                  <div key={i} className="card-hover" style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: 16,
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    cursor: "pointer",
                    minWidth: 160,
                  }}>
                    <div style={{ color: s.color, display: "flex", alignItems: "center" }}>{s.icon}</div>
                    <span style={{ fontWeight: 600, fontSize: 15, color: "#020b1a" }}>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
