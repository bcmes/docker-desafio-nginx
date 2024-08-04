FROM node:15

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install express --save

ENTRYPOINT ["node","app.js"]