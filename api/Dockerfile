# Use a Node.js base image
FROM node:16-alpine

# Install global dependencies
RUN yarn global add typescript nodemon

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript files
RUN yarn build

EXPOSE 4000

CMD ["yarn",  "dev"]