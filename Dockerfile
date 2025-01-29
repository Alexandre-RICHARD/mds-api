# Use node js alpine official image
FROM node:20-alpine

# Define work repo
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install deps
RUN npm install --only=production

# Copie all project
COPY . .

# Define env variable
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start
CMD ["node", "index.js"]
