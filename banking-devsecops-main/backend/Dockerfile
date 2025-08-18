# Use official Node.js LTS base image with minimal footprint
FROM node:18.20.2-slim

# Set environment variable to avoid prompts during install
ENV NODE_ENV=production

# Create and set working directory
WORKDIR /app

# Install dependencies first (leverage Docker layer caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of your application
COPY . .

# Expose API port
EXPOSE 5000

# Run the application
CMD ["node", "server.js"]
