# Zorg LLC - Automotive Parts E-commerce

Современный интернет-магазин автозапчастей с интеграцией Stripe для онлайн-платежей.

## 🚀 Быстрый старт

### Локальная разработка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/semegn89/Zorg-LLC.git
   cd Zorg-LLC
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Создайте файл .env:**
   ```bash
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   NODE_ENV=development
   ```

4. **Запустите сервер:**
   ```bash
   npm run dev
   ```

5. **Откройте браузер:**
   ```
   http://localhost:3000
   ```

## 🌐 Деплой на Vercel

### Автоматический деплой

1. **Подключите репозиторий к Vercel:**
   - Перейдите на [vercel.com](https://vercel.com)
   - Войдите в аккаунт
   - Нажмите "New Project"
   - Выберите репозиторий `Zorg-LLC`

2. **Настройте переменные окружения:**
   ```
   STRIPE_SECRET_KEY=sk_live_your_production_stripe_key
   NODE_ENV=production
   ```

3. **Деплой:**
   - Vercel автоматически определит настройки из `vercel.json`
   - Нажмите "Deploy"

### Ручной деплой

1. **Установите Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Войдите в аккаунт:**
   ```bash
   vercel login
   ```

3. **Деплой:**
   ```bash
   vercel --prod
   ```

## 📁 Структура проекта

```
zorg-llc/
├── public/                 # Статические файлы
│   ├── index.html         # Главная страница
│   ├── store.html         # Страница магазина
│   ├── success.html       # Страница успешной оплаты
│   ├── cancel.html        # Страница отмены оплаты
│   └── images/            # Изображения
├── server.js              # Express сервер
├── package.json           # Зависимости и скрипты
├── vercel.json           # Конфигурация Vercel
└── README.md             # Документация
```

## 🔧 API Endpoints

- `GET /` - Главная страница
- `GET /store` - Страница магазина
- `GET /success` - Страница успешной оплаты
- `GET /cancel` - Страница отмены оплаты
- `POST /create-checkout-session` - Создание сессии Stripe
- `GET /api/health` - Проверка здоровья сервера

## 💳 Настройка Stripe

1. **Создайте аккаунт на [stripe.com](https://stripe.com)**
2. **Получите API ключи:**
   - Test: `sk_test_...`
   - Live: `sk_live_...`
3. **Добавьте ключи в переменные окружения**

## 🛠 Технологии

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Платежи:** Stripe
- **Деплой:** Vercel
- **Версионирование:** Git

## 📝 Лицензия

MIT License

## 🤝 Поддержка

По вопросам обращайтесь: support@zorg-international.com
