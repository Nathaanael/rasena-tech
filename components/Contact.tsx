"use client";
import { useState } from "react";

// GANTI dengan nomor WhatsApp Anda (format: 628xxxxxxxxxx)
const WA_NUMBER = "6288806893977";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", service: "" });
  const [sent, setSent] = useState(false);

  const services = [
    "Web Development", "Mobile App", "Enterprise System",
    "UI/UX Design", "Digital Marketing Tech", "Data & Dashboard", "Lainnya",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    if (!form.name || !form.phone || !form.email) {
      alert("Mohon isi Nama, Nomor Telepon, dan Email terlebih dahulu.");
      return;
    }
    const msg = `Halo Rasena Tech! 👋

Saya ingin berkonsultasi mengenai proyek digital.

*Data Saya:*
• Nama: ${form.name}
• Nomor HP: ${form.phone}
• Email: ${form.email}

*Pesan:*
${form.message || "Saya tertarik untuk berdiskusi lebih lanjut."}

Mohon informasinya. Terima kasih!`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#f8fafc", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.3 }} className="dot-pattern" />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.3 10.82 19.79 19.79 0 01.22 2.18 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            HUBUNGI KAMI
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#020b1a", marginBottom: 16 }}>
            Siap Memulai <span className="gradient-text">Proyek Anda?</span>
          </h2>
          <p style={{ color: "#475569", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan Anda dan kami akan berikan solusi terbaik.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 40, alignItems: "start" }} className="contact-grid">
          {/* Left info */}
          <div>
            <div style={{ background: "linear-gradient(160deg,#020b1a,#041529)", borderRadius: 24, padding: 36, color: "white" }}>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Informasi Kontak</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 32 }}>Kami siap menjawab pertanyaan Anda kapan saja.</p>

              {[
                {
                  icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.3 10.82 19.79 19.79 0 01.22 2.18 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  label: "WhatsApp", value: "+62 888-0689-3977", color: "#25d366",
                },
                {
                  icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  label: "Email", value: "halo@rasenatech.id", color: "#1a6fd4",
                },
                {
                  icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  label: "Lokasi", value: "Semarang, Jawa Tengah", color: "#0ea5e9",
                },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 24 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.color}20`, border: `1px solid ${c.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: 14, color: "white", fontWeight: 600 }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, marginTop: 8 }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>Jam Operasional</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Senin – Jumat: 08.00 – 17.00 WIB</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Sabtu: 09.00 – 13.00 WIB</div>
                <div style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.25)", borderRadius: 100, padding: "5px 12px" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#25d366", boxShadow: "0 0 6px #25d366" }} />
                  <span style={{ color: "#4ade80", fontSize: 12, fontWeight: 600 }}>Tersedia Sekarang</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div style={{ background: "white", borderRadius: 24, padding: 40, border: "1px solid #e2e8f0", boxShadow: "0 8px 32px rgba(26,111,212,0.08)" }}>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: "#020b1a", marginBottom: 4 }}>Kirim Pesan</h3>
            <p style={{ color: "#64748b", fontSize: 13, marginBottom: 28 }}>Data Anda akan otomatis terisi di chat WhatsApp.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-grid">
              {/* Name */}
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                  Nama Lengkap <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="Contoh: Budi Santoso"
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, outline: "none", transition: "border 0.2s", fontFamily: "inherit", boxSizing: "border-box" }}
                  onFocus={e => (e.target.style.borderColor = "#1a6fd4")}
                  onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              {/* Phone */}
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                  Nomor Telepon <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  name="phone" value={form.phone} onChange={handleChange}
                  placeholder="Contoh: 08123456789"
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, outline: "none", transition: "border 0.2s", fontFamily: "inherit", boxSizing: "border-box" }}
                  onFocus={e => (e.target.style.borderColor = "#1a6fd4")}
                  onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                Email <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                name="email" value={form.email} onChange={handleChange} type="email"
                placeholder="Contoh: budi@email.com"
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, outline: "none", transition: "border 0.2s", fontFamily: "inherit", boxSizing: "border-box" }}
                onFocus={e => (e.target.style.borderColor = "#1a6fd4")}
                onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Service */}
            {/* <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                Layanan yang Dibutuhkan
              </label>
              <select
                name="service" value={form.service} onChange={handleChange}
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, outline: "none", transition: "border 0.2s", fontFamily: "inherit", background: "white", color: form.service ? "#374151" : "#9ca3af", boxSizing: "border-box" }}
                onFocus={e => (e.target.style.borderColor = "#1a6fd4")}
                onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
              >
                <option value="">-- Pilih layanan --</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div> */}

            {/* Message */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                Ceritakan Kebutuhan Anda
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                rows={4}
                placeholder="Deskripsikan proyek atau kebutuhan digital Anda secara singkat..."
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, outline: "none", transition: "border 0.2s", fontFamily: "inherit", resize: "vertical", lineHeight: 1.6, boxSizing: "border-box" }}
                onFocus={e => (e.target.style.borderColor = "#1a6fd4")}
                onBlur={e => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {/* Submit */}
            <button onClick={handleWhatsApp} style={{
              width: "100%",
              padding: "14px",
              background: sent ? "linear-gradient(135deg,#22c55e,#16a34a)" : "linear-gradient(135deg,#25d366,#128C7E)",
              color: "white",
              border: "none",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transition: "all 0.3s ease",
              fontFamily: "inherit",
            }}>
              {sent ? (
                <>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                  Pesan Terkirim! Cek WhatsApp Anda
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Kirim via WhatsApp
                </>
              )}
            </button>

            <p style={{ textAlign: "center", color: "#94a3b8", fontSize: 12, marginTop: 12 }}>
              🔒 Data Anda aman. Kami tidak menyimpan informasi pribadi Anda.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </section>
  );
}
