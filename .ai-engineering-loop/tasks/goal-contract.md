# Goal Contract Draft

**Run:** `20260919T144020Z-67b9c321`  
**Revision:** 1  
**Status:** DRAFT — not frozen  
**Content hash:** `5560ccf16426172cdce9287f2f721a93a971e243621e83571fb89b7d11589504`

## Objective

Comprehensive end-to-end audit and quality verification of laporan-generator: Native MCP server handshake and 6 tools, Python CLI portability & JSON modes, multi-host AI agent skills synchronization, and dual-engine academic report compilation with zero regressions.

## Acceptance criteria and failure table

| AC | Required behavior | Evidence seam | Failure cases |
|---|---|---|---|
| AC-1 | Native Model Context Protocol (MCP) Server is fully operational: handles JSON-RPC initialize, ping, tools/list with all 6 tools, and executes tool calls deterministically. | node tests/test_mcp.js and npm run test:mcp exit with code 0 and all assertions pass. | MCP server fails to start or parse stdio JSON-RPC; Missing any of the 6 tools (laporan_init, laporan_doctor, laporan_stats, laporan_presets, laporan_citations, laporan_build); Tool call returns unhandled exception or malformed JSON |
| AC-2 | Python scripts support target_dir and --json flag without hardcoding repo root or failing when executed in external projects. | report-doctor.py --json and report-stats.py --json produce valid parseable JSON output and respect target directory arguments. | Script crashes with FileNotFoundError or switches away from user target directory; Invalid JSON emitted to stdout when --json is passed; Python unit tests in scripts/test_scripts.py fail |
| AC-3 | Universal multi-host synchronization (sync-hosts) seamlessly registers MCP server and deploys skills across Antigravity, Claude, OpenCode, and Kiro without configuration corruption. | node bin/laporan-generator.js sync-hosts exits with code 0 and registers laporan server in ~/.gemini/config/mcp_config.json, ~/.claude.json, and ~/.config/opencode/opencode.jsonc. | Existing mcpServers entries (e.g. sia) are overwritten or deleted; JSON syntax error introduced into configuration files; Internal skills resources drift out of sync with root scripts |
| AC-4 | CLI and helper parity across Bash (laporan), PowerShell (laporan.ps1), and Node (bin/laporan-generator.js) with support for mcp, doctor, stats, init, and build. | ./laporan help, node bin/laporan-generator.js --help, and laporan.ps1 display mcp and stats commands with consistent option routing. | mcp command missing from any CLI helper; Flag arguments not passed to underlying scripts; Execution failure due to missing switch cases |
| AC-5 | Zero regressions on existing test suites and unit test coverage across both root and skill directories. | python3 scripts/test_scripts.py and python3 .agents/skills/laporan-generator/scripts/test_scripts.py both pass 18/18 tests. | Any test in test_scripts.py fails; Skill resources tests fail due to path mismatches |
