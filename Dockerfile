FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Ensure sharp is installed for Next.js image optimization
RUN npm install sharp

# Copy the rest of the application code
COPY . .

# Build the static site
RUN npm run build

# Install serve to serve the static site
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the static site
CMD ["npm", "start"]
