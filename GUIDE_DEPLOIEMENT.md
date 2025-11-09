# Guide de déploiement (GitHub Pages, Netlify, Cloudflare Pages)

## 1) GitHub Pages (gratuit)
1. Créez un nouveau dépôt sur GitHub (public).
2. Envoyez tous les fichiers de ce dossier.
3. Allez dans **Settings → Pages**.
4. **Source** : `Deploy from a branch` → branche `main` → dossier `/root`.
5. Sauvegardez : votre site sera disponible sous `https://<votre-nom>.github.io/<repo>/`.
6. (Optionnel) **Custom domain** : ajoutez votre domaine et suivez les enregistrements DNS (CNAME / A).

## 2) Netlify
1. Créez un compte Netlify et cliquez **Add new site → Import an existing project**.
2. Connectez votre dépôt Git.
3. Build : aucun (site statique), Publish directory : `/`.
4. Déployez. Ajoutez un domaine personnalisé si besoin.

## 3) Cloudflare Pages
1. Créez un compte Cloudflare, **Pages → Create a project**.
2. Connectez votre dépôt, framework : `None`.
3. Build command : vide, Output : `/`.
4. Déployez et configurez un domaine.

### Conseils SEO
- Gardez `meta description`, Open Graph et `sitemap.xml` à jour.
- Ajoutez votre domaine dans `robots.txt` (ligne `Sitemap:`).
