#!/bin/bash

# Portfolio Setup Script
# This script helps you upgrade Node and run the portfolio

echo "🚀 Portfolio Setup Script"
echo "========================="
echo ""

# Check if nvm is installed
if ! command -v nvm &> /dev/null; then
    echo "📦 Installing nvm (Node Version Manager)..."
    curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
    
    # Load nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    
    echo "✅ nvm installed!"
else
    echo "✅ nvm already installed"
fi

# Load nvm in current shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo ""
echo "📥 Installing Node.js 20 (LTS)..."
nvm install 20
nvm use 20

echo ""
echo "✅ Node version:"
node -v

echo ""
echo "✅ npm version:"
npm -v

echo ""
echo "📦 Installing project dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎨 Next steps:"
echo "  1. Edit src/data/portfolio.ts with your personal information"
echo "  2. Update index.html with your name and meta tags"
echo "  3. Add your resume to public/resume.pdf"
echo "  4. Run 'npm run dev' to start the development server"
echo ""
echo "📖 See README.md for detailed customization instructions"
