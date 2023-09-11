# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Cypress and its dependencies
RUN apt-get update && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb 
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the Cypress port (default is 3000)
EXPOSE 3000

# Define a command to run Cypress tests
CMD ["npm", "run", "cy:run"]
