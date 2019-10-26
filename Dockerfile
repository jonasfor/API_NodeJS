FROM  node:alpine
WORKDIR /use/api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]