# Используем официальный Node.js образ как базовый
FROM node:14

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения в рабочую директорию
COPY . .

# Сборка приложения
RUN npm run build

# Используем официальный образ nginx для обслуживания приложения
FROM nginx:alpine

# Копируем скомпилированные файлы в директорию nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Открываем порт 80 для доступа к приложению
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
