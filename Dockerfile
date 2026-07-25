# ---- Stage 1
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# ---- Stage 2
FROM node:22-alpine
WORKDIR /app
COPY . .

ENV GEMINI_API_KEY=$GEMINI_API_KEY

RUN npm run build

CMD ["node", "server.js"]
