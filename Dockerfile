FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install express dotenv

COPY . .

ENV PORT=3001

EXPOSE $PORT

CMD ["node", "index.js"]