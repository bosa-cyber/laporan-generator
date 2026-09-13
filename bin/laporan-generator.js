#!/usr/bin/env node
'use strict';

const path = require('path');
const { spawnSync } = require('child_process');

const args = process.argv.slice(2);
const command = args[0] || 'help';

function showHelp() {
  console.log(`
  ========================================================
         LAPORAN GENERATOR CLI (Multi-Host AI Engine)     
  ========================================================
  Versi: 2.6.0
  
  Penggunaan:
    npx laporan-generator <perintah> [opsi]

  Perintah Utama:
    sync-hosts        Pasang/sinkronkan AI agent skills ke Antigravity, Claude, Gemini, Grok
    setup             Jalankan installer dependensi otomatis multi-OS (Typst, Pandoc, ImageMagick)
    init              Inisialisasi template dokumen laporan/skripsi di direktori saat ini
    doctor            Audit kesehatan lingkungan dan dependensi dokumen
    build             Kompilasi dokumen ke PDF dan DOCX
    help              Tampilkan panduan ini
  `);
}

switch (command) {
  case 'sync-hosts':
  case 'sync-skills':
    require('../lib/sync-hosts').run(args.slice(1));
    break;
  case 'setup':
  case 'install-deps':
    require('../lib/setup').run(args.slice(1));
    break;
  case 'init':
    require('../lib/init').run(args.slice(1));
    break;
  case 'doctor':
  case 'check':
    const doctorScript = path.join(__dirname, '../scripts/report-doctor.py');
    const proc = spawnSync('python3', [doctorScript], { stdio: 'inherit' });
    process.exit(proc.status || 0);
    break;
  case 'build':
    const isWin = process.platform === 'win32';
    if (isWin) {
      const psScript = path.join(__dirname, '../laporan.ps1');
      const winProc = spawnSync('powershell', ['-ExecutionPolicy', 'Bypass', '-File', psScript, 'build'], { stdio: 'inherit' });
      process.exit(winProc.status || 0);
    } else {
      const shScript = path.join(__dirname, '../build.sh');
      const unixProc = spawnSync('bash', [shScript], { stdio: 'inherit' });
      process.exit(unixProc.status || 0);
    }
    break;
  case 'help':
  case '--help':
  case '-h':
  default:
    showHelp();
    break;
}
