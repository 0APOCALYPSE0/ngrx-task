# Use the official Node.js image for building Angular app
FROM node:14 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular app source code
COPY . .

# Build the Angular app (replace 'ng build' with your actual build command)
RUN npm run build

# Use the official Nginx image for serving the app
FROM nginx

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the production build from the previous stage
COPY --from=build /usr/src/app/dist/ngrx-task /usr/share/nginx/html

# Set the entry point (start Nginx)
CMD ["nginx", "-g", "daemon off;"]
