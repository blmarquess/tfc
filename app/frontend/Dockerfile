FROM node:16-alpine AS frontend_app

WORKDIR /home/app/frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]