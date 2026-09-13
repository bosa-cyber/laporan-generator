---
name: laporan-generator
description: >-
  Universal Academic Report & Thesis Generator for AI Agents. Use when the user wants
  to create or compile academic reports, thesis (skripsi/TA), internship reports (PKL),
  scientific papers, or format documents adhering to Indonesian & international campus standards.
---

# Laporan Generator AI Agent Skill

This skill empowers AI coding agents to autonomously scaffold, draft, format, audit, and compile publication-grade academic documents using Typst, Pandoc, and OpenXML DOCX engines.

--------------------------------------------------------------------------------

## 1. Multi-Stage Interactive Protocol (Wajib)

When the user asks to create an academic document, DO NOT generate files blindly. You MUST follow the **3-Stage Protocol**:

### Stage 1: Identification & Genre Selection
Ask or confirm the document genre:
1. **Laporan Proyek / Praktikum / Tugas Besar**: Format bab standar (BAB 1-5).
2. **Laporan Magang / PKL / KKN**: Memerlukan profil instansi dan log aktivitas.
3. **Tugas Akhir / Skripsi**: Memerlukan lembar pengesahan, abstrak dwibahasa, daftar gambar/tabel.
4. **Makalah Ilmiah / Artikel Jurnal**: Format IMRAD, tanpa kata "BAB" (`heading_chapter_prefix: ""`).

### Stage 2: Structural Verification
Confirm required pages before file creation:
- Halaman Sampul (Cover)
- Lembar Pengesahan (Sign Sheet)
- Abstrak Dwibahasa (Indonesia & English)
- Kata Pengantar & Daftar Isi
- Daftar Gambar & Daftar Tabel
- Bab Utama & Daftar Pustaka APA 7th Edition

### Stage 3: Campus Preset Selection
Match the user's institution with built-in presets:
- `standard`: Margin 2.5/2.5/2/3 cm (Umum)
- `skripsi-4433`: Margin 4/4/3/3 cm (Standar Nasional Skripsi)
- `ui-skripsi`: Universitas Indonesia
- `itb-ta`: Institut Teknologi Bandung
- `ugm-skripsi`: Universitas Gadjah Mada
- `its-skripsi`: Institut Teknologi Sepuluh Nopember

--------------------------------------------------------------------------------

## 2. Autonomous Auto-Healing & Dependency Check

Before building documents, verify that the system environment is ready:

```bash
# Cek kesehatan dependensi
./laporan doctor
# Atau di Windows:
.\laporan.ps1 check
```

### If Dependencies are Missing:
Run the automated installer:
- **Windows**: `powershell -ExecutionPolicy Bypass -File scripts/setup-deps.ps1`
- **Linux / macOS**: `bash scripts/setup-deps.sh`
- **Nix Users**: Run within `nix develop`
- **Docker Users**: `docker run --rm -v "$(pwd):/workspace" muadzhdz/laporan-generator`

--------------------------------------------------------------------------------

## 3. Execution Commands

Compile PDF & DOCX:
```bash
./laporan build
# Windows:
.\laporan.ps1 build
```

Audit document health & citations:
```bash
./laporan doctor
```

Analyze word count, statistics & distribution:
```bash
./laporan stats
```
