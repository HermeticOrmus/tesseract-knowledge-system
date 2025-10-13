#!/bin/bash

# Claude Code Plugin Creator
# Automates the creation of new plugins from your existing components

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔮 Claude Code Plugin Creator${NC}"
echo ""

# Get plugin details
read -p "Plugin name (e.g., hermetic-agents-pack): " PLUGIN_NAME
read -p "Plugin description: " PLUGIN_DESC
read -p "Your name: " AUTHOR_NAME
read -p "Your email: " AUTHOR_EMAIL
read -p "Your GitHub username: " GITHUB_USER
read -p "Plugin version (default: 1.0.0): " VERSION
VERSION=${VERSION:-1.0.0}

# Create plugin directory
PLUGIN_DIR="$HOME/.claude/plugins/$PLUGIN_NAME"
echo ""
echo -e "${BLUE}Creating plugin directory...${NC}"
mkdir -p "$PLUGIN_DIR"/{agents,commands,hooks,output-styles,examples}

cd "$PLUGIN_DIR"

# Initialize Git
echo -e "${BLUE}Initializing Git repository...${NC}"
git init

# Create plugin.json
echo -e "${BLUE}Creating plugin.json...${NC}"
cat > plugin.json << EOF
{
  "name": "$PLUGIN_NAME",
  "version": "$VERSION",
  "description": "$PLUGIN_DESC",
  "author": {
    "name": "$AUTHOR_NAME",
    "email": "$AUTHOR_EMAIL",
    "url": "https://github.com/$GITHUB_USER"
  },
  "license": "MIT",
  "keywords": [
    "claude-code",
    "plugin"
  ],
  "homepage": "https://github.com/$GITHUB_USER/$PLUGIN_NAME",
  "repository": {
    "type": "git",
    "url": "https://github.com/$GITHUB_USER/$PLUGIN_NAME.git"
  },
  "bugs": {
    "url": "https://github.com/$GITHUB_USER/$PLUGIN_NAME/issues"
  },
  "main": "plugin.json",
  "files": [
    "agents/**",
    "commands/**",
    "hooks/**",
    "output-styles/**",
    "examples/**",
    "README.md",
    "CHANGELOG.md",
    "LICENSE"
  ],
  "claude": {
    "minVersion": "1.0.0",
    "maxVersion": "2.0.0"
  },
  "categories": [
    "productivity"
  ],
  "compatibility": {
    "platforms": ["win32", "darwin", "linux"],
    "mcpServers": []
  },
  "configuration": {
    "defaults": {}
  },
  "activation": {
    "onInstall": "echo '✅ $PLUGIN_NAME installed!'",
    "onActivate": "echo '✅ $PLUGIN_NAME activated!'",
    "onDeactivate": "echo '⏸️ $PLUGIN_NAME deactivated.'"
  }
}
EOF

# Create README.md
echo -e "${BLUE}Creating README.md...${NC}"
cat > README.md << 'EOF'
# ${PLUGIN_NAME}

${PLUGIN_DESC}

## Installation

```bash
/plugin install ${PLUGIN_NAME}
```

Or install from GitHub:
```bash
/plugin install https://github.com/${GITHUB_USER}/${PLUGIN_NAME}
```

## Usage

[Describe how to use your plugin]

## What's Included

[List components]

## Requirements

- Claude Code 1.0.0+
- No external dependencies

## License

MIT License - See LICENSE file for details.

## Credits

Created by ${AUTHOR_NAME}

---

⭐ Star this repo if you find it useful!
EOF

# Substitute variables in README
sed -i "s/\${PLUGIN_NAME}/$PLUGIN_NAME/g" README.md 2>/dev/null || \
sed -i '' "s/\${PLUGIN_NAME}/$PLUGIN_NAME/g" README.md 2>/dev/null || true

sed -i "s/\${PLUGIN_DESC}/$PLUGIN_DESC/g" README.md 2>/dev/null || \
sed -i '' "s/\${PLUGIN_DESC}/$PLUGIN_DESC/g" README.md 2>/dev/null || true

sed -i "s/\${GITHUB_USER}/$GITHUB_USER/g" README.md 2>/dev/null || \
sed -i '' "s/\${GITHUB_USER}/$GITHUB_USER/g" README.md 2>/dev/null || true

sed -i "s/\${AUTHOR_NAME}/$AUTHOR_NAME/g" README.md 2>/dev/null || \
sed -i '' "s/\${AUTHOR_NAME}/$AUTHOR_NAME/g" README.md 2>/dev/null || true

# Create CHANGELOG.md
echo -e "${BLUE}Creating CHANGELOG.md...${NC}"
cat > CHANGELOG.md << EOF
# Changelog

## [$VERSION] - $(date +%Y-%m-%d)

### Added
- Initial release of $PLUGIN_NAME
EOF

