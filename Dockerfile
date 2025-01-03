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

# Etapa 2: Runtime
FROM node:20-alpine AS runner

# Define o diretório de trabalho
WORKDIR /frontend

# Instala somente as dependências de produção
COPY package.json package-lock.json ./
RUN npm install --production --frozen-lockfile

# Copia os arquivos necessários para execução
COPY --from=build /frontend/.next ./.next
COPY --from=build /frontend/public ./public
COPY --from=build /frontend/next.config.js ./next.config.js

# Expõe a porta do servidor Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]
