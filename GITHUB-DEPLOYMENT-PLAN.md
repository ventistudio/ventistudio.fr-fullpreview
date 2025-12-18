# 📋 VentiStudio v6 – GitHub Deployment Plan

## Timeline: 3 Days

### Day 1: Preparation
- [ ] Clone repo
- [ ] Create feature branch
- [ ] Setup directory structure

### Day 2: Implementation
- [ ] Add all HTML pages
- [ ] Add CSS files
- [ ] Add JavaScript modules
- [ ] Add documentation

### Day 3: Testing & Deployment
- [ ] Run Lighthouse
- [ ] Test accessibility
- [ ] Test responsiveness
- [ ] Push to GitHub
- [ ] Create PR
- [ ] Merge to main

## Git Commands

```bash
# Setup
git clone https://github.com/ventistudio/ventistudio.fr.git
git checkout -b feature/v6-refonte

# Commit changes
git add .
git commit -m "feat: VentiStudio v6 complete refonte"

# Push
git push origin feature/v6-refonte

# Merge after PR approval
git checkout main
git merge feature/v6-refonte
```

## Success Criteria

- ✅ Lighthouse Performance ≥ 95
- ✅ Lighthouse Accessibility ≥ 95
- ✅ Lighthouse SEO = 100
- ✅ All links working
- ✅ Forms functional
- ✅ Mobile responsive