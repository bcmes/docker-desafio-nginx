FROM node:20.5.0

# Criar o diretório de trabalho e defina a propriedade
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copie apenas o package.json e package-lock.json primeiro para instalar as dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação e defina a propriedade
COPY --chown=node:node app.js .

USER node

# Expor a porta que o aplicativo usará
EXPOSE 3000

# Comando para rodar o aplicativo
CMD ["node", "app.js"]