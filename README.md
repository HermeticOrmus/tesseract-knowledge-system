# Claude Tesseract 🔮

**A self-updating knowledge system for Claude Code mastery.**

The Tesseract automatically downloads, curates, and applies the latest Claude Code news, best practices, and innovations to your setup.

## 🎯 Purpose

Stay at the cutting edge of Claude Code capabilities without manual research:
- Auto-fetch latest documentation updates
- Discover new features and best practices
- Apply improvements to your configuration
- Track what's been adopted vs. pending
- Archive knowledge for reference

## 📁 Structure

```
tesseract/
├── README.md                    # This file
├── updates/                     # Latest news and releases
│   ├── YYYY-MM-DD-feature.md
│   └── changelog.md
├── best-practices/              # Curated best practices
│   ├── workflow-optimization.md
│   ├── agent-usage.md
│   └── mcp-integration.md
├── examples/                    # Real-world examples
│   ├── advanced-workflows/
│   └── integration-patterns/
├── applied/                     # What you've implemented
│   ├── YYYY-MM-DD-adopted.md
│   └── adoption-log.md
├── docs-cache/                  # Cached documentation
│   └── fetched-YYYY-MM-DD/
└── scripts/                     # Automation scripts
    ├── fetch-updates.sh
    └── apply-practices.sh
```

## 🚀 Quick Start

**Fetch latest updates:**
```bash
/tesseract-sync
```

**Review what's new:**
```bash
/tesseract-review
```

**Apply a best practice:**
```bash
/tesseract-apply
```

## 🔄 Automatic Updates

The Tesseract can run automatically:

**Daily:** Check for new Claude Code releases and docs
**Weekly:** Fetch best practices from community
**Monthly:** Comprehensive review and application

## 📋 What Gets Tracked

### 1. Official Updates
- Claude Code releases and changelogs
- New features and capabilities
- Documentation updates
- API changes

### 2. Best Practices
- Workflow optimizations
- Agent usage patterns
- MCP server integrations
- Performance improvements
- Security recommendations

### 3. Community Insights
- GitHub discussions and issues
- Blog posts and tutorials
- Reddit/Discord discussions
- Real-world usage patterns

### 4. Applied Changes
- What you've adopted
- Configuration changes made
- Results and impact
- Rollback information

## 💡 Intelligence Layers

### Layer 1: Fetch
Automatically downloads latest information from:
- Official Claude docs
- GitHub repositories
- Community forums
- Technical blogs

### Layer 2: Curate
Filters and organizes information:
- Relevance to your workflow
- Priority (critical/nice-to-have)
- Compatibility checks
- Dependency analysis

### Layer 3: Apply
Helps implement improvements:
- Configuration updates
- New slash commands
- Agent enhancements
- Workflow refinements

### Layer 4: Track
Maintains history:
- What was applied
- When it was applied
- Impact assessment
- Rollback capability

## 🎛️ Configuration

Edit `tesseract.config.json` to customize:

```json
{
  "autoFetch": true,
  "fetchFrequency": "daily",
  "sources": {
    "officialDocs": true,
    "github": true,
    "community": true,
    "blogs": false
  },
  "filters": {
    "minRelevance": 0.7,
    "categories": ["features", "best-practices", "integrations"]
  },
  "autoApply": false,
  "notifyOnUpdates": true
}
```

## 📊 Metrics

Track your Claude Code evolution:
- Features adopted over time
- Configuration optimization impact
- Workflow efficiency gains
- Time saved through automation

## 🔐 Safety

All operations are:
- **Backed up** - Automatic backups before changes
- **Reviewed** - Nothing applied without your approval
- **Reversible** - Easy rollback for any change
- **Documented** - Complete audit trail

## 🌟 Advanced Features

### Smart Recommendations
Based on your usage patterns:
- Suggests relevant new features
- Identifies workflow gaps
- Recommends complementary tools
- Highlights underutilized capabilities

### Conflict Detection
Checks for:
- Configuration conflicts
- Deprecated features
- Breaking changes
- Dependency issues

### Impact Analysis
Before applying changes:
- Estimates effort required
- Predicts benefits
- Identifies risks
- Suggests rollout strategy

