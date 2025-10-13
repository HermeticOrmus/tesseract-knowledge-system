You are reviewing Claude Tesseract updates to identify valuable improvements.

**Your task:**
Analyze fetched updates and help the user understand what's new, what's relevant, and what actions to take.

**Workflow:**

**Phase 1: Load Recent Updates**

1. Check `tesseract/updates/` for recent update summaries
2. Review `tesseract/docs-cache/` for fetched documentation
3. Read the tesseract config to understand user preferences
4. Check `tesseract/applied/adoption-log.md` to see what's already implemented

**Phase 2: Categorize & Prioritize**

Group updates by:

**🔴 Critical (Act Now)**
- Security updates
- Breaking changes
- Deprecated features affecting user's setup
- Bug fixes for issues user might have

**🟡 High Value (This Week)**
- New features matching user's workflow
- Performance improvements
- Highly recommended MCP servers
- Workflow optimizations

**🟢 Nice to Have (Eventually)**
- Experimental features
- Minor improvements
- Future considerations
- Advanced capabilities

**⚪ Not Applicable**
- Features user won't use
- Incompatible with user's setup
- Already implemented

**Phase 3: Deep Analysis**

For each high-priority item:

1. **What is it?**
   - Clear explanation
   - Why it exists
   - What problem it solves

2. **Why is it relevant to you?**
   - Matches your workflow patterns
   - Solves a pain point
   - Enhances existing capabilities
   - Future-proofs your setup

3. **What would implementation involve?**
   - Time required (5min / 30min / 2hr / 1day)
   - Complexity (simple / moderate / complex)
   - Prerequisites
   - Risks and considerations

4. **What's the expected benefit?**
   - Time savings
   - Capability enhancement
   - Quality improvement
   - Risk reduction

**Phase 4: Create Action Plan**

Generate prioritized action plan:

```markdown
# Tesseract Review - Action Plan

## 🚀 Quick Wins (< 30 minutes)
1. [Action] - [Expected benefit] - [How to do it]
2. ...

## 💪 High Impact (1-2 hours)
1. [Action] - [Expected benefit] - [How to do it]
2. ...

## 🎯 Strategic (Future)
1. [Action] - [Expected benefit] - [How to do it]
2. ...

## 📚 Learn More
1. [Topic] - [Why interesting] - [Resource link]
2. ...
```

**Phase 5: Provide Recommendations**

For top 3-5 items, provide:
- Detailed explanation
- Step-by-step implementation guide
- Offer to implement now (if approved)
- Alternative approaches if applicable

**Interactive Mode:**

Ask user:
1. "Which category do you want to explore first?"
2. "Would you like me to implement [specific item]?"
3. "Should I create a detailed guide for [topic]?"
4. "Any specific areas of interest to deep-dive?"

**Output Format:**

```
# 📊 Tesseract Review Summary

Last sync: YYYY-MM-DD
Items analyzed: X new updates

## 🎯 Top Recommendations

### 1. [Most Important Item]
**Why:** [Relevance to your setup]
**Effort:** [Time required]
**Benefit:** [Expected impact]
**Action:** [What to do]

[Repeat for top 5 items]

## 📈 By Category

Critical: X items
High Value: X items
Nice to Have: X items
Not Applicable: X items

## 💡 Insight

[One key insight or pattern from the updates]

## 🔄 Next Steps

1. [Most immediate action]
2. [Second priority]
3. [Third priority]

Run /tesseract-apply to implement any of these.
```

**Tools to Use:**
- Read - Load update files and current config
- Grep - Search for specific features or patterns
- WebFetch - Get additional details if needed
- Write - Create action plans and guides

**Success Criteria:**
- User clearly understands what's new
- Priorities are obvious
- Implementation paths are clear
- User feels informed, not overwhelmed

Make it actionable. Make it relevant. Make it clear.
