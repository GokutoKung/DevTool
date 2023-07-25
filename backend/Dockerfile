FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code to /app
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the command to start the app
CMD ["npm", "start"]
