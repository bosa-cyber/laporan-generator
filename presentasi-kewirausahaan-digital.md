---
marp: true
theme: default
size: 16:9
paginate: true
footer: "KEWIRAUSAHAAN DIGITAL • UNIVERSITAS PAMULANG"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

  :root {
    --navy: #0b1530;
    --blue: #2563eb;
    --cyan: #14b8a6;
    --orange: #f59e0b;
    --ink: #172033;
    --muted: #64748b;
    --paper: #f8fafc;
    --line: #dbe4f0;
  }

  section {
    font-family: 'Inter', sans-serif;
    color: var(--ink);
    background: var(--paper);
    padding: 54px 68px 48px;
    font-size: 20px;
    line-height: 1.35;
    overflow: hidden;
  }

  section::after {
    color: #94a3b8;
    font-size: 12px;
    right: 34px;
    bottom: 18px;
  }

  h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; color: var(--navy); }
  h1 { font-size: 42px; line-height: 1.05; margin: 0 0 18px; font-weight: 800; }
  h2 { font-size: 34px; margin: 0 0 22px; font-weight: 700; }
  h3 { font-size: 20px; margin: 0 0 8px; }
  strong { color: var(--blue); font-weight: 800; }
  p { margin: 8px 0; }
  ul { margin: 10px 0; padding-left: 25px; }
  li { margin: 6px 0; }
  .logo { position: absolute; top: 28px; right: 42px; width: 105px; height: auto; }
  .kicker { color: var(--orange); letter-spacing: 2px; text-transform: uppercase; font-weight: 800; font-size: 14px; }
  .accent { color: var(--cyan); }
  .muted { color: var(--muted); }
  .rule { width: 100px; height: 7px; border-radius: 8px; background: linear-gradient(90deg, var(--orange), var(--cyan)); margin: 15px 0 22px; }
  .grid2 { display: grid; grid-template-columns: 1.08fr .92fr; gap: 28px; align-items: center; }
  .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .grid6 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .card { background: white; border: 1px solid var(--line); border-radius: 18px; padding: 17px 18px; box-shadow: 0 8px 22px rgba(15, 23, 42, .06); }
  .card h3 { color: var(--navy); }
  .icon { font-size: 30px; margin-bottom: 8px; }
  .pill { display: inline-block; padding: 7px 12px; border-radius: 99px; background: #e0f2fe; color: #075985; font-weight: 700; font-size: 14px; margin: 3px; }
  .metric { background: var(--navy); color: white; border-radius: 20px; padding: 24px; text-align: center; }
  .metric b { display: block; font-size: 35px; color: var(--orange); }
  .metric span { color: #cbd5e1; font-size: 14px; }
  .flow { display: flex; align-items: stretch; gap: 7px; }
  .step { flex: 1; min-height: 105px; border-radius: 14px; padding: 13px; background: white; border-top: 6px solid var(--blue); box-shadow: 0 6px 16px rgba(15,23,42,.07); }
  .step:nth-child(2n) { border-color: var(--cyan); }
  .step:nth-child(3n) { border-color: var(--orange); }
  .step b { display: block; font-size: 15px; color: var(--navy); }
  .step small { color: var(--muted); font-size: 12px; }
  .arrow { align-self: center; color: var(--orange); font-size: 22px; font-weight: 800; }
  .dark { background: var(--navy); color: white; }
  .dark h1, .dark h2, .dark h3 { color: white; }
  .dark .muted { color: #cbd5e1; }
  .dark strong { color: #67e8f9; }
  .dark .logo { filter: brightness(0) invert(1); }
  .quote { border-left: 7px solid var(--orange); padding: 16px 22px; background: rgba(255,255,255,.09); border-radius: 0 15px 15px 0; font-size: 26px; font-weight: 700; }
  .bmc { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .bmc .card { min-height: 94px; padding: 13px; }
  .bmc h3 { font-size: 16px; color: var(--blue); }
  .bmc p { font-size: 14px; color: var(--muted); }
  .source { position: absolute; bottom: 38px; left: 68px; color: #94a3b8; font-size: 11px; }
---

<!-- _class: dark -->
![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}

<div style="margin-top:55px; width:62%">
<div class="kicker">Presentasi Kewirausahaan • Startup Digital</div>
<h1 style="font-size:58px">KEWIRAUSAHAAN<br><span style="color:#67e8f9">DIGITAL</span> <span style="color:#fbbf24">(STARTUP)</span></h1>
<div class="rule"></div>
<p style="font-size:23px;color:#e2e8f0"><b>Kewirausahaan Digital dan Manfaatnya</b><br>serta Implementasi Perencanaan Kewirausahaan Digital</p>
</div>

<div style="position:absolute;right:85px;bottom:90px;width:310px;padding:18px;border:1px solid #334155;border-radius:18px;background:#111d3c">
<strong style="color:#fbbf24">KELOMPOK 03TPLP038</strong><br>
<span style="font-size:14px;color:#cbd5e1">Universitas Pamulang</span>
</div>

<div style="position:absolute;left:68px;bottom:36px;font-size:13px;color:#cbd5e1">
Adam Faisal Jabbar • Fadhlan Bintang Ramadhan • Fadli Hakiki • Sakhaa Dinart Dananjaya • Muhammad Raafi
</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">01 • Fondasi Konsep</div>
<h2>Apa Itu <span class="accent">Kewirausahaan Digital?</span></h2>
<div class="rule"></div>
<div class="grid2">
<div>
<div class="card" style="font-size:23px;border-left:7px solid #2563eb">
<strong>Kewirausahaan digital</strong> adalah aktivitas kewirausahaan yang memanfaatkan teknologi digital untuk menemukan peluang, menciptakan produk atau layanan, membangun model bisnis, berinteraksi dengan pelanggan, dan mengembangkan usaha.
</div>
<p class="muted" style="margin-top:18px">Teknologi bukan hanya alat pemasaran. Teknologi mengubah cara peluang ditemukan, produk dikembangkan, bisnis dijalankan, dan nilai diciptakan.</p>
</div>
<div class="card" style="background:#0b1530;color:white;text-align:center;padding:25px">
<div style="font-size:72px">🌐</div>
<h3 style="color:white;font-size:25px">DIGITAL<br>ECOSYSTEM</h3>
<p style="color:#cbd5e1">Peluang • Produk • Pelanggan • Nilai</p>
</div>
</div>
<div style="margin-top:25px;text-align:center">
<span class="pill">💡 Peluang</span><span class="pill">💻 Teknologi</span><span class="pill">📱 Produk & Layanan</span><span class="pill">📊 Model Bisnis</span><span class="pill">🤝 Customer</span>
</div>
<div class="source">Sumber konsep: Nambisan (2017); Paul et al. (2023)</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">02 • DNA Bisnis Digital</div>
<h2>Karakteristik <span class="accent">Kewirausahaan Digital</span></h2>
<div class="grid6">
<div class="card"><div class="icon">💻</div><h3>Berbasis Teknologi</h3><p class="muted">Internet, cloud, aplikasi, AI, dan data menjadi bagian inti bisnis.</p></div>
<div class="card"><div class="icon">💡</div><h3>Berorientasi Peluang</h3><p class="muted">Teknologi membantu menemukan kebutuhan dan masalah baru.</p></div>
<div class="card"><div class="icon">📈</div><h3>Skalabilitas</h3><p class="muted">Produk digital dapat menjangkau banyak pengguna secara efisien.</p></div>
<div class="card"><div class="icon">📊</div><h3>Berbasis Data</h3><p class="muted">Keputusan didukung data transaksi dan perilaku pengguna.</p></div>
<div class="card"><div class="icon">🧪</div><h3>Eksperimentasi Cepat</h3><p class="muted">Uji, dengarkan feedback, lalu iterasikan produk.</p></div>
<div class="card"><div class="icon">🌐</div><h3>Ekosistem & Platform</h3><p class="muted">Terhubung dengan pengguna, partner, developer, dan provider.</p></div>
</div>
<p style="margin-top:20px;text-align:center"><strong>Digital business models</strong> • <strong>Platform strategies</strong> • <strong>Digital ecosystems</strong></p>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">03 • Why It Matters</div>
<h2>Mengapa Ini <span style="color:#f59e0b">Penting?</span></h2>
<div class="grid2" style="align-items:start">
<div>
<div class="card"><h3>01 • Memperluas pasar</h3><p class="muted">Menjangkau pelanggan di luar batas geografis.</p></div>
<div class="card"><h3>02 • Meningkatkan efisiensi</h3><p class="muted">Pembayaran, pemasaran, pemesanan, dan layanan lebih cepat.</p></div>
<div class="card"><h3>03 • Mempermudah inovasi</h3><p class="muted">Produk diuji dan diperbaiki berdasarkan feedback.</p></div>
</div>
<div>
<div class="card"><h3>04 • Keputusan berbasis data</h3><p class="muted">Data menjadi dasar evaluasi dan strategi.</p></div>
<div class="card"><h3>05 • Model bisnis baru</h3><p class="muted">Marketplace, subscription, freemium, platform, dan SaaS.</p></div>
<div class="card"><h3>06 • Pemasaran lebih luas</h3><p class="muted">Media sosial, marketplace, mesin pencari, dan messaging.</p></div>
</div>
</div>
<div style="margin-top:24px" class="grid3">
<div class="metric"><b>15,30%</b><span>pertumbuhan usaha e-commerce Indonesia pada 2024</span></div>
<div class="metric"><b>Jawa</b><span>pusat konsentrasi aktivitas e-commerce</span></div>
<div class="metric"><b>∞</b><span>peluang inovasi dan skala digital</span></div>
</div>
<div class="source">Sumber data: BPS, Statistik E-Commerce 2024</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">04 • Dari Ide ke Perusahaan</div>
<h2><span class="accent">Startup Digital:</span> Pengertian & Karakteristik</h2>
<div class="grid2" style="align-items:start">
<div>
<div class="card" style="background:#0b1530;color:white">
<h3 style="color:#67e8f9;font-size:26px">Apa itu startup?</h3>
<p>Usaha rintisan yang sedang mencari dan mengembangkan <strong>model bisnis berulang</strong> yang dapat dikembangkan ke skala lebih besar.</p>
</div>
<div style="margin-top:18px" class="flow"><div class="step"><b>Masalah</b><small>Problem yang nyata</small></div><div class="arrow">→</div><div class="step"><b>MVP</b><small>Solusi awal</small></div><div class="arrow">→</div><div class="step"><b>Scaling</b><small>Pertumbuhan</small></div></div>
</div>
<div class="grid2" style="grid-template-columns:1fr 1fr;gap:12px">
<div class="card"><div class="icon">🎯</div><h3>Target jelas</h3><p class="muted">Pengguna spesifik</p></div>
<div class="card"><div class="icon">🧪</div><h3>Validasi</h3><p class="muted">Uji asumsi bisnis</p></div>
<div class="card"><div class="icon">🔁</div><h3>Feedback</h3><p class="muted">Belajar berulang</p></div>
<div class="card"><div class="icon">🚀</div><h3>Scaling</h3><p class="muted">Tumbuh lebih besar</p></div>
</div>
</div>
<div style="margin-top:22px;text-align:center"><span class="pill">🛍️ Marketplace</span><span class="pill">🔁 Subscription</span><span class="pill">🆓 Freemium</span><span class="pill">☁️ SaaS</span><span class="pill">🔗 Platform</span></div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">05 • Customer-First Thinking</div>
<h2>Dari <span style="color:#f59e0b">Masalah</span> Menjadi Ide Bisnis</h2>
<p style="font-size:23px;margin-bottom:26px">Jangan mulai dari: <em>“Aplikasi apa yang mau kita buat?”</em><br>Mulai dari: <strong>“Masalah apa yang layak diselesaikan?”</strong></p>
<div class="flow">
<div class="step"><div class="icon">🔎</div><b>Identifikasi masalah</b><small>Cari aktivitas yang lambat, mahal, atau sulit.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">👥</div><b>Target pengguna</b><small>Siapa yang mengalami masalah?</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">🗣️</div><b>Validasi</b><small>Wawancara, survei, observasi.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">💡</div><b>Solusi</b><small>Rancang jawaban yang relevan.</small></div>
</div>
<div style="height:14px"></div>
<div class="flow">
<div class="step"><div class="icon">📦</div><b>MVP</b><small>Versi minimum untuk diuji.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">🧪</div><b>Uji pengguna</b><small>Amati penggunaan dan willingness to pay.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">🔄</div><b>Perbaiki / Pivot</b><small>Ubah asumsi yang tidak terbukti.</small></div>
</div>
<div class="quote" style="margin-top:24px;background:#e0f2fe;color:#0c4a6e;font-size:20px;border-color:#14b8a6">Masalah → Target Pengguna → Solusi → MVP → Validasi → Evaluasi → Perbaikan</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">06 • From Plan to Action</div>
<h2>Perencanaan <span class="accent">Kewirausahaan Digital</span></h2>
<div class="grid2" style="align-items:start">
<div class="grid3" style="grid-template-columns:repeat(3,1fr);gap:10px">
<div class="card"><h3>01</h3><p><strong>Masalah</strong> & peluang</p></div><div class="card"><h3>02</h3><p><strong>Target</strong> pasar</p></div><div class="card"><h3>03</h3><p><strong>Value Proposition</strong></p></div>
<div class="card"><h3>04</h3><p><strong>Produk</strong> & layanan</p></div><div class="card"><h3>05</h3><p><strong>Model</strong> bisnis</p></div><div class="card"><h3>06</h3><p><strong>Strategi</strong> pemasaran</p></div>
<div class="card"><h3>07</h3><p><strong>Sumber</strong> daya</p></div><div class="card"><h3>08</h3><p><strong>Biaya</strong> & pendapatan</p></div><div class="card"><h3>09</h3><p><strong>Indikator</strong> keberhasilan</p></div>
</div>
<div class="card" style="background:#0b1530;color:white;padding:25px">
<h3 style="color:#fbbf24;font-size:24px">Alur Implementasi</h3>
<p>Identifikasi Masalah</p><p style="color:#67e8f9">↓</p><p>Riset Pasar</p><p style="color:#67e8f9">↓</p><p>Business Model Canvas</p><p style="color:#67e8f9">↓</p><p>MVP / Prototype</p><p style="color:#67e8f9">↓</p><p>Uji Pasar → Evaluasi → <strong>Scaling</strong></p>
</div>
</div>
<p style="text-align:center;margin-top:25px"><strong>Lean Startup</strong> = eksperimen + feedback + validated learning + iterasi</p>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">07 • Business Model Canvas</div>
<h2>Memetakan Cara Bisnis <span style="color:#f59e0b">Menciptakan Nilai</span></h2>
<div class="bmc">
<div class="card"><h3>👥 Customer Segments</h3><p>Mahasiswa</p></div>
<div class="card"><h3>💎 Value Propositions</h3><p>Belajar lebih terstruktur</p></div>
<div class="card"><h3>📣 Channels</h3><p>Aplikasi & media sosial</p></div>
<div class="card"><h3>🤝 Customer Relationships</h3><p>Chatbot, komunitas, support</p></div>
<div class="card"><h3>💳 Revenue Streams</h3><p>Subscription premium</p></div>
<div class="card"><h3>🧰 Key Resources</h3><p>Aplikasi, server, SDM</p></div>
<div class="card"><h3>⚙️ Key Activities</h3><p>Development & konten</p></div>
<div class="card"><h3>🔗 Key Partnerships</h3><p>Dosen, institusi, payment</p></div>
<div class="card"><h3>💰 Cost Structure</h3><p>Server, marketing, SDM</p></div>
</div>
<div class="quote" style="margin-top:22px;background:#fff7ed;color:#9a3412;border-color:#f59e0b;font-size:19px"><strong>Business Model Canvas</strong> membantu melihat hubungan antara pelanggan, solusi, aktivitas, partner, biaya, dan pendapatan dalam satu halaman.</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">08 • Go-to-Market</div>
<h2>Implementasi & Strategi <span class="accent">Pemasaran Digital</span></h2>
<div class="flow">
<div class="step"><div class="icon">🛠️</div><b>BUILD</b><small>Prototype, MVP, sistem, fitur inti.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">🚀</div><b>LAUNCH</b><small>Rilis ke pengguna awal dengan risiko terukur.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">📣</div><b>MARKET</b><small>Content, social media, SEO, KOL.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">📊</div><b>MEASURE</b><small>Users, conversion, CAC, retention.</small></div><div class="arrow">→</div>
<div class="step"><div class="icon">🔁</div><b>LEARN</b><small>Gunakan data untuk improvement.</small></div>
</div>
<div class="grid2" style="margin-top:24px;align-items:start">
<div class="card"><h3>Channel yang digunakan bisnis Indonesia</h3><div class="metric" style="margin-top:12px"><b>94,76%</b><span>menggunakan aplikasi pesan instan sebagai media penjualan</span></div></div>
<div class="card"><h3>Jangan abaikan kanal sederhana</h3><p><span class="pill">💬 Messaging</span><span class="pill">📱 Media sosial</span><span class="pill">🛍️ Marketplace</span></p><p class="muted">Strategi digital tidak selalu membutuhkan aplikasi besar. Kanal yang dekat dengan pelanggan bisa menjadi mesin pertumbuhan.</p></div>
</div>
<div class="source">Sumber data: BPS, Statistik E-Commerce 2024</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">09 • Takeaway</div>
<h2>Kesimpulan</h2>
<div class="quote" style="font-size:29px;margin:8px 0 27px">“Bisnis digital yang baik bukan hanya tentang memiliki teknologi, tetapi tentang menggunakan teknologi untuk menyelesaikan masalah yang nyata dan menciptakan nilai bagi pelanggan.”</div>
<div class="grid3">
<div class="card" style="border-top:7px solid #2563eb"><div class="icon">🌐</div><h3>Kewirausahaan Digital</h3><p class="muted">Teknologi digunakan untuk menemukan peluang, menciptakan nilai, menjalankan, dan mengembangkan usaha.</p></div>
<div class="card" style="border-top:7px solid #14b8a6"><div class="icon">🚀</div><h3>Startup Digital</h3><p class="muted">Berangkat dari masalah, menguji solusi lewat <strong>MVP</strong>, lalu mencari model bisnis yang scalable.</p></div>
<div class="card" style="border-top:7px solid #f59e0b"><div class="icon">🧪</div><h3>Rencana & Validasi</h3><p class="muted">Gabungkan <strong>Business Model Canvas</strong>, feedback, data, pivot, dan iterasi.</p></div>
</div>
<p style="text-align:center;font-size:22px;margin-top:27px"><strong>Masalah</strong> → <strong>Target Pasar</strong> → <strong>Value Proposition</strong> → <strong>MVP</strong> → <strong>Validasi</strong> → <strong>Scaling</strong></p>

---

<!-- _class: dark -->
![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div style="display:flex;flex-direction:column;justify-content:center;height:82%;text-align:center">
<div class="kicker">Terima Kasih</div>
<h1 style="font-size:58px">BUILD THE<br><span style="color:#67e8f9">FUTURE</span> <span style="color:#fbbf24">DIGITALLY.</span></h1>
<div class="rule" style="margin:18px auto"></div>
<p style="font-size:24px;color:#cbd5e1">Ada pertanyaan?</p>
<p style="font-size:16px;color:#94a3b8">KELOMPOK 03TPLP038 • UNIVERSITAS PAMULANG</p>
</div>
