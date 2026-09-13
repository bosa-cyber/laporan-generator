'use strict';

const fs = require('fs');
const path = require('path');

function run(argv = []) {
  const cwd = process.cwd();
  console.log('\n==========================================================');
  console.log('   LAPORAN GENERATOR - INISIALISASI PROYEK DOKUMEN       ');
  console.log('==========================================================\n');

  const metaPath = path.join(cwd, 'metadata.yml');
  const coverPath = path.join(cwd, 'cover.md');
  const chaptersDir = path.join(cwd, 'chapters');
  const refBibPath = path.join(cwd, 'references.bib');

  if (fs.existsSync(metaPath)) {
    console.log('[WARN] Dokumen laporan sudah ada di direktori ini (metadata.yml ditemukan).');
    return;
  }

  // 1. Buat metadata default
  const defaultMeta = `title: "Laporan Akademik & Proyek"
author:
  - name: "Nama Penulis"
    id: "1234567890"
date: "2026"
institution: "Universitas / Institusi Akademik"
faculty: "Fakultas Teknik & Ilmu Komputer"
department: "Program Studi Informatika"
location: "Indonesia"
margin_preset: "skripsi-4433"
font_family: "Times New Roman"
font_size: "12pt"
line_spacing: "0.75em"
first_line_indent: "1.25cm"
heading_chapter_prefix: "BAB "
heading_chapter_num_format: "roman"
`;
  fs.writeFileSync(metaPath, defaultMeta, 'utf8');
  console.log('  ✔ Dibuat: metadata.yml (Preset: skripsi-4433)');

  // 2. Buat cover.md
  const defaultCover = `# Laporan Akademik

Dokumen ini disusun sebagai dokumentasi resmi laporan proyek/penelitian.
`;
  fs.writeFileSync(coverPath, defaultCover, 'utf8');
  console.log('  ✔ Dibuat: cover.md');

  // 3. Buat chapters/
  if (!fs.existsSync(chaptersDir)) {
    fs.mkdirSync(chaptersDir, { recursive: true });
  }
  const bab1 = `# Pendahuluan

## Latar Belakang
Tuliskan latar belakang masalah di sini.

## Rumusan Masalah
1. Masalah pertama.
2. Masalah kedua.

## Tujuan Penelitian
Tujuan dari pelaksanaan proyek ini adalah menghasilkan analisis yang komprehensif.
`;
  fs.writeFileSync(path.join(chaptersDir, 'bab1-pendahuluan.md'), bab1, 'utf8');
  console.log('  ✔ Dibuat: chapters/bab1-pendahuluan.md');

  // 4. Buat references.bib minimal
  const defaultBib = `@book{contoh2026,
  title     = {Panduan Penulisan Karya Ilmiah},
  author    = {Penulis, Contoh},
  year      = {2026},
  publisher = {Penerbit Akademik}
}
`;
  fs.writeFileSync(refBibPath, defaultBib, 'utf8');
  console.log('  ✔ Dibuat: references.bib');

  console.log('\n✨ Inisialisasi dokumen selesai!');
  console.log('Jalankan "npx laporan-generator build" atau gunakan AI Agent untuk melengkapi dokumen kamu!\n');
}

module.exports = { run };
