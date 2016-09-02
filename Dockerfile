FROM node:5-slim
MAINTAINER Liping
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --production
# Bundle app source
COPY . /usr/src/app
# Start app
ENV MONGODB_URI=$MONGODB_URI
ENV JWT_SECRET=$JWT_SECRET
CMD [ "npm", "start" ]