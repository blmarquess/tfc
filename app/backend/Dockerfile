FROM node:16-alpine AS backend_app

WORKDIR /home/app/backend

COPY . .

RUN npm install && npm run build

EXPOSE 3001

CMD [ "npm", "start"]