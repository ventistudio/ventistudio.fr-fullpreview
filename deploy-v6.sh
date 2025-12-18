#!/bin/bash
# VentiStudio v6 Deployment Script
set -e

echo "🚀 VentiStudio v6 Deployment"
echo "========================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}[1/3] Checking prerequisites...${NC}"
if ! command -v git &> /dev/null; then
    echo "❌ Git not found"
    exit 1
fi
echo -e "${GREEN}✅ Prerequisites OK${NC}\n"

echo -e "${YELLOW}[2/3] Creating directory structure...${NC}"
mkdir -p css js assets/{images,data,favicons} docs .github/workflows
echo -e "${GREEN}✅ Structure created${NC}\n"

echo -e "${YELLOW}[3/3] Ready for deployment${NC}"
echo -e "${GREEN}✨ VentiStudio v6 is ready!${NC}"
echo ""
echo "Next steps:"
echo "1. Copy HTML, CSS, JS files"
echo "2. Run: lighthouse http://localhost:8000"
echo "3. Push to GitHub: git push origin feature/v6-refonte"
echo "4. Create PR on GitHub"