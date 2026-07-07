FROM node:18-alpine

ENV BACKEND_URL=http://0.0.0.0:9000

ADD . .

WORKDIR /app

RUN npm install

ENTRYPOINT ["npm"]

CMD ["start"]