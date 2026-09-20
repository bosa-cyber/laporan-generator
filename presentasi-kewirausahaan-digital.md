---
marp: true
theme: default
size: 16:9
paginate: true
footer: "KEWIRAUSAHAAN DIGITAL • UNIVERSITAS PAMULANG"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap');
  :root { --navy:#102a43; --blue:#1677ff; --teal:#00a896; --orange:#f59e0b; --ink:#243b53; --muted:#627d98; --bg:#f7fafc; --line:#d9e2ec; }
  section { font-family:Inter,sans-serif; color:var(--ink); background:var(--bg); padding:54px 64px 50px; font-size:18px; line-height:1.3; overflow:hidden; }
  h1,h2,h3 { font-family:'Space Grotesk',sans-serif; color:var(--navy); }
  h1 { font-size:48px; line-height:1.03; margin:0 0 16px; }
  h2 { font-size:34px; margin:0 0 18px; }
  h3 { font-size:18px; margin:0 0 6px; }
  p { margin:7px 0; } strong { color:var(--blue); font-weight:800; } .muted { color:var(--muted); }
  .logo { position:absolute; top:24px; right:38px; width:94px; height:auto; }
  .kicker { color:var(--orange); font-size:13px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase; margin-bottom:8px; }
  .accent { color:var(--teal); } .rule { width:92px; height:6px; border-radius:8px; background:linear-gradient(90deg,var(--orange),var(--teal)); margin:12px 0 20px; }
  .grid2 { display:grid; grid-template-columns:1.08fr .92fr; gap:22px; align-items:center; } .grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
  .grid6 { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
  .card { background:#fff; border:1px solid var(--line); border-radius:14px; padding:14px 16px; box-shadow:0 5px 14px rgba(16,42,67,.07); }
  .card h3 { color:var(--navy); } .icon { font-size:27px; margin-bottom:5px; } .pill { display:inline-block; padding:6px 10px; border-radius:99px; background:#e6f6ff; color:#075985; font-weight:700; font-size:13px; margin:3px; }
  .metric { background:var(--navy); color:#fff; border-radius:15px; padding:18px; text-align:center; } .metric b { display:block; color:#ffd166; font-size:30px; } .metric span { color:#d9e2ec; font-size:13px; }
  .flow { display:flex; align-items:stretch; gap:6px; } .step { flex:1; min-height:100px; background:#fff; border-top:5px solid var(--blue); border-radius:12px; padding:11px; box-shadow:0 4px 12px rgba(16,42,67,.07); } .step:nth-child(2n){border-color:var(--teal)} .step:nth-child(3n){border-color:var(--orange)} .step b{display:block;font-size:14px;color:var(--navy)} .step small{font-size:11px;color:var(--muted)} .arrow{align-self:center;color:var(--orange);font-size:20px;font-weight:800}
  .dark { background:var(--navy); color:#fff; } .dark h1,.dark h2,.dark h3 { color:#fff; } .dark strong{color:#7dd3fc} .dark .logo{filter:brightness(0) invert(1)}
  .quote { border-left:6px solid var(--orange); border-radius:0 12px 12px 0; background:#fff7ed; padding:14px 18px; font-size:21px; font-weight:700; color:#7c2d12; }
  .bmc { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; } .bmc .card{min-height:78px;padding:11px 13px} .bmc h3{font-size:15px;color:var(--blue)} .bmc p{font-size:13px;color:var(--muted)}
  .source { position:absolute; left:64px; bottom:34px; color:#829ab1; font-size:10px; } section::after{color:#829ab1;font-size:11px;right:34px;bottom:17px}
---

<!-- _class: dark -->
![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div style="margin-top:52px;width:72%">
<div class="kicker">Presentasi kelompok • 03TPLP038</div>
<h1 style="font-size:56px">KEWIRAUSAHAAN<br><span style="color:#7dd3fc">DIGITAL</span> <span style="color:#ffd166">(STARTUP)</span></h1>
<div class="rule"></div>
<p style="font-size:21px;color:#d9e2ec"><b>Kewirausahaan digital, manfaat, dan implementasi perencanaannya</b></p>
</div>
<div style="position:absolute;left:64px;bottom:45px;width:58%;font-size:12px;color:#d9e2ec;line-height:1.55"><b>Anggota kelompok</b><br>Adam Faisal Jabbar — 2410114007661<br>Fadhlan Bintang Ramadhan — 241011400759<br>Fadli Hakiki — 241011400779<br>Sakhaa Dinart Dananjaya — 241011401428<br>Muhammad Raafi — 241011403054</div>
<div style="position:absolute;right:68px;bottom:66px;width:220px;padding:16px;border:1px solid #486581;border-radius:14px;background:#173b5e;color:#d9e2ec;font-size:14px"><b style="color:#ffd166">UNIVERSITAS PAMULANG</b><br>Program Studi Teknik Informatika</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">01 • Konsep dasar</div><h2>Apa Itu <span class="accent">Kewirausahaan Digital?</span></h2><div class="rule"></div>
<div class="grid2"><div><div class="card" style="border-left:6px solid var(--blue);font-size:21px"><strong>Kewirausahaan digital</strong> adalah proses menemukan peluang, menciptakan nilai, dan mengembangkan usaha dengan memanfaatkan teknologi digital.</div><p class="muted" style="margin-top:16px">Teknologi bukan sekadar alat promosi. Teknologi dapat memengaruhi cara peluang ditemukan, produk dikembangkan, bisnis dijalankan, dan pelanggan dilayani.</p></div><div class="card" style="background:var(--navy);color:#fff;text-align:center;padding:28px"><div style="font-size:64px">🌐</div><h3 style="color:#fff;font-size:24px">DIGITAL ECOSYSTEM</h3><p style="color:#d9e2ec">Peluang • Produk • Pelanggan • Nilai</p></div></div>
<div style="text-align:center;margin-top:20px"><span class="pill">Teknologi</span><span class="pill">Peluang</span><span class="pill">Produk & layanan</span><span class="pill">Model bisnis</span><span class="pill">Penciptaan nilai</span></div>
<div class="source">Rujukan konsep: Nambisan (2017)</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">02 • Ciri utama</div><h2>Karakteristik <span class="accent">Kewirausahaan Digital</span></h2>
<div class="grid6"><div class="card"><div class="icon">💻</div><h3>Berbasis teknologi</h3><p class="muted">Internet, cloud, aplikasi, AI, dan data mendukung operasi bisnis.</p></div><div class="card"><div class="icon">💡</div><h3>Berorientasi peluang</h3><p class="muted">Masalah dan kebutuhan pengguna menjadi sumber ide.</p></div><div class="card"><div class="icon">📈</div><h3>Skalabilitas</h3><p class="muted">Produk digital dapat menjangkau lebih banyak pengguna.</p></div><div class="card"><div class="icon">📊</div><h3>Berbasis data</h3><p class="muted">Keputusan dibuat dari transaksi dan perilaku pengguna.</p></div><div class="card"><div class="icon">🧪</div><h3>Eksperimentasi cepat</h3><p class="muted">Produk diuji, dievaluasi, lalu diperbaiki berulang.</p></div><div class="card"><div class="icon">🔗</div><h3>Ekosistem & platform</h3><p class="muted">Bisnis terhubung dengan pengguna dan berbagai mitra.</p></div></div>
<p style="text-align:center;margin-top:19px"><strong>Model bisnis digital</strong> • <strong>Platform</strong> • <strong>Ekosistem</strong> • <strong>Data</strong></p>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">03 • Nilai strategis</div><h2>Mengapa <span style="color:var(--orange)">Penting?</span></h2>
<div class="grid2" style="align-items:start"><div><div class="card"><h3>01 • Memperluas pasar</h3><p class="muted">Menjangkau pelanggan tanpa batas wilayah.</p></div><div class="card"><h3>02 • Meningkatkan efisiensi</h3><p class="muted">Pembayaran, pemesanan, dan layanan dapat diotomatisasi.</p></div><div class="card"><h3>03 • Mempercepat inovasi</h3><p class="muted">Solusi diuji dan disempurnakan berdasarkan feedback.</p></div></div><div><div class="card"><h3>04 • Keputusan berbasis data</h3><p class="muted">Data membantu mengukur dan mengevaluasi strategi.</p></div><div class="card"><h3>05 • Model bisnis baru</h3><p class="muted">Subscription, freemium, marketplace, platform, dan SaaS.</p></div><div class="card"><h3>06 • Pemasaran lebih luas</h3><p class="muted">Media sosial, mesin pencari, marketplace, dan messaging.</p></div></div></div>
<div class="quote" style="margin-top:18px">Digitalisasi bermanfaat bagi startup teknologi maupun bisnis konvensional yang ingin memperluas pasar dan meningkatkan efisiensi.</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">04 • Startup digital</div><h2>Memahami <span class="accent">Startup</span></h2>
<div class="grid2" style="align-items:start"><div><div class="card" style="background:var(--navy);color:#fff"><h3 style="color:#7dd3fc;font-size:23px">Pengertian</h3><p>Startup adalah usaha rintisan yang masih mencari dan memvalidasi <strong>model bisnis yang berulang, menguntungkan, dan dapat diskalakan</strong>.</p></div><div class="flow" style="margin-top:17px"><div class="step"><b>Masalah</b><small>Kebutuhan nyata</small></div><div class="arrow">→</div><div class="step"><b>MVP</b><small>Solusi minimum</small></div><div class="arrow">→</div><div class="step"><b>Scaling</b><small>Pertumbuhan</small></div></div></div><div class="grid2" style="grid-template-columns:1fr 1fr;gap:11px"><div class="card"><div class="icon">🎯</div><h3>Target jelas</h3><p class="muted">Pengguna tertentu</p></div><div class="card"><div class="icon">🧪</div><h3>Validasi</h3><p class="muted">Uji asumsi</p></div><div class="card"><div class="icon">🔁</div><h3>Feedback</h3><p class="muted">Belajar berulang</p></div><div class="card"><div class="icon">🚀</div><h3>Scaling</h3><p class="muted">Tumbuh efisien</p></div></div></div>
<div style="text-align:center;margin-top:19px"><span class="pill">Marketplace</span><span class="pill">Subscription</span><span class="pill">Freemium</span><span class="pill">SaaS</span><span class="pill">Platform</span></div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">05 • Problem first</div><h2>Dari <span style="color:var(--orange)">Masalah</span> Menjadi Ide Bisnis</h2><p style="font-size:20px">Jangan mulai dari <em>“aplikasi apa yang dibuat?”</em>, tetapi dari <strong>“masalah apa yang layak diselesaikan?”</strong></p>
<div class="flow" style="margin-top:20px"><div class="step"><div class="icon">🔎</div><b>Identifikasi masalah</b><small>Cari aktivitas yang sulit, lambat, atau mahal.</small></div><div class="arrow">→</div><div class="step"><div class="icon">👥</div><b>Target pengguna</b><small>Tentukan siapa yang mengalami masalah.</small></div><div class="arrow">→</div><div class="step"><div class="icon">🗣️</div><b>Validasi</b><small>Wawancara, survei, observasi, atau data.</small></div><div class="arrow">→</div><div class="step"><div class="icon">💡</div><b>Solusi</b><small>Rancang jawaban yang relevan.</small></div></div>
<div class="flow" style="margin-top:14px"><div class="step"><div class="icon">📦</div><b>MVP</b><small>Versi minimum untuk menguji asumsi.</small></div><div class="arrow">→</div><div class="step"><div class="icon">🧪</div><b>Uji pengguna</b><small>Amati penggunaan dan willingness to pay.</small></div><div class="arrow">→</div><div class="step"><div class="icon">🔄</div><b>Perbaiki / pivot</b><small>Ubah arah jika asumsi tidak terbukti.</small></div></div>
<div class="quote" style="margin-top:20px;background:#e6f6ff;color:#075985;border-color:var(--teal)">Masalah → Target Pengguna → Solusi → MVP → Validasi → Evaluasi → Perbaikan</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">06 • Rencana bisnis</div><h2>Perencanaan <span class="accent">Kewirausahaan Digital</span></h2>
<div class="grid2" style="align-items:start"><div class="grid3" style="gap:9px"><div class="card"><h3>01</h3><p><strong>Masalah</strong> & peluang</p></div><div class="card"><h3>02</h3><p><strong>Target</strong> pasar</p></div><div class="card"><h3>03</h3><p><strong>Value proposition</strong></p></div><div class="card"><h3>04</h3><p><strong>Produk</strong> & layanan</p></div><div class="card"><h3>05</h3><p><strong>Model</strong> bisnis</p></div><div class="card"><h3>06</h3><p><strong>Pemasaran</strong></p></div><div class="card"><h3>07</h3><p><strong>Sumber</strong> daya</p></div><div class="card"><h3>08</h3><p><strong>Biaya</strong> & pendapatan</p></div><div class="card"><h3>09</h3><p><strong>Indikator</strong> keberhasilan</p></div></div><div class="card" style="background:var(--navy);color:#fff;padding:23px"><h3 style="color:#ffd166;font-size:22px">Alur implementasi</h3><p>Identifikasi masalah</p><p style="color:#7dd3fc">↓</p><p>Riset pasar</p><p style="color:#7dd3fc">↓</p><p>Business Model Canvas</p><p style="color:#7dd3fc">↓</p><p>MVP / prototype</p><p style="color:#7dd3fc">↓</p><p>Uji pasar → evaluasi → <strong>scaling</strong></p></div></div>
<p style="text-align:center;margin-top:19px"><strong>Lean Startup</strong> menekankan eksperimen, feedback, dan validated learning.</p>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">07 • Business Model Canvas</div><h2>Satu Halaman untuk Memahami <span style="color:var(--orange)">Model Bisnis</span></h2>
<div class="bmc"><div class="card"><h3>👥 Customer Segments</h3><p>Mahasiswa</p></div><div class="card"><h3>💎 Value Propositions</h3><p>Belajar lebih terstruktur</p></div><div class="card"><h3>📣 Channels</h3><p>Aplikasi & media sosial</p></div><div class="card"><h3>🤝 Customer Relationships</h3><p>Chatbot, komunitas, support</p></div><div class="card"><h3>💳 Revenue Streams</h3><p>Subscription premium</p></div><div class="card"><h3>🧰 Key Resources</h3><p>Aplikasi, server, SDM</p></div><div class="card"><h3>⚙️ Key Activities</h3><p>Development & konten</p></div><div class="card"><h3>🔗 Key Partnerships</h3><p>Dosen, institusi, payment provider</p></div><div class="card"><h3>💰 Cost Structure</h3><p>Server, marketing, dan SDM</p></div></div>
<div class="quote" style="margin-top:17px;font-size:18px">BMC memetakan cara bisnis <strong>menciptakan, menyampaikan, dan memperoleh nilai</strong>.</div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">08 • Go-to-market</div><h2>Implementasi & <span class="accent">Pemasaran Digital</span></h2>
<div class="flow"><div class="step"><div class="icon">🛠️</div><b>BUILD</b><small>Bangun prototype dan MVP.</small></div><div class="arrow">→</div><div class="step"><div class="icon">🚀</div><b>LAUNCH</b><small>Rilis ke pengguna awal.</small></div><div class="arrow">→</div><div class="step"><div class="icon">📣</div><b>MARKET</b><small>Konten, media sosial, SEO, KOL.</small></div><div class="arrow">→</div><div class="step"><div class="icon">📊</div><b>MEASURE</b><small>Users, conversion, CAC, retention.</small></div><div class="arrow">→</div><div class="step"><div class="icon">🔁</div><b>LEARN</b><small>Perbaiki berdasarkan data.</small></div></div>
<div class="grid3" style="margin-top:22px"><div class="metric"><b>Pengguna</b><span>jumlah dan pertumbuhan pengguna</span></div><div class="metric"><b>Retention</b><span>pengguna kembali menggunakan produk</span></div><div class="metric"><b>Revenue</b><span>pendapatan dan repeat purchase</span></div></div>
<div class="card" style="margin-top:17px;text-align:center"><strong>Kanal penting:</strong> <span class="pill">Messaging</span><span class="pill">Media sosial</span><span class="pill">Marketplace</span><span class="pill">Search engine</span></div>

---

![Logo Universitas Pamulang](https://cms.unpam.ac.id/storage/assets/pages/content/PzZ9AMcPktYrpCSNamqZQoPsIHcMbyKuiV4oIA9n.png){.logo}
<div class="kicker">09 • Penutup</div><h2>Kesimpulan</h2>
<div class="quote" style="font-size:25px;margin:8px 0 22px">Bisnis digital yang baik bukan hanya tentang memiliki teknologi, tetapi tentang menggunakan teknologi untuk menyelesaikan masalah nyata dan menciptakan nilai bagi pelanggan.</div>
<div class="grid3"><div class="card" style="border-top:6px solid var(--blue)"><div class="icon">🌐</div><h3>Kewirausahaan digital</h3><p class="muted">Teknologi digunakan untuk menemukan peluang dan menjalankan usaha.</p></div><div class="card" style="border-top:6px solid var(--teal)"><div class="icon">🚀</div><h3>Startup digital</h3><p class="muted">Masalah diuji melalui <strong>MVP</strong> untuk menemukan model bisnis yang scalable.</p></div><div class="card" style="border-top:6px solid var(--orange)"><div class="icon">🧪</div><h3>Rencana & validasi</h3><p class="muted">BMC, feedback, data, pivot, dan iterasi mengurangi risiko.</p></div></div>
<p style="text-align:center;font-size:21px;margin-top:23px"><strong>Masalah</strong> → <strong>Target</strong> → <strong>Solusi</strong> → <strong>MVP</strong> → <strong>Validasi</strong> → <strong>Scaling</strong></p>
