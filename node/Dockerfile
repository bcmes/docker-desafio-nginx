FROM node:20.5.0

WORKDIR /app

COPY . .

RUN npm install --save

EXPOSE 3000

ENTRYPOINT ["node","app.js"]