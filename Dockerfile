FROM nginx:latest

# Copy HTML and JavaScript files into the container
COPY app/index.html /usr/share/nginx/html/index.html
COPY app/app.js /usr/share/nginx/html/app.js

# Expose port 80 for the web server
EXPOSE 80