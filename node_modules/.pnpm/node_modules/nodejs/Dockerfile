# Dockerfile - backend/nodejs/Dockerfile

FROM node:18

WORKDIR /app

# Chỉ copy 2 file này trước để cache dependency
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

# Copy toàn bộ mã nguồn
COPY . .

RUN pnpm build

EXPOSE 5000

CMD ["pnpm", "start"]
