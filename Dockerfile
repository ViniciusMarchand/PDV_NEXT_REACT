# Etapa 1: Build
FROM node:20-alpine AS build

# Define o diretório de trabalho
WORKDIR /frontend

# Copia os arquivos necessários para o build
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copia o restante do código do projeto
COPY . .

# Faz o build do Next.js
RUN npm run build

# Expõe a porta do servidor Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]
