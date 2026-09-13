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
      name: 'Global Agents (~/.agents/skills/laporan-generator)',
      dir: path.join(home, '.agents/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'Antigravity / Gemini CLI (~/.gemini/config/skills/laporan-generator)',
      dir: path.join(home, '.gemini/config/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'Claude Code (~/.claude/skills/laporan-generator)',
      dir: path.join(home, '.claude/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'Grok CLI (~/.grok/skills/laporan-generator)',
      dir: path.join(home, '.grok/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'OpenCode (~/.config/opencode/skills/laporan-generator)',
      dir: path.join(home, '.config/opencode/skills/laporan-generator'),
      type: 'skill'
    },
    {
      name: 'Local Workspace (.agents/skills/laporan-generator)',
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
      console.log(`  ✔ [INSTALLED] ${target.name}`);
      installedCount++;
    } catch (err) {
      console.log(`  ✖ [SKIP] ${target.name}: ${err.message}`);
    }
  }

  // Sync workflows / slash commands ke ~/.agents/workflows dan workspace
  const workflowDestinations = [
    path.join(home, '.agents/workflows'),
    path.join(process.cwd(), '.agents/workflows')
  ];

  for (const wDir of workflowDestinations) {
    try {
      if (!fs.existsSync(wDir)) {
        fs.mkdirSync(wDir, { recursive: true });
      }
      fs.copyFileSync(workflowSource, path.join(wDir, 'laporan-generator.md'));
      fs.copyFileSync(workflowSource, path.join(wDir, 'laporan.md'));
      console.log(`  ✔ [WORKFLOW] /laporan-generator & /laporan synced to ${wDir}`);
    } catch (_) {}
  }

  console.log('\n==========================================================');
  console.log(`✨ Sukses! Skill "laporan-generator" tersinkronisasi ke ${installedCount} target.`);
  console.log('Sekarang kamu bisa menggunakan slash command /laporan-generator atau /laporan di AI Agent!');
  console.log('==========================================================\n');
}

module.exports = { run };
