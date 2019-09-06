FROM node:10.16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# In order to run node alpine image avoiding Python error
RUN apk --no-cache add --virtual builds-deps build-base python

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4000

RUN npm run manifest

CMD [ "npm", "start" ]
