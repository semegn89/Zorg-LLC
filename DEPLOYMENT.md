# 🚀 Руководство по деплою на Vercel

## Шаг 1: Подготовка проекта ✅

Проект уже подготовлен для деплоя:
- ✅ Структура файлов оптимизирована
- ✅ `vercel.json` создан
- ✅ `package.json` обновлен
- ✅ Все файлы загружены в GitHub

## Шаг 2: Деплой через Vercel Dashboard

### Вариант A: Автоматический деплой (Рекомендуется)

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Войдите в аккаунт** (создайте, если нет)
3. **Нажмите "New Project"**
4. **Выберите репозиторий:** `semegn89/Zorg-LLC`
5. **Настройте переменные окружения:**
   ```
   STRIPE_SECRET_KEY=sk_live_your_production_stripe_key
   NODE_ENV=production
   ```
6. **Нажмите "Deploy"**

### Вариант B: Деплой через CLI

```bash
# Войдите в аккаунт Vercel
vercel login

# Деплой в продакшн
vercel --prod
```

## Шаг 3: Настройка домена

После деплоя вы получите URL вида: `https://zorg-llc-xxx.vercel.app`

### Добавление кастомного домена:

1. **В Vercel Dashboard** → ваш проект → Settings → Domains
2. **Добавьте домен:** `zorg-international.com`
3. **Настройте DNS записи** у вашего провайдера

## Шаг 4: Настройка Stripe

### Получение API ключей:

1. **Войдите в [Stripe Dashboard](https://dashboard.stripe.com)**
2. **Перейдите в Developers → API keys**
3. **Скопируйте:**
   - Publishable key: `pk_live_...`
   - Secret key: `sk_live_...`

### Обновление переменных окружения:

1. **В Vercel Dashboard** → ваш проект → Settings → Environment Variables
2. **Добавьте:**
   ```
   STRIPE_SECRET_KEY=sk_live_your_key_here
   NODE_ENV=production
   ```

## Шаг 5: Тестирование

### Проверьте следующие страницы:

- ✅ Главная: `https://your-domain.vercel.app/`
- ✅ Магазин: `https://your-domain.vercel.app/store`
- ✅ API: `https://your-domain.vercel.app/api/health`
- ✅ Платежи: Протестируйте покупку товара

## 🔧 Возможные проблемы

### Ошибка 404:
- Проверьте `vercel.json` конфигурацию
- Убедитесь, что файлы в папке `public/`

### Ошибка Stripe:
- Проверьте переменную `STRIPE_SECRET_KEY`
- Убедитесь, что используете правильный ключ (test/live)

### Проблемы с CORS:
- Проверьте настройки в `server.js`
- Добавьте ваш домен в список разрешенных

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи в Vercel Dashboard
2. Убедитесь, что все переменные окружения настроены
3. Проверьте консоль браузера на ошибки

## 🎉 Готово!

После успешного деплоя ваш сайт будет доступен по адресу:
`https://your-domain.vercel.app`
