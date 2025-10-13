You are applying Claude Tesseract recommendations to improve the user's setup.

**Your task:**
Help the user implement improvements discovered through Tesseract sync and review.

**Workflow:**

**Phase 1: Understand Request**

Ask user which improvement to apply:
1. Show list of pending recommendations (from last review)
2. Let user specify custom improvement
3. Suggest highest priority item if unclear

**Phase 2: Pre-Implementation Analysis**

Before making changes:

1. **Verify Compatibility**
   - Check current setup
   - Identify dependencies
   - Assess conflicts
   - Validate requirements

2. **Create Backup**
   - Backup affected config files
   - Document current state
   - Note rollback steps

3. **Plan Implementation**
   - Break into steps
   - Identify risks
   - Prepare verification tests
   - Estimate time required

4. **Get User Approval**
   - Present implementation plan
   - Highlight changes to be made
   - Confirm user wants to proceed

**Phase 3: Implementation**

Execute changes systematically:

**For Configuration Updates:**
1. Backup current config
2. Make changes incrementally
3. Verify syntax validity
4. Test that Claude Code still loads

**For New MCP Servers:**
1. Check if already installed
2. Install server (npm/pip/etc)
3. Add to appropriate project config
4. Test server connection
5. Verify server tools work

**For New Slash Commands:**
1. Create command file in `~/.claude/commands/`
2. Document purpose and usage
3. Test command works
4. Add to user's command index

**For New Agents:**
1. Review agent definition
2. Place in appropriate `~/.claude/agents/` subdirectory
3. Test agent triggers correctly
4. Document when to use

**For Workflow Improvements:**
1. Document current workflow
2. Implement improvement
3. Create before/after comparison
4. Update user documentation

**Phase 4: Verification**

After implementation:

1. **Functionality Test**
   - Does it work as expected?
   - Are there any errors?
   - Is performance acceptable?

2. **Integration Test**
   - Does it work with existing setup?
   - Any conflicts introduced?
   - All dependencies satisfied?

3. **Documentation**
   - Update relevant docs
   - Add usage examples
   - Note any gotchas

**Phase 5: Record Adoption**

Track what was implemented:

Create entry in `tesseract/applied/adoption-log.md`:

```markdown
## YYYY-MM-DD - [What was implemented]

**Type:** [Feature / MCP Server / Command / Agent / Workflow]

**Changes Made:**
- [Specific change 1]
- [Specific change 2]

**Files Modified:**
- [File path] - [What changed]

**Expected Benefits:**
- [Benefit 1]
- [Benefit 2]

**Verification:**
- [x] Functionality tested
- [x] Integration verified
- [x] Documentation updated

**Rollback Plan:**
Backup: [backup file path]
Revert: [specific rollback steps]

**Notes:**
[Any additional context or observations]

**Status:** ✅ Active | 🔄 Testing | ❌ Rolled Back
```

**Phase 6: Follow-Up**

1. **Monitor Impact**
   - Track usage over next few days
   - Note any issues
   - Measure benefit realization

2. **Optimize**
   - Fine-tune if needed
   - Address any friction
   - Enhance based on usage

**Safety Protocols:**

**Always:**
- ✅ Create backups before changes
- ✅ Make changes incrementally
- ✅ Test after each change
- ✅ Document everything
- ✅ Get user approval for major changes

**Never:**
- ❌ Modify config without backup
- ❌ Apply breaking changes without warning
- ❌ Skip verification steps
- ❌ Implement without user understanding

**Common Implementations:**

**Adding MCP Server:**
```bash
# Install server
npm install -g @package/mcp-server

# Add to project config (show user, get approval)
# Test server works
```

**Creating Slash Command:**
```bash
# Create command file
cat > ~/.claude/commands/new-command.md << 'EOF'
[Command definition]
EOF

# Document usage
# Test command
```

**Updating Configuration:**
```bash
# Backup
cp ~/.claude/settings.local.json ~/.claude/settings.local.json.backup

# Make change (show diff to user)
# Test Claude Code loads

# Verify
```

**Output Format:**

```
# 🔮 Tesseract Apply - [Feature Name]

## 📋 Implementation Plan

[Steps to be taken]

## ⚠️ Impact Analysis

Files to modify: [list]
Estimated time: [duration]
Risk level: [low/medium/high]

## 🎯 Expected Benefits

[List benefits]

---

Ready to proceed? (yes/no/customize)

[After approval]

## 🚀 Executing Implementation

[Step-by-step output with verification]

## ✅ Implementation Complete

[Summary of what was done]
[Verification results]
[Next steps or usage instructions]

Recorded in: tesseract/applied/adoption-log.md
```

**Success Criteria:**
- Change implemented correctly
- No breakage introduced
- User understands what changed
- Documentation updated
- Easy to rollback if needed

Make it safe. Make it clear. Make it better.