# Create LICENSE
echo -e "${BLUE}Creating LICENSE...${NC}"
cat > LICENSE << EOF
MIT License

Copyright (c) $(date +%Y) $AUTHOR_NAME

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

# Create .gitignore
echo -e "${BLUE}Creating .gitignore...${NC}"
cat > .gitignore << 'EOF'
# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Node modules if any
node_modules/

# Logs
*.log
EOF

# Create getting started example
echo -e "${BLUE}Creating getting started example...${NC}"
cat > examples/getting-started.md << 'EOF'
# Getting Started

## Installation

```bash
/plugin install ${PLUGIN_NAME}
```

## Quick Start

[Add quick start instructions]

## Examples

[Add usage examples]
EOF

# Create .github directory for issues and PR templates
mkdir -p .github
cat > .github/ISSUE_TEMPLATE.md << 'EOF'
**Describe the issue:**

**Steps to reproduce:**
1.
2.
3.

**Expected behavior:**

**Actual behavior:**

**Environment:**
- Claude Code version:
- OS:
- Plugin version:
EOF

# Ask what to include in the plugin
echo ""
echo -e "${YELLOW}What would you like to include in this plugin?${NC}"
echo "1. Copy agents from ~/.claude/agents/"
echo "2. Copy commands from ~/.claude/commands/"
echo "3. Copy hooks from ~/.claude/hooks/"
echo "4. Copy output styles from ~/.claude/output-styles/"
echo "5. Skip copying (I'll add files manually)"
read -p "Choose (1-5): " COPY_CHOICE

case $COPY_CHOICE in
  1)
    echo -e "${BLUE}Copying agents...${NC}"
    if [ -d "$HOME/.claude/agents" ]; then
      cp "$HOME/.claude/agents"/*.md ./agents/ 2>/dev/null || true
      AGENT_COUNT=$(ls -1 ./agents/*.md 2>/dev/null | wc -l)
      echo -e "${GREEN}✅ Copied $AGENT_COUNT agents${NC}"
    fi
    ;;
  2)
    echo -e "${BLUE}Copying commands...${NC}"
    if [ -d "$HOME/.claude/commands" ]; then
      cp "$HOME/.claude/commands"/*.md ./commands/ 2>/dev/null || true
      CMD_COUNT=$(ls -1 ./commands/*.md 2>/dev/null | wc -l)
      echo -e "${GREEN}✅ Copied $CMD_COUNT commands${NC}"
    fi
    ;;
  3)
    echo -e "${BLUE}Copying hooks...${NC}"
    if [ -d "$HOME/.claude/hooks" ]; then
      cp "$HOME/.claude/hooks"/* ./hooks/ 2>/dev/null || true
      HOOK_COUNT=$(ls -1 ./hooks/* 2>/dev/null | wc -l)
      echo -e "${GREEN}✅ Copied $HOOK_COUNT hooks${NC}"
    fi
    ;;
  4)
    echo -e "${BLUE}Copying output styles...${NC}"
    if [ -d "$HOME/.claude/output-styles" ]; then
      cp "$HOME/.claude/output-styles"/*.md ./output-styles/ 2>/dev/null || true
      STYLE_COUNT=$(ls -1 ./output-styles/*.md 2>/dev/null | wc -l)
      echo -e "${GREEN}✅ Copied $STYLE_COUNT output styles${NC}"
    fi
    ;;
  5)
    echo -e "${YELLOW}Skipping file copy. Add your files manually to the directories.${NC}"
    ;;
esac

# Validate plugin.json
echo ""
echo -e "${BLUE}Validating plugin.json...${NC}"
if python -c "import json; json.load(open('plugin.json'))" 2>/dev/null; then
  echo -e "${GREEN}✅ plugin.json is valid JSON${NC}"
else
  echo -e "${YELLOW}⚠️ plugin.json validation failed. Please check syntax.${NC}"
fi

# Initial commit
echo ""
echo -e "${BLUE}Creating initial commit...${NC}"
git add .
git commit -m "Initial commit: $PLUGIN_NAME v$VERSION

- Plugin structure created
- Documentation added
- Ready for development"

# Summary
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Plugin created successfully!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}Plugin location:${NC} $PLUGIN_DIR"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. cd $PLUGIN_DIR"
echo "2. Add/edit files in agents/, commands/, etc."
echo "3. Update README.md with details"
echo "4. Test: python -c \"import json; json.load(open('plugin.json'))\""
echo "5. Create GitHub repo:"
echo "   gh repo create $PLUGIN_NAME --public --source=. --remote=origin --push"
echo "6. Create release:"
echo "   gh release create v$VERSION --title \"v$VERSION - Initial Release\""
echo ""
echo -e "${BLUE}To publish:${NC}"
echo "Users can install with:"
echo "  /plugin install https://github.com/$GITHUB_USER/$PLUGIN_NAME"
echo ""
echo -e "${GREEN}Happy plugin building! 🚀${NC}"
