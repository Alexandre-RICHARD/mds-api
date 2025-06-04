# Use node js alpine official image
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Define work repo
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install deps
RUN pnpm install --prod

# Copy all project
COPY . .

# Define env variable
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start
CMD ["npm", "run", "start-prod"]
