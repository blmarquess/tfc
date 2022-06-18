FROM node:16-alpine AS backend_app

WORKDIR /app

COPY . .

RUN npm install && npm run build

EXPOSE 3001

CMD [ "npm", "start"]