FROM node:16

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn","production"]