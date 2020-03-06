FROM node:13-alpine
ENV NODE_ENV production

WORKDIR /app
ADD . /app

RUN npm install
RUN npm rebuild node-sass --force
RUN npm run build

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["npm", "run", "start"]