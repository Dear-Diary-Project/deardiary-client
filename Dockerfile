FROM node:12
RUN mkdir -p /usr/src/deardiary-client
WORKDIR  /usr/src/deardiary-client
COPY package.json . /usr/src/deardiary-client/
RUN npm install
RUN npm run build
EXPOSE 3000
EXPOSE 80
# ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD [ "npm", "start" ]
