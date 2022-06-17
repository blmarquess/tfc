FROM node:16-alpine AS app_backend

RUN mkdir -p /home/node/app/backend/node_modules && chown -R node:node /home/node/app/backend

WORKDIR /home/app/backend

COPY . .

RUN npm config set unsafe-perm true

RUN npm install -g typescript

RUN npm install -g ts-node

RUN npm install -g ts-node-dev

RUN npm install -g npm@8.12.2

USER node

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
