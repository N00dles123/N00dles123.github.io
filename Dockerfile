FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache, target=/root/.npm npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


