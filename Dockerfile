# pull official base image
FROM node:14.5.0-buster-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --only=production

RUN npm audit fix

# add app
COPY . ./

# start app
CMD ["npm", "start"] 