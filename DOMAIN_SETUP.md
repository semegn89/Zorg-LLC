# 🌐 Настройка кастомного домена на Vercel

## Вариант 1: Покупка домена через Vercel (Рекомендуется)

### Шаг 1: Покупка домена
1. **Откройте Vercel Dashboard:**
   - Перейдите на [vercel.com/dashboard](https://vercel.com/dashboard)
   - Выберите проект `zorg-llc`

2. **Добавьте домен:**
   - Settings → Domains → Add Domain
   - Введите желаемый домен: `zorg-international.com`
   - Нажмите "Add"

3. **Купите домен:**
   - Vercel покажет доступные варианты
   - Выберите и оплатите (обычно $10-15/год)
   - DNS настраивается автоматически

### Шаг 2: Автоматическая настройка
- ✅ DNS записи настраиваются автоматически
- ✅ SSL сертификат выдается автоматически
- ✅ Сайт доступен через 5-10 минут

## Вариант 2: Домен куплен у другого провайдера

### Шаг 1: Добавление домена в Vercel
1. Settings → Domains → Add Domain
2. Введите ваш домен
3. Vercel покажет DNS записи для настройки

### Шаг 2: Настройка DNS у провайдера
Добавьте следующие записи:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Шаг 3: Ожидание
- DNS изменения распространяются 24-48 часов
- SSL сертификат выдается автоматически

## Проверка настройки

После настройки проверьте:

```bash
# Проверка доступности
curl -I https://your-domain.com

# Проверка SSL
curl -I https://www.your-domain.com
```

## Обновление CORS настроек

После настройки домена обновите `server.js`:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://your-domain.com',
        'https://www.your-domain.com'
      ]
    : 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
```

## Возможные проблемы

### Домен не работает:
1. Проверьте DNS записи
2. Подождите 24-48 часов
3. Проверьте настройки у провайдера

### SSL ошибки:
1. SSL выдается автоматически
2. Подождите 1-2 часа после настройки DNS

### CORS ошибки:
1. Обновите CORS настройки в `server.js`
2. Добавьте ваш домен в список разрешенных

## Полезные команды

```bash
# Проверка DNS
nslookup your-domain.com

# Проверка SSL
openssl s_client -connect your-domain.com:443

# Проверка доступности
ping your-domain.com
```

## Поддержка

При проблемах:
1. Проверьте логи в Vercel Dashboard
2. Обратитесь в поддержку Vercel
3. Проверьте настройки DNS у провайдера
