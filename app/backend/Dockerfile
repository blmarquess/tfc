FROM node:16-alpine AS backend_app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm", "start"]