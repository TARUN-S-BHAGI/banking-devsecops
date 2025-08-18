# Use an official Node.js image to build the frontend
FROM node:18 AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Serve using nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
