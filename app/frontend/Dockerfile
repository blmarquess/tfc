FROM node:16-alpine AS tfc_frontend

WORKDIR /app

COPY . .

RUN npm install --silent

RUN npm run build --silent

EXPOSE 3000

CMD [ "npm", "start" ]
