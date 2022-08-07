FROM node:alpine3.15
WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
RUN apk add gettext
RUN envsubst < /usr/app/app-config.template.json > /usr/app/dist/app-config.template.json

CMD ["node", "dist/src/main", "'daemon off;'"]