## 📚 Knowledge Base

The Tesseract builds a personal knowledge base:
- Searchable documentation
- Annotated with your notes
- Tagged by relevance
- Cross-referenced

## 🎓 Learning Mode

**Tutorial Generator:**
Automatically creates tutorials for new features based on:
- Official documentation
- Your current setup
- Your workflow patterns
- Real examples

## 🔄 Sync Strategies

### Conservative (Default)
- Fetch weekly
- Review required before application
- No breaking changes
- Full backups

### Balanced
- Fetch daily
- Apply non-breaking changes automatically
- Review breaking changes
- Incremental backups

### Aggressive
- Fetch daily
- Auto-apply all compatible updates
- Immediate adoption of new features
- Continuous optimization

## 🤝 Integration

Works seamlessly with:
- Your existing agents
- Custom slash commands
- MCP servers
- Git workflow
- Memory system

## 📈 Growth Path

The Tesseract helps you evolve from:
1. **Beginner** → Using basic features
2. **Intermediate** → Custom workflows
3. **Advanced** → Multi-agent orchestration
4. **Expert** → Contributing back to community

## 🎯 Goals

**Short-term:**
- Never miss important updates
- Adopt best practices quickly
- Stay ahead of breaking changes

**Long-term:**
- Become Claude Code power user
- Optimize workflow continuously
- Contribute to community knowledge

## 🚀 Next Steps

1. Run `/tesseract-sync` to fetch initial knowledge base
2. Review `updates/` folder for latest features
3. Explore `best-practices/` for quick wins
4. Check `applied/adoption-log.md` to track progress

---

**The Tesseract is always learning, always improving, always helping you master Claude Code.**

*Last Updated: 2025-10-12*

---

## 🧘 Philosophy: Knowledge in Service of Wisdom

**Knowledge without wisdom is noise. Wisdom without knowledge is incomplete.**

Built by Ormus, a student of Hermetica and student of life, Tesseract transforms information overload into actionable wisdom. It serves your learning without overwhelming you.

### Core Beliefs

**Information Overload is Killing Us:**
- FOMO about missing updates
- Guilt about not knowing everything
- Paralysis from too many options
- Exhaustion from trying to keep up

**Our Solution:**
- Filter noise, amplify signal
- Curate for relevance, not volume
- Guide implementation, don't abandon you
- Respect attention as sacred

**Hermetic Principles Applied:**
- **Mentalism** - Your mind is sacred space; guard what enters it
- **Correspondence** - Learn principles, not just updates; understand patterns
- **Vibration** - Stay current without chasing every trend
- **Rhythm** - Learn when ready, not when pressured

### What This Means

- ✅ Automated research that respects your time
- ✅ Intelligent filtering that preserves your attention
- ✅ Guided learning that builds genuine understanding
- ❌ No FOMO creation or anxiety triggers
- ❌ No information firehose or overwhelm
- ❌ No dependency on black-box systems

### The Promise

Use Tesseract to transform:
- Information → Understanding
- Updates → Improvements
- Knowledge → Wisdom
- Learning → Mastery

**Not to make you know everything, but to help you know what matters.**

**"The lips of wisdom are closed, except to the ears of Understanding."** *- The Kybalion*

[Read full philosophy →](PHILOSOPHY.md)

---

**Built with intention. Curated with care. In service of genuine wisdom.**

---

## Part of the Libre Open-Source Stack for Claude Code

This repository is part of a growing family of open-source toolkits for Claude Code.

### Libre suite — comprehensive plugin bundles

