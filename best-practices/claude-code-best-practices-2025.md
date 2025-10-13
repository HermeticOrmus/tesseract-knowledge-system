# Claude Code Best Practices 2025

**Source:** Official Claude Code Documentation (2025-10-12)
**Knowledge Base:** 547KB cached documentation

---

## 🎯 Core Best Practices

### 1. **Use Plan Mode for Complex Tasks**

**What:** Plan Mode lets Claude analyze code and plan changes before executing them.

**When to use:**
- Complex refactoring across multiple files
- When you want to understand changes before they happen
- Working with unfamiliar codebases
- Safety-critical changes

**How to enable:**
```bash
# In Claude Code
Type: "Plan mode: [your request]"

# Or set as default in settings.json
{
  "defaultMode": "plan"
}
```

**Your Integration:** Add `/plan` custom command for quick access

---

### 2. **Leverage Sub-Agents for Specialized Tasks**

**What:** Sub-agents are specialized AI agents with specific expertise and limited tool access.

**Best practices:**
- **Automatic delegation:** Claude automatically chooses the right sub-agent
- **Explicit invocation:** Specify which agent you want
- **Tool restrictions:** Limit agents to only necessary tools
- **Context management:** Agents maintain focused context

**Key benefits:**
- Parallelization of tasks
- Specialized instructions
- Better context management
- Reduced token usage

**Your Integration:** You already have 39 agents! Verify they follow these patterns:
- Clear, specific descriptions
- Appropriate tool restrictions
- 3-4 usage examples with context

---

### 3. **Master Custom Slash Commands**

**Best practices:**
- **Use namespacing:** Organize commands by category
- **Add arguments:** `$ARGUMENTS`, `$1`, `$2` for flexibility
- **File references:** Include context from specific files
- **Bash execution:** Integrate with existing scripts
- **Thinking mode:** Enable for complex commands

**Syntax:**
```markdown
---
name: analyze-deps
description: Analyze project dependencies
---
Analyze package.json and identify:
- Outdated packages
- Security vulnerabilities
- Unused dependencies
```

**Your Integration:** You have 11 commands. Add more for common workflows!

---

### 4. **Implement Hooks for Automation**

**What:** Hooks let you run scripts at specific events in Claude Code lifecycle.

**Available hooks:**
- **PreToolUse:** Before Claude uses a tool
- **PostToolUse:** After tool execution
- **UserPromptSubmit:** When you submit a prompt
- **SessionStart/End:** Session lifecycle
- **Notification:** For important events
- **PreCompact:** Before compacting conversation

**Use cases:**
- **Code formatting:** Auto-format on PostToolUse
- **Git automation:** Auto-commit after changes
- **Notifications:** Alert on long operations
- **File protection:** Prevent edits to sensitive files
- **Custom validation:** Check code before execution

**Example (settings.json):**
```json
{
  "hooks": {
    "postToolUse": {
      "bash": "/path/to/format.sh"
    }
  }
}
```

**Your Integration:** Create hooks for:
- Auto-formatting code
- Git commit automation
- Project-specific validations

---

### 5. **Optimize Memory and Context**

**CLAUDE.md best practices:**
- Keep project-specific context
- Document coding standards
- List common commands
- Explain architecture decisions
- Include API endpoints
- Document environment setup

**Memory shortcuts:**
- Use `#` to quickly add memories
- Use `/memory` to edit directly
- Organize by project scope

**Your Integration:** Create CLAUDE.md for active projects with:
- Project structure
- Development workflow
- Common commands
- API documentation
- Testing procedures

---

### 6. **Permission Management**

**Best practices:**
- **Principle of least privilege:** Only grant necessary permissions
- **Use wildcards wisely:** `Bash(git:*)` vs individual commands
- **Project-specific permissions:** Scope to project needs
- **Regular audits:** Review and remove unused permissions

**Permission hierarchy:**
1. Project-level settings
2. User-level settings
3. Global settings

**Your Integration:** You have 96 permissions. Consolidate to ~60 using wildcards (already templated in `settings.local.OPTIMIZED.json`).

---

### 7. **MCP Server Strategy**

**Best practices:**
- **Choose the right scope:**
  - **Local:** Project-specific servers
  - **Project:** Shared across team
  - **User:** Personal tools across projects

