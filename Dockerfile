# Use official Node.js image to build the Angular app
FROM node:18 AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use Nginx to serve the built application
FROM nginx:alpine

# Copy the built Angular app to Nginx's default HTML directory
COPY --from=build /app/dist/angular-ecommerce /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]