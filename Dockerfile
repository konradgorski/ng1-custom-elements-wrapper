FROM node:10.16.0-alpine

WORKDIR /usr/app

COPY . .

RUN npm i && cd elements && npm i
RUN cd ..
RUN npm run build:elements

WORKDIR /usr/app/elements
