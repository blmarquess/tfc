FROM node:16-alpine AS tfc_backend

WORKDIR /app

COPY . .

RUN npm install --silent

RUN npm run build --silent

EXPOSE 3001

CMD ["npm", "start"]
