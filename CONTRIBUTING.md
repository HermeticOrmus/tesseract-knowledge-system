# Contributing to Tesseract Knowledge System

**Welcome, fellow knowledge seeker.** 🔮

Here's what's beautiful about contributing to Tesseract: every insight you share makes the system smarter for everyone. Your documentation becomes part of a living knowledge base that helps developers master Claude Code.

This isn't just about fixing bugs or adding features. It's about raising collective understanding.

---

💛 **Gold Hat Note**

When you contribute to Tesseract, you're not just improving a tool—you're building the knowledge infrastructure that helps an entire community work better with AI.

Your "aha!" moment becomes someone else's breakthrough. Your troubleshooting notes save the next person hours. Your pattern documentation reveals connections others might miss.

The craft grows when knowledge flows. Let's make this together.

---

## 🎯 Types of Contributions

### 1. Knowledge Contributions (Most Valuable!)

These are gold. Share what you've learned:

**Best Practices:**
- Workflow patterns that work for you
- Integration strategies you've discovered
- Agent configurations that solve specific problems
- Performance optimizations you've found

**Applied Knowledge:**
- Document what you've adopted from the knowledge base
- Share results (what worked, what didn't, why)
- Add your use case to help others assess relevance
- Include before/after metrics when possible

**Examples:**
- Real-world integration patterns
- Advanced workflow examples
- Problem-solving approaches
- Creative uses of Claude Code features

**Documentation:**
- Fill knowledge gaps you encountered
- Clarify confusing sections
- Add troubleshooting tips
- Expand examples

---

📝 **Field Notes from Hermetic Ormus**

The most valuable contributions aren't always code. Often, they're:

1. **Pattern documentation** - "Here's how X and Y work together"
2. **Troubleshooting notes** - "Hit this error? Here's what fixed it"
3. **Use case examples** - "Applied this for [specific scenario]"
4. **Workflow improvements** - "Discovered this makes [task] 10x faster"

Try this: Instead of just fixing your problem privately, document it in `applied/` or `best-practices/`. Include:
- What you were trying to do
- What went wrong
- How you solved it
- Why the solution works

Watch for: Others finding your notes helpful. That's how community knowledge compounds.

This works because: Your specific problem is probably someone else's future problem. Document it once, help many.

---

### 2. Code Contributions

**Web Platform:**
- UI/UX improvements
- New features for the knowledge portal
- Performance optimizations
- Bug fixes

**Automation Scripts:**
- Enhanced fetching logic
- Better curation algorithms
- Integration scripts
- Deployment tools

**Quality:**
- Test coverage
- Documentation
- Error handling
- Accessibility

### 3. Content Curation

**Updates:**
- Latest Claude Code features
- New MCP servers
- Community discoveries
- Breaking changes

**Best Practices:**
- Workflow optimizations
- Integration patterns
- Security recommendations
- Performance tips

**Examples:**
- Real-world use cases
- Advanced techniques
- Creative solutions
- Edge case handling

## 🚀 Quick Start for Contributors

### First Time Setup

```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/tesseract-knowledge-system.git
cd tesseract-knowledge-system

# 3. Create a branch
git checkout -b feature/your-contribution-name

# 4. Make your changes
# 5. Commit with clear messages
git add .
git commit -m "Add: [Your contribution description]"

# 6. Push to your fork
git push origin feature/your-contribution-name

# 7. Open a Pull Request
```

### For Knowledge Contributions

```bash
# Best practices
echo "# Your Practice Title\n\nYour insights here..." > best-practices/your-practice.md

# Applied knowledge
echo "# [Feature] Adoption - $(date +%Y-%m-%d)\n\nWhat you learned..." > applied/$(date +%Y-%m-%d)-your-adoption.md

# Examples
mkdir -p examples/your-use-case
echo "# Your Use Case\n\nDetailed example..." > examples/your-use-case/README.md

# Commit and push
git add .
git commit -m "Knowledge: Add [your contribution topic]"
git push origin your-branch-name
```

## ✍️ Writing Guidelines

Follow the **Hermetic Ormus Voice** (see [VOICE_GUIDE.md](VOICE_GUIDE.md)):

### Balance
- **Technical Rigor: 45%** - Be precise and accurate
- **Profound Wonder: 30%** - Show genuine enthusiasm for elegant solutions
- **Hacker Playfulness: 20%** - Reveal clever insights
- **Warm Encouragement: 5%** - Remember the beginner experience

### Sound Like
✅ Senior engineer showing an elegant solution
✅ Hacker explaining how they cracked the code
✅ Mentor who remembers being confused

### Don't Sound Like
❌ Mystical guru with secrets
❌ Dry academic textbook
❌ Corporate training manual

### Example

**❌ Too Dry:**
> "Configure the MCP server by editing the config file."

**❌ Too Mystical:**
> "The ancient patterns of the server shall reveal themselves to those who seek..."

**✅ Just Right:**
> "Here's the elegant part: MCP servers auto-discover each other through a simple config file. No hard-coded dependencies, no brittle connections. Your system can evolve without breaking. Watch how this works..."

## 📝 Documentation Standards

### Include These Sections

**For Best Practices:**
```markdown
# [Practice Name]

## Problem
What issue does this solve?

## Solution
How does it work? (with code/config examples)

## Why It Works
The underlying mechanism explained

## Try This
Actionable experiment readers can run

## Watch For
Expected results to validate understanding

## Field Notes
Your personal experience and insights
```

**For Examples:**
```markdown
# [Example Name]

## Use Case
What real-world problem does this solve?

## Implementation
Step-by-step with code

## Key Insights
What makes this approach work

## Variations
How to adapt for different scenarios

## Gotchas
Common pitfalls and how to avoid them
```

**For Updates:**
```markdown
# [Feature/Update Name] - YYYY-MM-DD

## What's New
Clear description of the change

## Why It Matters
Impact on workflows

## How to Use
Practical application

## Migration Guide
If replacing existing patterns

## References
Links to official docs
```

## 🧪 Testing Your Contribution

### For Documentation
- [ ] Run through your instructions fresh (do they actually work?)
- [ ] Check for broken links
- [ ] Verify code examples execute correctly
- [ ] Ensure file paths are accurate
- [ ] Test on a clean setup if possible

### For Code
- [ ] Test locally before committing
- [ ] Add error handling
- [ ] Include inline comments for complex logic
- [ ] Update relevant documentation
- [ ] Check for breaking changes

### For Knowledge
- [ ] Is it actionable? (Can someone apply this today?)
- [ ] Is it accurate? (Have you verified it works?)
- [ ] Is it complete? (Are there missing steps?)
- [ ] Is it clear? (Would a beginner understand?)

## 🎨 Code Style

### General Principles
- **Explain the "why"** - Comments should reveal intention, not just describe
- **Show wonder** - If something is elegant, say so and explain why
- **Be actionable** - Provide next steps
- **Think community** - Will this help others?

### Example
```typescript
// ❌ Basic comment
// Create stripe customer

// ✅ Hermetic Ormus style
// Here's the elegant part: we create the Stripe customer immediately on signup,
// even before they subscribe. This means upgrading is instant—no waiting for
// customer creation. The UX feels magical because the system is already prepared.
const customer = await stripe.customers.create({
  email: user.email,
  metadata: { userId: user.id }
})
```

## 📊 What Makes a Great Contribution?

### High-Impact Knowledge Contributions
1. **Fills a real gap** - Solves a problem you had
2. **Shows the pattern** - Not just the solution, but *why* it works
3. **Enables action** - Reader can implement immediately
4. **Shares context** - When/why to use this approach
5. **Saves time** - Helps others avoid your mistakes

### High-Impact Code Contributions
1. **Solves a real problem** - Addresses actual user needs
2. **Clean and clear** - Others can understand and maintain
3. **Well-tested** - Includes error handling
4. **Documented** - Explains the approach
5. **Preserves philosophy** - Maintains the Tesseract principles

## 🔄 Contribution Process

### 1. Discuss First (For Large Changes)
- Open an issue describing your idea
- Get feedback before investing time
- Ensure alignment with project goals

### 2. Create Thoughtfully
- Follow the voice guidelines
- Maintain technical accuracy
- Include examples
- Think about the next person

### 3. Submit Clearly
- Write descriptive commit messages
- Explain the "why" in your PR
- Reference related issues
- Include before/after if relevant

### 4. Collaborate Openly
- Respond to feedback constructively
- Be willing to iterate
- Ask questions if unclear
- Help reviewers understand your approach

## 🎁 Recognition

Contributors are recognized in:
- **Applied knowledge** - Your name on your contributions
- **Examples** - Author attribution on examples
- **Credits** - Listed in project credits
- **Community** - Reputation as knowledge sharer

More importantly: your insights become part of the living system that helps everyone.

## 💬 Questions?

- **Documentation unclear?** Open an issue - that's a contribution too!
- **Idea to discuss?** Start a discussion in GitHub Discussions
- **Found a bug?** Report it with details
- **Not sure where to start?** Check issues labeled `good-first-contribution`

## 🌟 Philosophy for Contributors

From the Hermetic principles:

**Mentalism** - Your mind created this insight. Share it so others' minds can grasp it too.

**Correspondence** - Patterns you discover at one level (your workflow) often apply at other levels (everyone's workflow).

**Vibration** - Your contribution raises the frequency of knowledge in the entire system.

**Rhythm** - Some will contribute code, others knowledge, others curation. All are valuable.

---

💛 **Gold Hat Note**

Remember: You're not just editing a repo. You're building knowledge infrastructure for an entire community of developers working with AI.

Every pattern you document, every insight you share, every gotcha you warn about—these become part of a growing body of collective understanding.

Your contribution today might be the breakthrough someone needs six months from now.

Document generously. Share openly. Explain clearly.

The Tesseract grows stronger with every contribution that raises collective understanding.

---

**"The lips of wisdom are closed, except to the ears of Understanding."** — The Kybalion

Thank you for contributing to the craft. 🙏

---

**Built with intention. Curated with care. In service of genuine wisdom.**
