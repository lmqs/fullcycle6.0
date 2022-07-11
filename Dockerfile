FROM node:14.15.4-alpine3.12

RUN npm install -g @nestjs/cli@8.0.0

USER root

WORKDIR /home/node/app





