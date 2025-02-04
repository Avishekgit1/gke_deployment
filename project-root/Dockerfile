FROM nginx:latest

# Remove the default index.html (optional, but ensures you're not seeing the default Nginx page)
RUN rm /usr/share/nginx/html/index.html

# Copy your custom HTML and JavaScript files into the container
COPY app/index.html /usr/share/nginx/html/index.html
COPY app/app.js /usr/share/nginx/html/app.js

# Expose port 80 for the web server
EXPOSE 80
