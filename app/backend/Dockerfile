FROM node:16-alpine AS backend_tfc_image

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]