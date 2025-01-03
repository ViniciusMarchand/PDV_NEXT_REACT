# Etapa 1: Build
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para o build
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copia o restante do código do projeto
COPY . .

# Faz o build do Next.js
RUN npm run build

# Etapa 2: Runtime
FROM node:18-alpine AS runner

# Define o diretório de trabalho
WORKDIR /app

# Instala somente as dependências de produção
COPY package.json package-lock.json ./
RUN npm install --production --frozen-lockfile

# Copia os arquivos necessários para execução
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expõe a porta do servidor Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]
