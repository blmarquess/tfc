FROM node:16-alpine AS tfc_backend

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3001

ENTRYPOINT ["npm", "start"]
