# ScoreAfrica — Vercel

1. Décompressez le ZIP.
2. Sur GitHub, créez un dépôt VIDE nommé `scoreafrica`.
3. Entrez dans le dossier décompressé et envoyez **son contenu** à la racine du dépôt.
4. Sur GitHub, vous devez voir directement `app/`, `package.json`, `next.config.ts`, `vercel.json`.
5. Sur Vercel: New Project > Import Git Repository > scoreafrica.
6. Root Directory: `./`
7. Framework: Next.js.
8. Deploy.
9. Vercel > Settings > Environment Variables:
   - Name: `API_FOOTBALL_KEY`
   - Value: votre clé API-Football
10. Redéployer après l'ajout de la variable.

Ne publiez jamais la clé API dans GitHub.
