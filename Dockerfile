# Utiliser une image Node.js officielle
FROM node:18

# Installer pnpm
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /root/mds-api

# Copier les fichiers package.json et pnpm-lock.json
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances avec pnpm
RUN pnpm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port
EXPOSE 3000

# Commande pour démarrer l'application avec ts-node (si vous ne compilez pas TypeScript)
CMD ["pnpm", "exec", "ts-node", "index.ts"]
