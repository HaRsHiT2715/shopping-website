# Stage 1: Build the React app
FROM node:alpine
# Use Node.js version 18 or higher

# Set the working directory inside the container
WORKDIR /user/src/app

# Copy package.json and package-lock.json before other files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory to the working directory
COPY . .

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["npm", "start"]
