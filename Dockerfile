# базовый образ от Microsoft с установленным Node и Playwright
FROM mcr.microsoft.com/playwright:v1.53.0-jammy

# создаём директорию для кода
WORKDIR /app

# копируем package.json и package-lock.json
COPY package*.json ./

# устанавливаем зависимости
RUN npm ci

# копируем остальной код проекта
COPY . .

# запуск по умолчанию
CMD ["npx", "playwright", "test", "Calendar.spec.js"]