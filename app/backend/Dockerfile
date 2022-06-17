FROM node:16-alpine AS tfc_backend

WORKDIR /home/app/backend

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
