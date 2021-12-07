FROM node:17-alpine

#Create a directory for the app
RUN ["mkdir","-p","/frontend"]

# set working directory
WORKDIR /frontend
COPY package.json yarn.lock  ./

RUN yarn install --frozen-lockfile

COPY . .

# to be used to wait for dependency containers to be downloaded
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait

RUN ["chmod","+x","/wait"]
CMD ["/wait", "&&", "yarn", "start"]
