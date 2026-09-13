'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function run(argv = []) {
  const home = os.homedir();
  const packageRoot = path.join(__dirname, '..');
  const skillSource = path.join(packageRoot, '.agents/skills/laporan-generator');
  const workflowSource = path.join(packageRoot, '.agents/workflows/laporan.md');

  console.log('\n==========================================================');
  console.log('   LAPORAN GENERATOR - AI AGENT SKILLS SYNCHRONIZER       ');
  console.log('==========================================================\n');

  const targets = [
    {
      name: 'Antigravity / Gemini CLI',
      dir: path.join(home, '.gemini/config/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'Claude Code',
      dir: path.join(home, '.claude/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'Grok CLI',
      dir: path.join(home, '.grok/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'Local Project Workspace (.agents)',
      dir: path.join(process.cwd(), '.agents/skills/laporan-generator'),
      type: 'skill'
    }
  ];

  let installedCount = 0;

  for (const target of targets) {
    try {
      if (!fs.existsSync(target.dir)) {
        fs.mkdirSync(target.dir, { recursive: true });
      }
      copyRecursiveSync(skillSource, target.dir);
      console.log(`  ✔ [INSTALLED] ${target.name} -> ${target.dir}`);
      installedCount++;
    } catch (err) {
      console.log(`  ✖ [SKIP] ${target.name}: ${err.message}`);
    }
  }

  // Sync workflow jika folder .agents/workflows ada
  const localWorkflowDir = path.join(process.cwd(), '.agents/workflows');
  if (fs.existsSync(localWorkflowDir)) {
    try {
      fs.copyFileSync(workflowSource, path.join(localWorkflowDir, 'laporan.md'));
      console.log(`  ✔ [WORKFLOW] /laporan workflow synced to ${localWorkflowDir}`);
    } catch (_) {}
  }

  console.log('\n==========================================================');
  console.log(`✨ Sukses! Skill "laporan-generator" tersinkronisasi ke ${installedCount} target.`);
  console.log('Sekarang kamu bisa meminta AI Agent membuat laporan akademik langsung di chat!');
  console.log('==========================================================\n');
}

module.exports = { run };
