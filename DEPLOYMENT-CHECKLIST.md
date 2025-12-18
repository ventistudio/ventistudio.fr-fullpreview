# ✅ CHECKLIST DE DÉPLOIEMENT V6 – Actions Manuelles

**Destinataire**: Équipe VentiStudio  
**Date**: 19 décembre 2025  
**Durée estimée**: 2-3 jours  

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### Jour 1: Préparation

- [ ] **Git Setup**
  - [ ] Clone repo: `git clone https://github.com/ventistudio/ventistudio.fr.git`
  - [ ] Naviguez: `cd ventistudio.fr`
  - [ ] Vérifiez main: `git checkout main && git pull`

- [ ] **Créer branche feature**
  - [ ] `git checkout -b feature/v6-refonte`

### Jour 2: Copier fichiers

- [ ] **HTML Pages**
  - [ ] Copier `index.html` depuis ce repo
  - [ ] Créer autres pages HTML

- [ ] **CSS Files**
  - [ ] Créer `css/base.css` (design system)
  - [ ] Créer `css/components.css`
  - [ ] Créer `css/layout.css`
  - [ ] Créer `css/animations.css`

### Jour 2-3: Ajouter Assets & Tests

- [ ] **Performance Testing**
  - [ ] Lancer Lighthouse: `lighthouse https://localhost:8000`
  - [ ] Performance: ≥ 95
  - [ ] Accessibility: ≥ 95
  - [ ] SEO: 100

---

## ✨ Status: Ready for Production