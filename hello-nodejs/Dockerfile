FROM --platform=linux/amd64 node:16
WORKDIR /usr/src/app
COPY . .
RUN npm ci --production
EXPOSE 80
CMD ["node", "src/index.js"]
