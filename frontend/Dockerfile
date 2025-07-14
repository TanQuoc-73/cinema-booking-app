# Image chính
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy toàn bộ dự án Next.js
COPY . .

# Cài pnpm và install
RUN npm install -g pnpm@10.12.3 && pnpm install

# Build app
RUN pnpm build

# Cổng Next.js chạy mặc định
EXPOSE 3000

# Start app
CMD ["pnpm", "dev"]
