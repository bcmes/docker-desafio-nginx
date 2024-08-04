FROM node:20.5.0

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --save

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000