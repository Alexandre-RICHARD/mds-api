FROM node:20

# Install pnpm globally
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Define work repo
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY pnpm-lock.yaml .

# Install deps
RUN corepack enable && corepack prepare pnpm@latest --activate

# Installer les dépendances
RUN pnpm install --frozen-lockfile --ignore-scripts && pnpm rebuild sqlite3


# Copy all project
COPY . .

# Define env variable
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start
CMD ["pnpm", "start-prod"]
