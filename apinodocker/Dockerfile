#Versão LST do node
FROM node:20-alpine AS build
#Diretório
WORKDIR /app
#Dependências
COPY package*.json ./
#Comandos de instalação
RUN npm install --omit=dev
#Copiar código fonte
COPY . .
#Runtime
FROM node:20-alpine AS FINAL

WORKDIR /app
#build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/src ./src
COPY --from=build /app/index.js ./

#PORTA
EXPOSE 3000
#Comando para iniciar
CMD ["npm", "start"]
