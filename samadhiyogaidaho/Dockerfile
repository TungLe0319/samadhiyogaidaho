
FROM node:18.13.0-alpine3.16
ENV NODE_ENV=production
WORKDIR /app
COPY ./package*.json ./
RUN npm install 
RUN ls
COPY ./ ./
ENV PORT=80
EXPOSE 80
CMD [ "npm", "start" ]