- [LibreUIUX-Claude-Code](https://github.com/HermeticOrmus/LibreUIUX-Claude-Code) — UI/UX development (152 agents, 70 plugins, 76 commands, 74 skills)
- [LibreArch-Claude-Code](https://github.com/HermeticOrmus/LibreArch-Claude-Code) — Software architecture and system design
- [LibreCopy-Claude-Code](https://github.com/HermeticOrmus/LibreCopy-Claude-Code) — Technical writing and documentation engineering
- [LibreDevOps-Claude-Code](https://github.com/HermeticOrmus/LibreDevOps-Claude-Code) — DevOps engineering and infrastructure automation
- [LibreEmbed-Claude-Code](https://github.com/HermeticOrmus/LibreEmbed-Claude-Code) — Embedded systems, firmware, and IoT development
- [LibreFinTech-Claude-Code](https://github.com/HermeticOrmus/LibreFinTech-Claude-Code) — Financial technology development
- [LibreGEO-Claude-Code](https://github.com/HermeticOrmus/LibreGEO-Claude-Code) — AI-search optimization (ChatGPT, Perplexity, Gemini, Google AI Overviews)
- [LibreGameDev-Claude-Code](https://github.com/HermeticOrmus/LibreGameDev-Claude-Code) — Game development across Godot, Unity, Unreal
- [LibreMLOps-Claude-Code](https://github.com/HermeticOrmus/LibreMLOps-Claude-Code) — ML engineering and AI operations
- [LibreMobileDev-Claude-Code](https://github.com/HermeticOrmus/LibreMobileDev-Claude-Code) — Mobile app development (Flutter, React Native, native iOS, native Android)
- [LibreSecOps-Claude-Code](https://github.com/HermeticOrmus/LibreSecOps-Claude-Code) — Security operations

### Skills mini-repos — single CLAUDE.md drop-ins

- [vibe-engineer-skills](https://github.com/HermeticOrmus/vibe-engineer-skills) — Direct AI codegen well (hypothesis → scope → validate → reject working-but-wrong)
- [markdown-discipline-skills](https://github.com/HermeticOrmus/markdown-discipline-skills) — Strip AI-slop from markdown (no em dashes, no marketing fluff)
- [shell-safety-skills](https://github.com/HermeticOrmus/shell-safety-skills) — `set -euo pipefail` discipline + 15 failure-mode examples
- [commit-standard-skills](https://github.com/HermeticOrmus/commit-standard-skills) — Ormus Commit Standard v1.0 + commit-msg hook + commitlint
- [unwoke-skills](https://github.com/HermeticOrmus/unwoke-skills) — Strip AI theater (ten sins to eliminate, symmetric engagement)
- [python-conventions-skills](https://github.com/HermeticOrmus/python-conventions-skills) — Modern Python 3.11+ (types, pathlib, async, ruff, mypy, uv)
- [typescript-conventions-skills](https://github.com/HermeticOrmus/typescript-conventions-skills) — TypeScript strict mode, discriminated unions, Result types
- [hermetic-laws-skills](https://github.com/HermeticOrmus/hermetic-laws-skills) — Seven Hermetic Principles applied to engineering
- [riper-workflow-skills](https://github.com/HermeticOrmus/riper-workflow-skills) — Research / Innovate / Plan / Execute / Review systematic dev
- [six-day-cycle-skills](https://github.com/HermeticOrmus/six-day-cycle-skills) — Sustainable shipping cadence with mandatory rest
- [token-optimization-skills](https://github.com/HermeticOrmus/token-optimization-skills) — Claude Code token + context optimization
- [osint-skills](https://github.com/HermeticOrmus/osint-skills) — OSINT research methodology (multi-wave investigative spiral)
- [calcinate-skills](https://github.com/HermeticOrmus/calcinate-skills) — Stage 1 of the Magnum Opus (burn project bloat)
- [claude-md-overhaul-skills](https://github.com/HermeticOrmus/claude-md-overhaul-skills) — Audit CLAUDE.md and MEMORY.md against caps
- [session-handoff-skills](https://github.com/HermeticOrmus/session-handoff-skills) — Session handoff + pickup discipline
- [naming-skills](https://github.com/HermeticOrmus/naming-skills) — Product naming methodology (mine the brand's vocabulary)
- [magnum-opus-skills](https://github.com/HermeticOrmus/magnum-opus-skills) — Seven-stage alchemy applied to project transformation

### Template source

- [andrej-karpathy-skills](https://github.com/HermeticOrmus/andrej-karpathy-skills) — the canonical single-file CLAUDE.md pattern (fork of jiayuan_jy's original)

Star the family, not just one — that's how the suite stays coherent.
