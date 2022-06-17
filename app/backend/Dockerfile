FROM node:16-alpine AS app_backend

RUN mkdir -p /home/node/app/backend/node_modules && chown -R node:node /home/node/app/backend

WORKDIR /home/app/backend

COPY . .

RUN npm config set unsafe-perm true

USER node

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
