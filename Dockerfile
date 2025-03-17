# Etapa 1: Build
FROM node:20-alpine AS build

# Define o diretório de trabalho
WORKDIR /frontend

# Copia os arquivos necessários para o build
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copia o restante do código do projeto
COPY . .

# Definição dos argumentos
ARG NEXT_PUBLIC_CNPJ
ARG NEXT_PUBLIC_RUA
ARG NEXT_PUBLIC_NUMERO
ARG NEXT_PUBLIC_BAIRRO
ARG NEXT_PUBLIC_CIDADE
ARG NEXT_PUBLIC_UF
ARG NEXT_PUBLIC_CEP
ARG NEXT_PUBLIC_PHONE
ARG NEXT_PUBLIC_API_LINK

# Definição das variáveis de ambiente com base nos argumentos
ENV NEXT_PUBLIC_CNPJ=${NEXT_PUBLIC_CNPJ}
ENV NEXT_PUBLIC_RUA=${NEXT_PUBLIC_RUA}
ENV NEXT_PUBLIC_NUMERO=${NEXT_PUBLIC_NUMERO}
ENV NEXT_PUBLIC_BAIRRO=${NEXT_PUBLIC_BAIRRO}
ENV NEXT_PUBLIC_CIDADE=${NEXT_PUBLIC_CIDADE}
ENV NEXT_PUBLIC_UF=${NEXT_PUBLIC_UF}
ENV NEXT_PUBLIC_CEP=${NEXT_PUBLIC_CEP}
ENV NEXT_PUBLIC_PHONE=${NEXT_PUBLIC_PHONE}
ENV NEXT_PUBLIC_API_LINK=${NEXT_PUBLIC_API_LINK}

# Faz o build do Next.js
RUN npm run build

# Expõe a porta do servidor Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]