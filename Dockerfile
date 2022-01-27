#chose version with npm
FROM node:alpine

#new directory inside container to save changes to
WORKDIR /usr

#copies package.json
COPY package.json ./

#install dependencies
RUN npm install

#copies other necessary files
COPY ./ ./

#default command
CMD ["npm", "start"]