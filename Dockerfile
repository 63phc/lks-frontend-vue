FROM node:13-alpine
ENV NODE_ENV production

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app
RUN npm rebuild node-sass --force
RUN npm run build

ENV HOST 0.0.0.0
