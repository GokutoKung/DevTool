FROM node:14.16.1-alpine3.13
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
CMD ["npm", "start"]