- **Authentication:** Use environment variables for secrets
- **Resource management:** Set output limits
- **Use MCP prompts as slash commands:** `/mcp:prompt-name`

**Popular MCP servers you should consider:**
- **Sequential Thinking:** Better problem-solving
- **GitHub:** Repository management
- **Sentry:** Error monitoring
- **Notion:** Knowledge base integration
- **Zapier:** Connect to thousands of apps

**Your Integration:** You have 12 MCP servers. Add:
- GitHub MCP (you do lots of git operations)
- Sequential Thinking MCP (complex problem-solving)
- Consider Zapier for automation

---

### 8. **Cost Optimization**

**Best practices:**
- **Use `/cost` regularly:** Track spending per session
- **Compact conversations:** Use `/compact` to reduce context
- **Limit context:** Reference specific files, not entire codebases
- **Use extended thinking selectively:** Only when needed
- **Monitor cache usage:** Leverage prompt caching

**Cost-saving tips:**
- Reference files explicitly instead of searching
- Use Plan Mode for analysis (doesn't execute)
- Compact after major milestones
- Set up usage monitoring

**Your Integration:** Add cost tracking to your `/daily` command.

---

### 9. **Workflow Optimization**

**Essential commands:**
```bash
# Git workflow
/new-pr          # Create pull request
/fix-bug         # Debug workflow
/refactor        # Safe refactoring

# Code quality
/test            # Run tests
/review          # Code review

# Context management
/compact         # Reduce context
/memory          # Update project memory
```

**Common workflows:**
1. **Bug fixing:**
   - Describe bug
   - Claude searches codebase
   - Claude proposes fix
   - Review in Plan Mode
   - Execute fix
   - Run tests

2. **Feature development:**
   - Start with `/daily`
   - Use Plan Mode to architect
   - Implement incrementally
   - Test at each step
   - Create PR with `/new-pr`

3. **Code review:**
   - Use specialized sub-agent
   - Request specific review types
   - Get actionable feedback
   - Apply improvements

**Your Integration:** Document your workflows in custom commands.

---

### 10. **Output Styles for Consistency**

**What:** Persistent configurations for Claude's behavior and output format.

**Use cases:**
- Consistent code style
- Specific output formats (JSON, markdown)
- Custom persona
- Domain-specific language

**Create output style:**
```bash
# In .claude/output-styles/technical.md
You are a senior engineer who:
- Writes TypeScript following Airbnb style guide
- Always includes JSDoc comments
- Prefers functional programming
- Writes comprehensive tests
```

**Your Integration:** Create output styles for:
- Different programming languages
- Documentation writing
- Code review style
- Architecture discussions

---

## 🚀 Advanced Practices

### 11. **Git Worktrees for Parallel Sessions**

**What:** Run multiple Claude Code sessions simultaneously on different branches.

**Use case:**
- Work on feature while reviewing PR
- Test different approaches in parallel
- Isolate experimental changes

**Setup:**
```bash
git worktree add ../feature-branch feature-branch
cd ../feature-branch
claude  # New isolated session
```

---

### 12. **Extended Thinking for Complex Problems**

**What:** Claude thinks longer for better solutions.

**When to use:**
- Complex algorithms
- Architecture decisions
- Debugging hard problems
- Strategic planning

**How:**
- Automatic for Opus model
- Manual: Start prompt with "Think deeply about..."

---

### 13. **Use Claude as Unix Utility**

**What:** Pipe data to/from Claude in scripts.

**Examples:**
```bash
# Analyze logs
cat error.log | claude "Summarize these errors"

# Generate code
claude "Create Python function" > function.py

# Code review
git diff | claude "Review these changes"
```

---

### 14. **GitHub Actions Integration**

**What:** Automate workflows with Claude in CI/CD.

**Use cases:**
- Auto-respond to issues
- Generate PR descriptions
- Review code automatically
- Update documentation
- Fix lint errors

**Best practices:**
- Use CLAUDE.md for context
- Limit permissions
- Monitor CI costs
- Test locally first

**Your Integration:** Add GitHub Actions for:
- Automated code review
- PR description generation
- Documentation updates

---

### 15. **Session Management**

**Best practices:**
- **Resume sessions:** Continue previous conversations
- **Session history:** Review past work
- **Clear sessions:** Start fresh when needed
- **Export sessions:** Save important conversations

**Commands:**
```bash
/history         # View session history
/clear           # Start new session
/resume          # Continue last session
```

---

## 📋 Integration Checklist for Your Setup

### Immediate (This Week)

- [ ] **Create CLAUDE.md for your top 3 active projects**
  - Document structure, conventions, common commands

- [ ] **Set up hooks for code formatting**
  - PostToolUse hook for auto-formatting

- [ ] **Add GitHub MCP server**
  - `npm install -g @modelcontextprotocol/server-github`

- [ ] **Adopt optimized permissions**
  - Replace `settings.local.json` with `settings.local.OPTIMIZED.json`

- [ ] **Create 3 output styles**
  - One for each primary language you use

- [ ] **Document your workflows**
  - Add to custom slash commands

### This Month

- [ ] **Set up cost monitoring**
  - Add `/cost` to daily routine
  - Monitor and optimize

- [ ] **Create hooks for common tasks**
  - Git automation
  - Testing automation
  - Notification system

- [ ] **Install 3 new high-value MCP servers**
  - Sequential Thinking
  - Notion (if you use it)
  - Zapier/automation tool

- [ ] **Set up GitHub Actions**
  - Automated code review
  - PR description generation

- [ ] **Create project-specific commands**
  - One set per major project

- [ ] **Implement memory system**
  - Use `#` shortcut regularly
  - Organize project memories

### Quarterly

- [ ] **Review and optimize agents**
  - Update descriptions
  - Add new specialized agents
  - Remove unused ones

- [ ] **Audit permissions**
  - Remove unused
  - Consolidate with wildcards

- [ ] **Update output styles**
  - Refine based on experience

- [ ] **Review MCP servers**
  - Add new valuable servers
  - Remove underused ones

- [ ] **Clean configuration**
  - Run `/optimize-config`
  - Archive old projects

- [ ] **Update documentation**
  - CLAUDE.md files
  - Custom commands
  - Workflow docs

---

## 🎯 Quick Wins (Implement Today)

### 1. Use Plan Mode for Next Refactor
```bash
Plan mode: Refactor the authentication module
```

### 2. Create Your First Hook
```json
{
  "hooks": {
    "postToolUse": {
      "edit": "echo 'File edited successfully' | terminal-notifier"
    }
  }
}
```

### 3. Add Cost Tracking to Daily Routine
Update `/daily` command to include `/cost` check.

### 4. Create CLAUDE.md for Current Project
```markdown
# Project: [Name]

## Structure
- src/ - Source code
- tests/ - Test files

## Commands
- npm run dev - Start dev server
- npm test - Run tests

## Standards
- Use TypeScript
- Follow Prettier config
- Write tests for new features
```

### 5. Set Up Sequential Thinking MCP
```bash
# Check MCP directory
cd ~/.claude/tesseract/docs-cache
grep -i "sequential" mcp-servers-2025-10-12.md
```

---

## 📚 Resources

**Your Documentation:**
- `.claude/tesseract/docs-cache/` - Full cached docs
- `.claude/tesseract/QUICK_START.md` - Getting started
- `.claude/SETUP_IMPROVEMENTS.md` - Recent improvements

**Official Docs:**
- https://docs.claude.com/en/docs/claude-code/
- https://modelcontextprotocol.io/

**Community:**
- r/mcp Reddit
- Discord Server
- MCP Server Directory: https://glama.ai/mcp/servers

---

## 💡 Pro Tips

1. **Start every session with `/daily`** - Get oriented
2. **Use Plan Mode for anything risky** - Safety first
3. **Reference files explicitly** - Save tokens
4. **Compact after major milestones** - Reduce context
5. **Use sub-agents for specialized tasks** - Better results
6. **Create commands for repetitive tasks** - Save time
7. **Use hooks for automation** - Set it and forget it
8. **Monitor costs regularly** - `/cost` is your friend
9. **Keep CLAUDE.md updated** - Better context
10. **Experiment with MCP servers** - Expand capabilities

---

**Last Updated:** 2025-10-12
**Source:** Official Claude Code Documentation + 547KB Cached Knowledge Base
**Your Tesseract Version:** 1.0.0

*Run `/tesseract-review` to see how to apply these practices to your setup.*
