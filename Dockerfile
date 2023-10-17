FROM node:16-alpine

ENV DATABASE_URL="postgresql://postgres:pass123@localhost:5555/wish?schema=public"
# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy source code
COPY . .

# Build the Prisma client
RUN npx prisma generate

# Run database migrations
# RUN npx prisma migrate deploy

# Start the NestJS app
CMD ["pnpm", "run", "start"]
