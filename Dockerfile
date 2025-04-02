# Specify the base image (choose an appropriate Node.js version)
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Expose the application port (according to your app configuration)
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]
