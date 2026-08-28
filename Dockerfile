FROM nginx:1.27-alpine

# Static site assets
COPY index.html style.css script.js /usr/share/nginx/html/

# Runtime nginx config template (Render provides $PORT)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

ENV PORT=8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
