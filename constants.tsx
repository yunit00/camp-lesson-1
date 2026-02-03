
import { Section, CourseDay, ProjectExample, FAQItem, OutcomeCategory } from './types';

export const SECTIONS: Section[] = [
  { id: 'intro', title: '00 // ВВЕДЕНИЕ' },
  { id: 'tracker', title: '01 // ТРЕКЕР КЭМПА' },
  { id: 'glossary', title: '02 // ГЛОССАРИЙ' },
  { id: 'inspiration', title: '03 // ВДОХНОВЕНИЕ' },
  { id: 'outcomes', title: '04 // РЕЗУЛЬТАТЫ' },
  { id: 'faq', title: '05 // FAQ' },
  { id: 'essentials', title: '06 // ОПЛАТА СЕРВИСОВ' },
  { id: 'services', title: '07 // ССЫЛКИ НА СЕРВИСЫ' },
  { id: 'bookshelf', title: '08 // КНИЖНАЯ ПОЛКА' }
];

export interface TrackerService {
  name: string;
  id: string;
}

export interface TrackerDay extends CourseDay {
  services: TrackerService[];
}

export const DAILY_TRACKER: TrackerDay[] = [
  { 
    day: '2', 
    topic: 'Вводная лекция + AI-браузеры', 
    format: 'Эфир 19:00 (MSK)',
    details: 'Обзор AI-трендов 2026, программа кэмпа',
    week: 1,
    services: [
      { id: 'chatgpt', name: 'ChatGPT' },
      { id: 'claude', name: 'Claude' },
      { id: 'gemini', name: 'Gemini' },
      { id: 'dia', name: 'Dia' },
      { id: 'comet', name: 'Comet' },
      { id: 'arc', name: 'Arc' }
    ]
  },
  { 
    day: '3', 
    topic: 'Whisper', 
    format: 'Запись',
    details: 'Голосовой ввод текста',
    week: 1,
    services: [
      { id: 'macwhisper', name: 'MacWhisper (macOS)' },
      { id: 'whisperflow', name: 'WhisperFlow (Windows)' },
      { id: 'cursor_tr', name: 'Cursor (обработка)' },
      { id: 'claude_tr', name: 'Claude (обработка)' },
      { id: 'youtube_tr', name: 'YouTube (транскрибация)' },
      { id: 'tg_wa_merged', name: 'Telegram / WhatsApp' }
    ]
  },
  { 
    day: '4', 
    topic: 'Контекст-инжиниринг', 
    format: 'Запись',
    details: 'Работа с контекстом для LLM',
    week: 1,
    services: [
      { id: 'chatgpt_dr', name: 'ChatGPT (Deep Research)' },
      { id: 'claude_standalone', name: 'Claude' },
      { id: 'gemini_day4', name: 'Gemini' },
      { id: 'deep_research', name: 'Deep Research Tool' },
      { id: 'spiral', name: 'Spiral' }
    ]
  },
  {
    day: '8',
    topic: 'NotebookLM + Личный преподаватель', 
    format: 'Запись',
    details: 'Работа с документами и обучение',
    week: 2,
    services: [
      { id: 'notebooklm', name: 'Google NotebookLM' },
      { id: 'chatgpt_projects', name: 'ChatGPT Projects' },
      { id: 'ai_studio_day5', name: 'Google AI Studio' },
      { id: 'google_labs', name: 'Google Labs' },
      { id: 'gemini_doc', name: 'Gemini' },
      { id: 'gdrive', name: 'Google Drive (импорт)' },
      { id: 'yt_import', name: 'YouTube (импорт)' }
    ]
  },
  {
    day: '9',
    topic: 'Вайбкодинг', 
    format: 'Эфир 19:00 (MSK)',
    details: 'Базовый Vibe Coding',
    week: 2,
    services: [
      { id: 'cursor_base', name: 'Cursor' },
      { id: 'claude_code', name: 'Claude Code' },
      { id: 'antigravity', name: 'Antigravity' },
      { id: 'conductor', name: 'Conductor' },
      { id: 'terminal', name: 'Terminal' },
      { id: 'ai_studio', name: 'Google AI Studio' },
      { id: 'v0', name: 'v0 (by Vercel)' },
      { id: 'nanobanano_pro', name: 'Nano Banana Pro' }
    ]
  },
  {
    day: '10',
    topic: 'Суперклей проектов', 
    format: 'Документ',
    details: 'Инфраструктура проектов',
    week: 2,
    services: [
      { id: 'github', name: 'GitHub' },
      { id: 'railway', name: 'Railway' },
      { id: 'netlify', name: 'Netlify' },
      { id: 'openrouter', name: 'OpenRouter (API)' },
      { id: 'cursor_git', name: 'Cursor + GitHub Sync' }
    ]
  },
  {
    day: '11',
    topic: 'Создание лендингов и сайтов', 
    format: 'Эфир 19:00 (MSK)',
    details: 'Создание сайтов с AI',
    week: 2,
    services: [
      { id: 'v0_site', name: 'v0 (генерация UI)' },
      { id: 'cursor_code', name: 'Cursor (доработка)' },
      { id: 'github_pages', name: 'GitHub Pages' },
      { id: 'gemini_canvas_day8', name: 'Gemini Canvas' },
      { id: 'ai_studio_build_day8', name: 'Google AI Studio Build' },
      { id: 'vercel', name: 'Vercel (хостинг)' },
      { id: 'browser_agents', name: 'Браузерные агенты (DNS)' }
    ]
  },
  {
    day: '15',
    topic: 'Создание Telegram-бота', 
    format: 'Документ',
    details: 'Создание ботов',
    week: 3,
    services: [
      { id: 'botfather', name: 'BotFather' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'tg_api', name: 'Telegram Bot API' },
      { id: 'cursor_bot', name: 'Cursor (разработка)' },
      { id: 'openrouter_bot', name: 'OpenRouter (AI)' },
      { id: 'github_bot_code', name: 'GitHub (хранение)' },
      { id: 'railway_bot', name: 'Railway (хостинг бота)' }
    ]
  },
  {
    day: '16',
    topic: 'Второй мозг + саммари', 
    format: 'Запись',
    details: 'Second Brain система',
    week: 3,
    services: [
      { id: 'notion', name: 'Notion' },
      { id: 'github_sb', name: 'GitHub' },
      { id: 'local_storage', name: 'Local Storage' },
      { id: 'notes_sb', name: 'Notes' },
      { id: 'gemini_sb_day10', name: 'Gemini' },
      { id: 'cursor_sb', name: 'Cursor' },
      { id: 'notebooklm_sb', name: 'NotebookLM' }
    ]
  },
  {
    day: '17',
    topic: 'Презентации', 
    format: 'Запись',
    details: 'Создание презентаций с AI',
    week: 3,
    services: [
      { id: 'nanobanano_pres', name: 'Nano Banana Pro' },
      { id: 'genspark', name: 'Genspark' },
      { id: 'ai_studio_build', name: 'Google AI Studio (Build)' },
      { id: 'gemini_canvas_day11', name: 'Gemini Canvas' },
      { id: 'gamma', name: 'Gamma' },
      { id: 'kimi', name: 'Kimi' }
    ]
  },
  {
    day: '18',
    topic: 'AI в работе с таблицами', 
    format: 'Запись',
    details: 'AI-ассистенты по работе с таблицами',
    week: 3,
    services: [
      { id: 'gemini_agent_day12', name: 'Gemini Agent' },
      { id: 'browser_agents_table', name: 'Браузерные агенты' },
      { id: 'rows', name: 'Rows' }
    ]
  },
  {
    day: '21',
    topic: 'Демо-день', 
    format: 'Эфир 19:00 (MSK)',
    details: 'Презентация проектов',
    week: 3,
    services: [
      { id: 'final_demo_updated', name: 'Демонстрация и доработка проектов Кэмпа' }
    ]
  }
];

export const GLOSSARY_CATEGORIES = [
  {
    title: '01. Базовые AI-термины',
    terms: [
      { t: 'LLM (Large Language Model)', d: 'Большая языковая модель, нейросеть, которая понимает и генерирует текст.' },
      { t: 'RAG (Retrieval-Augmented Generation)', d: 'Подход, когда AI отвечает только на основе загруженных вами документов.' },
      { t: 'Промпт (Prompt)', d: 'Ваш запрос или инструкция для нейросети.' },
      { t: 'Промпт-инжиниринг', d: 'Умение задать вопрос здесь и сейчас для решения задачи за 5 минут.' },
      { t: 'Контекст', d: 'Вся информация, которую вы даете AI перед тем, как задать вопрос.' },
      { t: 'Контекст-инжиниринг', d: 'Системное построение фундамента для долгих проектов. Управление тем, что знает модель.' },
      { t: 'System Prompt (Системный промпт)', d: 'Ролевая инструкция, которую вы даете модели за кулисами перед началом диалога.' },
      { t: 'Chain of Thought (Цепочка рассуждений)', d: 'Просьба модели "думать шаг за шагом", чтобы избежать логических ошибок в сложных задачах.' },
      { t: 'Temperature (Температура)', d: 'Настройка креативности модели (от 0 до 1). 0 — робот (код, факты), 1 — поэт (креатив, бред).' },
      { t: 'Токены', d: 'Единицы измерения текста для AI.' },
      { t: 'Галлюцинации', d: 'Когда модель придумывает факты, которых нет в источниках.' },
      { t: 'Grounding (Заземление)', d: 'Когда модель отвечает только на основе файлов, без галлюцинаций.' },
      { t: 'Мультимодальность', d: 'Способность модели работать с текстом, изображениями, аудио и видео.' },
      { t: 'Генеративный интерфейс', d: 'Интерфейсы, создаваемые AI по текстовому запросу.' },
      { t: 'Браузерные агенты', d: 'AI-расширения, которые могут управлять браузером за вас.' }
    ]
  },
  {
    title: '02. Концепции Кэмпа',
    terms: [
      { t: 'Vibe Coding', d: 'Подход, где вы комбинируете голос (диктовка), руки (редактирование) и AI (генерация кода).' },
      { t: 'AI-мышление', d: 'Способ думать о задачах, используя весь доступный контекст.' },
      { t: 'Обратный инжиниринг', d: 'Упаковка удачной сессии с LLM в промпт или другую единицу контента.' },
      { t: 'Рекурсивное обучение', d: 'Когда AI объясняет код, который сам же и создал.' },
      { t: 'Garbage In — Garbage Out', d: 'Качество ответа модели напрямую зависит от чистоты входящих данных.' }
    ]
  },
  {
    title: '03. Технические термины',
    terms: [
      { t: 'Framework (Фреймворк)', d: 'Набор готовых инструментов и правил написания кода (например, Next.js), чтобы не писать все с нуля.' },
      { t: 'Library (Библиотека)', d: 'Готовый кусок кода для конкретной задачи (например, Framer Motion), который подключается к проекту.' },
      { t: 'Component (Компонент)', d: 'Кирпичик интерфейса (кнопка, шапка, карточка), который можно использовать многократно.' },
      { t: 'Logs (Логи)', d: 'Журнал событий системы. Первое место, куда смотрят, если "все сломалось".' },
      { t: 'Bug (Баг)', d: 'Ошибка в коде, из-за которой программа работает не так, как задумано.' },
      { t: 'Деплой (Deploy)', d: 'Публикация вашего проекта в интернет, чтобы он был доступен всем.' },
      { t: 'Git', d: 'Система контроля версий кода.' },
      { t: 'Репозиторий', d: 'Папка проекта в системе контроля версий (на GitHub).' },
      { t: 'Хостинг', d: 'Размещение вашего проекта на сервере в интернете.' },
      { t: 'Бэкенд', d: 'Серверная часть приложения (логика, база данных).' },
      { t: 'Фронтенд', d: 'Визуальная часть приложения (интерфейс пользователя).' },
      { t: 'Домен', d: 'Имя сайта в интернете (например, site.ru).' },
      { t: 'DNS', d: 'Система, связывающая доменное имя с IP-адресом сервера.' }
    ]
  },
  {
    title: '04. Форматы и технологии',
    terms: [
      { t: 'Markdown', d: 'Стандарт разметки текста для структуры (заголовки, списки).' },
      { t: 'JSON', d: 'Формат для передачи жестких данных (дизайн-токенов).' },
      { t: 'HTML / CSS / JS', d: 'Три кита веба: разметка, стили и интерактивность.' },
      { t: 'HEX', d: 'Шестнадцатеричный формат для обозначения цветов (#FF0000).' }
    ]
  },
  {
    title: '05. Процессы и методы',
    terms: [
      { t: 'Diff (Дифф)', d: 'Визуальное отображение изменений: что было (красное) и что стало (зеленое).' },
      { t: 'Linter (Линтер)', d: 'Программа, которая подсвечивает ошибки синтаксиса еще до запуска кода.' },
      { t: 'Iterative Approach', d: 'Метод разработки "маленькими шагами": сделали часть -> проверили -> идем дальше.' },
      { t: 'Валидация', d: 'Проверка правильности полученного результата.' },
      { t: 'Самокритика', d: 'Когда модель оценивает свой собственный ответ и улучшает его.' },
      { t: 'Рефлексия', d: 'Процесс, когда модель анализирует свои действия для повышения точности.' },
      { t: 'Контекстное окно', d: 'Объем информации, который модель может одновременно "удержать в голове".' }
    ]
  },
  {
    title: '06. Инфраструктура и сервисы',
    terms: [
      { t: 'API', d: 'Интерфейс, через который программы "общаются" друг с другом.' },
      { t: 'API-ключ', d: '"Пароль" для доступа к сервису через программный код.' },
      { t: 'Переменные окружения (.env)', d: 'Секретные настройки и ключи, хранящиеся отдельно от основного кода.' },
      { t: 'Агрегатор API (OpenRouter)', d: 'Сервис, дающий единый доступ к десяткам разных нейросетей.' },
      { t: 'Облако', d: 'Удаленные серверы для хранения данных и запуска программ.' },
      { t: 'Локально', d: 'На вашем компьютере, без использования внешних серверов.' },
      { t: 'MVP', d: 'Minimum Viable Product — минимально жизнеспособный продукт.' }
    ]
  },
  {
    title: '07. Работа с данными',
    terms: [
      { t: 'База знаний', d: 'Организованное хранилище информации.' },
      { t: 'Блокнот (NotebookLM)', d: 'Среда для работы с вашими источниками без галлюцинаций.' },
      { t: 'Audio Overview', d: 'Сгенерированный AI подкаст на основе ваших документов.' },
      { t: 'Deep Research', d: 'Инструмент для глубокого автоматизированного сбора аналитики.' },
      { t: 'Projects', d: 'Функция закрепления контекста над чатами в Claude/ChatGPT.' }
    ]
  },
  {
    title: '08. Организация работы',
    terms: [
      { t: 'Roadmap (Роадмап)', d: 'Карта развития продукта: список задач по приоритетам и срокам.' },
      { t: 'Changelog (Ченджлог)', d: 'Список изменений: что нового добавили и что починили в этой версии.' },
      { t: 'Структура папок', d: 'Логичная организация файлов проекта.' },
      { t: 'Стартовая точка', d: 'Саммари прогресса, которое вставляется в новый чат для преемственности.' }
    ]
  }
];

export const PROJECTS: ProjectExample[] = [
  { category: 'Telegram-боты', title: 'Бот-писатель (Writer Bot)', why: 'Быстрое редактирование текстов прямо в Telegram.', features: ['Прием черновика', 'Переписывание в стиле', 'Кнопка "Улучшить"'] },
  { category: 'Telegram-боты', title: 'Second Brain Input Bot', why: 'Быстрый ввод идей без открытия ноутбука.', features: ['Голосовые заметки', 'Текстовые заметки', 'Стуктурирование в Inbox'] },
  { category: 'Telegram-боты', title: 'CRM-ассистент', why: 'Автоматизация рутинного ввода данных.', features: ['Занесение контактов', 'Синхронизация с базой', 'Обработка данных клиентов'] },
  { category: 'Telegram-боты', title: 'Трекер привычек', why: 'Личная продуктивность.', features: ['Отслеживание ритуалов', 'Напоминания', 'Статистика'] },
  { category: 'Telegram-боты', title: 'Бот-саммарайзер', why: 'Автоматизация создания протоколов и выжимок.', features: ['Транскрипции звонков', 'Длинные тексты', 'Структурированные отчеты'] },
  { category: 'Telegram-боты', title: 'Бот для рефлексии', why: 'бот, синхронизированный с базой терапевтических заметок', features: ['Регулярные вопросы', 'Анализ паттернов', 'Персональные инсайты'] },
  { category: 'Telegram-боты', title: 'Бот-дневник', why: 'Анализ паттернов и возврат к моментам.', features: ['Записи мыслей', 'Структурирование событий', 'Сохранение записей'] },
  { category: 'Telegram-боты', title: 'Бот для приема заявок/оплаты', why: 'Автоматизация заказов и платежей.', features: ['Прием заявок', 'Обработка оплаты', 'Подтверждение заказов'] },
  { category: 'Telegram-боты', title: 'Бот для сортировки постов', why: 'Категоризация для базы знаний.', features: ['Прием сохраненных постов', 'Авто-категоризация', 'Структурированная база'] },
  { category: 'Telegram-боты', title: 'Бот для учета расходов', why: 'Личный финансовый трекер.', features: ['Голосовой ввод', 'Категоризация трат', 'Отчеты и статистика'] },
  { category: 'Telegram-боты', title: 'Бот генерации контента', why: 'Быстрое создание визуального контента.', features: ['Генерация изображений', 'Генерация видео', 'Текстовые описания'] },
  { category: 'Telegram-боты', title: 'Агент-ресерчер', why: 'Автоматизация сбора информации.', features: ['Поиск в интернете', 'Парсинг документов', 'Заполнение базы данных'] },
  { category: 'Telegram-боты', title: 'Агент-аналитик', why: 'Персональный консультант по продуктам.', features: ['Анализ сайтов', 'Анализ приложений', 'Рекомендации по улучшению'] },
  
  { category: 'Сайты и лендинги', title: 'Учебный сайт', why: 'Создание полезного контента для других.', features: ['Объясняющий контент', 'Интерактивные элементы', 'Self-explaining дизайн'] },
  { category: 'Сайты и лендинги', title: 'Личное портфолио', why: 'Профессиональное представление себя.', features: ['Современная визитка', 'Проекты и кейсы', 'Сборка за вечер'] },
  { category: 'Сайты и лендинги', title: 'Лендинг для проекта', why: 'Лендинг продукта, сервиса или проекта в любом дизайне', features: ['Презентация продукта', 'Проверка гипотез', 'Форма захвата'] },
  { category: 'Сайты и лендинги', title: 'Сайт-дашборд', why: 'Визуализация прогресса в одном месте.', features: ['Личные цели', 'Финансы', 'Аналитика проектов'] },
  { category: 'Сайты и лендинги', title: 'Сайт-блог', why: 'Личный блог с современным интерфейсом.', features: ['Публикация статей', 'Комментарии', 'Взаимодействие'] },
  { category: 'Сайты и лендинги', title: 'Интернет-магазин', why: 'Продажа товаров или услуг онлайн.', features: ['Каталог товаров', 'Корзина и оплата', 'Управление заказами'] },
  { category: 'Сайты и лендинги', title: 'Трекер подписок', why: 'Управление расходами на сервисы.', features: ['Отслеживание стримингов', 'Напоминания о продлении', 'Статистика расходов'] },

  { category: 'Системы и инструменты', title: 'Second Brain система', why: 'Организация всей информации в одном месте.', features: ['База знаний', 'AI-ассистенты', 'Авто-обработка заметок'] },
  { category: 'Системы и инструменты', title: 'Агент-оптимизатор ПК', why: 'Помогает анализировать запущенные процессы, оптимизировать ресурсы и чистить компьютер.', features: ['Анализ процессов', 'Очистка памяти', 'Ускорение системы'] },
  { category: 'Системы и инструменты', title: 'База HR-аналитики', why: 'Анализ резюме и подбор кандидатов.', features: ['Сравнение резюме', 'Выбор топ-кандидатов', 'Объяснение выбора'] },
  { category: 'Системы и инструменты', title: 'База знаний маркетинга', why: 'Выделение болей клиентов для оффера.', features: ['Анализ CustDev', 'Отчеты конкурентов', 'Идеи для рекламы'] },
  { category: 'Системы и инструменты', title: 'Контент-система SMM', why: 'Генерация структуры из черновиков.', features: ['База заметок', 'Сценарии видео', 'Структуры презентаций'] },
  { category: 'Системы и инструменты', title: 'Образовательная база', why: 'Создание шпаргалок из лекций.', features: ['Импорт YouTube лекций', 'Главные даты', 'Списки терминов'] },
  { category: 'Системы и инструменты', title: 'AI-преподаватель', why: 'Помощь в обучении по вашим материалам.', features: ['Учебные материалы', 'Проверка знаний', 'Персональный тютор'] },
  { category: 'Системы и инструменты', title: 'Генератор подкастов', why: 'Живой диалог из скучных документов.', features: ['Audio Overview', 'Два ведущих', 'Готовый аудиофайл'] },

  { category: 'Визуальный контент', title: 'Интерактивный урок', why: 'Взаимодействие с контентом.', features: ['Мини-приложение', 'Интерактивные кнопки', 'Выбор вариантов'] },
  { category: 'Визуальный контент', title: 'Генератор презентаций', why: 'Единый стиль во всех инструментах.', features: ['Дизайн-токены', 'Авто-стилизация', 'Перенос стилей'] },

  { category: 'Аудио и транскрипция', title: 'Архив знаний', why: 'Архивация созвонов для дальнейшей работы.', features: ['Разделение спикеров', 'Текстовая база', 'Создание протоколов'] },
  { category: 'Аудио и транскрипция', title: 'Саммарайзер контента', why: 'Сжатая выжимка из длинных видео.', features: ['YouTube download', 'Whisper транскрипция', 'Обработка голосовых'] },
];

export const COURSE_OUTCOMES: OutcomeCategory[] = [
  {
    title: 'Навыки работы с AI-инструментами',
    items: [
      { title: 'Эффективное использование AI', description: 'Умение выбирать и применять нужные инструменты для задач, понимание их возможностей и ограничений.' },
      { title: 'Vibe Coding в Cursor', description: 'Комбинация голоса, рук и AI для создания программ без глубоких знаний программирования.' },
      { title: 'Контекст-инжиниринг', description: 'Системное управление информацией для LLM: структурирование данных, метод "Акинатор".' },
      { title: 'AI-мышление', description: 'Новый подход к решению задач: адаптивность, мышление как "архитектор информации".' },
      { title: 'Визуальные инструменты для кода', description: 'Работа с Gemini, v0 и другими инструментами для генерации интерфейсов.' },
      { title: 'AI для документов и презентаций', description: 'Генерация презентаций, автоматическое создание документов и таблиц.' },
      { title: 'Голосовой ввод (Whisper)', description: 'Диктовка вместо печати, транскрибация встреч и видео, обработка голосовых сообщений.' },
      { title: 'Работа в NotebookLM', description: 'Создание персонального RAG, генерация подкастов из документов, анализ данных.' }
    ]
  },
  {
    title: 'Созданные продукты и системы',
    items: [
      { title: 'Сайт или лендинг', description: 'Работающий сайт, размещенный на хостинге (Netlify/Vercel), доступный по ссылке.' },
      { title: 'Telegram-бот 24/7', description: 'Функциональный бот, размещенный на сервере (Railway), отвечающий круглосуточно.' },
      { title: 'Second Brain система', description: 'Личная база знаний с AI-ассистентами и автоматической обработкой заметок.' },
      { title: 'Презентации и документы', description: 'Готовые интерактивные презентации и таблицы, созданные с использованием AI.' },
      { title: 'Личная база данных', description: 'Специализированные базы знаний для HR, маркетинга, SMM или обучения.' },
      { title: 'AI-преподаватель', description: 'Персональный тютор на основе ваших материалов, который проверяет знания.' }
    ]
  },
  {
    title: 'Технические навыки и инфраструктура',
    items: [
      { title: 'Настройка инфраструктуры', description: 'Работа с GitHub, Railway, Netlify, OpenRouter (API шлюзы).' },
      { title: 'Деплой проектов', description: 'Публикация в интернет, настройка доменов и автоматическое обновление.' },
      { title: 'Работа с API и интеграциями', description: 'Подключение моделей через OpenRouter, работа с переменными окружения.' },
      { title: 'Система контроля версий (Git)', description: 'Создание точек сохранения, откат версий, безопасность прогресса разработки.' },
      { title: 'Организация воркспейса', description: 'Структура папок для проектов, разделение данных (PRD, ТЗ, дизайн-токены).' }
    ]
  },
  {
    title: 'Новый способ работы и мышления',
    items: [
      { title: 'Независимость от программистов', description: 'Способность самостоятельно создавать простые инструменты и автоматизации.' },
      { title: 'Скорость проверки идей', description: 'Умение быстро создавать прототипы за вечер для проверки гипотез.' },
      { title: 'Адаптивность', description: 'Умение использовать весь доступный контекст и быстро адаптироваться к инструментам.' },
      { title: 'Настроенная продуктивность', description: 'Личная система работы на готовых сервисах, автоматизация рутины.' },
      { title: 'Рекурсивное обучение', description: 'Способность учиться через объяснение AI собственного кода и процессов.' }
    ]
  },
  {
    title: 'Практические знания',
    items: [
      { title: '30+ примеров проектов', description: 'Боты, сайты, системы, которые можно адаптировать под свои задачи.' },
      { title: 'Понимание AI-терминологии', description: 'Знание всех понятий: LLM, RAG, промпт, контекст, деплой и другие.' },
      { title: 'Знание 40+ сервисов', description: 'Опыт работы с огромным стеком актуальных AI-инструментов.' }
    ]
  },
  {
    title: 'Сообщество и поддержка',
    items: [
      { title: 'Доступ к материалам', description: 'Все записи уроков, гайды и документы остаются доступными.' },
      { title: 'Опыт работы в команде', description: 'Участие в демо-дне, презентация проектов, обмен опытом.' },
      { title: 'Понимание AI-трендов', description: 'Актуальная информация о развитии AI-технологий.' }
    ]
  }
];

export const FAQ: FAQItem[] = [
  // Общие вопросы о кэмпе
  { category: 'Общие вопросы', question: 'Что такое AI Camp?', answer: 'За 21 день участники учатся создавать боты, сайты и системы, используя AI как соавтора, без навыков программирования, и развивают AI-мышление для решения любых задач.' },
  { category: 'Общие вопросы', question: 'Для кого этот кэмп?', answer: 'Для всех, кто работает за компьютером: профессии, связанные с информацией и контентом, те, кто работает с личной эффективностью и продуктивностью, кто уже сталкивался с LLM, но не раскрыл их потенциал, и кто использует отдельные инструменты, но не системно.' },
  { category: 'Общие вопросы', question: 'Какой формат обучения?', answer: 'Онлайн. Смешанный формат: 4 эфира (1.5–2 часа каждый), 8 уроков в записи, гайды и документы. Выходные дни включены для отдыха и практики.' },
  { category: 'Общие вопросы', question: 'Сколько длится кэмп?', answer: '21 день.' },
  { category: 'Общие вопросы', question: 'Что входит в программу?', answer: 'Whisper (голосовой ввод), контекст-инжиниринг, NotebookLM, Vibe Coding с Cursor, создание сайтов и ботов, Second Brain система, создание презентаций, AI-мышление и системный подход к продуктивности.' },

  // Технические требования
  { category: 'Технические требования', question: 'Нужен ли опыт программирования?', answer: 'Нет. Кэмп рассчитан на людей без опыта. Вы используете AI для генерации кода, ваша задача — правильно формулировать запросы и дорабатывать результат.' },
  { category: 'Технические требования', question: 'Нужно ли устанавливать специальные программы?', answer: 'Да, несколько: Cursor (редактор кода с AI), MacWhisper или WhisperFlow (для голосового ввода). Остальные инструменты работают в браузере.' },
  { category: 'Технические требования', question: 'Нужно ли покупать подписки на AI-сервисы?', answer: 'Для начала достаточно бесплатных тарифов и OpenRouter (платите только за использованные токены). По мере роста проектов может понадобиться больше ресурсов.' },
  { category: 'Технические требования', question: 'Какие сервисы нужно зарегистрировать?', answer: 'Полный список сервисов с инструкциями по регистрации находится в чек-листе подготовки внутри гайда.' },

  // Организация обучения
  { category: 'Организация обучения', question: 'Сколько времени нужно уделять кэмпу?', answer: 'Эфиры: 1.5–2 часа (4 эфира за кэмп)\nПросмотр записей: 30–60 минут на урок\nПрактика: 1–2 часа в день (рекомендуется)\nИтого: примерно 2–3 часа в день активной работы.' },
  { category: 'Организация обучения', question: 'Можно ли пропускать занятия?', answer: 'Да, все записи доступны. Рекомендуется смотреть эфиры в прямом эфире, чтобы задавать вопросы.' },
  { category: 'Организация обучения', question: 'Что делать, если я отстаю от программы?', answer: 'Кэмп рассчитан на разный темп. Главное — делать практические задания и создавать свой проект. Вы всегда можете вернуться к записям.' },
  { category: 'Организация обучения', question: 'Будут ли доступны материалы после окончания кэмпа?', answer: 'Да, все записи уроков, гайды и документы остаются доступными.' },
  { category: 'Организация обучения', question: 'Как организована поддержка?', answer: 'Чат кэмпа в Telegram — задавайте вопросы, помогайте друг другу\nЭфиры — задавайте вопросы во время эфиров' },

  // Результаты и проекты
  { category: 'Результаты и проекты', question: 'Что я получу на выходе?', answer: 'Навыки работы с AI-инструментами и Vibe Coding\nСозданные продукты: работающий сайт или лендинг, Telegram-бот 24/7, Second Brain система\nНовый способ работы: независимость от программистов для простых задач, скорость проверки идей, AI-мышление\nТехнические навыки: настройка инфраструктуры, деплой проектов, работа с API' },
  { category: 'Результаты и проекты', question: 'Нужно ли придумывать свой проект?', answer: 'Рекомендуется выбрать реальную задачу из вашей жизни — так эффект будет максимальным. В кэмпе вас ждет 30+ примеров проектов для вдохновения.' },
  { category: 'Результаты и проекты', question: 'Какие проекты можно создать в Кэмпе?', answer: 'Боты (писатель, трекер привычек, CRM-ассистент, саммарайзер и др.), сайты (портфолио, лендинг, дашборд, блог, интернет-магазин), системы (Second Brain, базы знаний, AI-преподаватель).' },
  { category: 'Результаты и проекты', question: 'Смогу ли я создать что-то работающее, если никогда не программировал?', answer: 'Да. Вы будете использовать Vibe Coding — комбинацию голоса (диктовка через Whisper), рук (редактирование) и AI (генерация кода). AI пишет код, вы формулируете задачи и дорабатываете результат.' },

  // Дополнительные вопросы
  { category: 'Дополнительные вопросы', question: 'Будут ли домашние задания?', answer: 'Да, практические задания после каждого урока. Главное — создание своего проекта на протяжении всего кэмпа.' },
  { category: 'Дополнительные вопросы', question: 'Можно ли проходить кэмп с телефона?', answer: 'Нет, нужен компьютер. Многие инструменты требуют установки программ и работы в редакторе кода.' },
  { category: 'Дополнительные вопросы', question: 'Есть ли корпоративный формат?', answer: 'Да, есть корпоративное обучение. Напишите в поддержку для обсуждения условий.' },
  { category: 'Дополнительные вопросы', question: 'Когда следующий поток?', answer: 'Следите за обновлениями в Telegram-канале "Точки над ИИ" или на сайте кэмпа.' }
];

export interface ServiceLink {
  name: string;
  url: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceLink[];
}

export const SERVICES_LINKS: ServiceCategory[] = [
  {
    category: 'AI-ассистенты и чат-боты',
    items: [
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'ChatGPT', url: 'https://chatgpt.com' },
      { name: 'Gemini', url: 'https://gemini.google.com' },
      { name: 'Perplexity', url: 'https://perplexity.ai' },
      { name: 'Kimi', url: 'https://kimi.moonshot.cn' }
    ]
  },
  {
    category: 'IDE и Vibe Coding',
    items: [
      { name: 'Cursor', url: 'https://cursor.com' },
      { name: 'Claude Code', url: 'https://claude.ai/code' },
      { name: 'Antigravity', url: 'https://antigravity.google/' },
      { name: 'Conductor', url: 'https://www.conductor.build/' },
      { name: 'v0 (реф.)', url: 'https://v0.app/ref/4AZTJ9' }, // реферальная ссылка
      { name: 'Google AI Studio', url: 'https://aistudio.google.com' },
      { name: 'Kimi K2', url: 'https://kimi.moonshot.cn' },
      { name: 'ChatGPT Canvas', url: 'https://chatgpt.com' },
      { name: 'Gemini Canvas', url: 'https://gemini.google.com' }
    ]
  },
  {
    category: 'Браузеры с AI',
    items: [
      { name: 'Dia', url: 'https://diabrowser.com' },
      { name: 'Comet', url: 'https://www.perplexity.ai/comet' },
      { name: 'Microsoft Edge', url: 'https://microsoft.com/edge' },
      { name: 'Atlas', url: 'https://chatgpt.com/es-419/atlas/' },
      { name: 'Claude для Chrome', url: 'https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn' },
      { name: 'Sider', url: 'https://chromewebstore.google.com/detail/sider-%D0%BE%D0%B1%D1%89%D0%B0%D0%B9%D1%82%D0%B5%D1%81%D1%8C-%D1%81%D0%BE-%D0%B2%D1%81%D0%B5%D0%BC%D0%B8/difoiogjjojoaoomphldepapgpbgkhkb' }
    ]
  },
  {
    category: 'Голосовой ввод и транскрибация',
    items: [
      { name: 'MacWhisper', url: 'https://goodsnooze.gumroad.com/l/macwhisper' },
      { name: 'WhisperFlow', url: 'https://wisprflow.ai/' },
      { name: 'Handy', url: 'https://handy.computer/' }
    ]
  },
  {
    category: 'Работа с документами и знаниями',
    items: [
      { name: 'Google NotebookLM', url: 'https://notebooklm.google.com' },
      { name: 'Google AI Studio', url: 'https://aistudio.google.com' },
      { name: 'Notion', url: 'https://notion.so' }
    ]
  },
  {
    category: 'Хостинг и деплой',
    items: [
      { name: 'Vercel', url: 'https://vercel.com' },
      { name: 'Netlify', url: 'https://netlify.com' },
      { name: 'GitHub Pages', url: 'https://pages.github.com' },
      { name: 'Railway (реф.)', url: 'https://railway.com?referralCode=SKavd1' } // реферальная ссылка
    ]
  },
  {
    category: 'Версионирование кода',
    items: [
      { name: 'GitHub', url: 'https://github.com' }
    ]
  },
  {
    category: 'API и интеграции',
    items: [
      { name: 'OpenRouter', url: 'https://openrouter.ai' },
      { name: 'OpenAI API', url: 'https://platform.openai.com' },
      { name: 'BotFather (Telegram)', url: 'https://t.me/BotFather' }
    ]
  },
  {
    category: 'Базы данных',
    items: [
      { name: 'Railway (PostgreSQL, реф.)', url: 'https://railway.com?referralCode=SKavd1' }, // реферальная ссылка
      { name: 'Supabase', url: 'https://supabase.com' },
      { name: 'Neon', url: 'https://neon.tech' }
    ]
  },
  {
    category: 'Презентации',
    items: [
      { name: 'Gamma', url: 'https://gamma.app' },
      { name: 'Genspark', url: 'https://genspark.ai' },
      { name: 'Google AI Studio', url: 'https://aistudio.google.com' },
      { name: 'Gemini', url: 'https://gemini.google.com' },
      { name: 'Kimi Slides', url: 'https://www.kimi.com/slides' },
      { name: 'Figma Slides', url: 'https://figma.com/slides' }
    ]
  },
  {
    category: 'Работа с таблицами',
    items: [
      { name: 'Rows', url: 'https://rows.com' },
      { name: 'Gemini в Google Sheets', url: 'https://workspace.google.com/products/sheets' },
      { name: 'Claude in Excel', url: 'https://claude.com/claude-in-excel' }
    ]
  }
];

export interface BookshelfResource {
  name: string;
  url: string;
  description: string;
  language: 'ru' | 'en';
}

export interface BookshelfCategory {
  category: string;
  items: BookshelfResource[];
}

export const BOOKSHELF_CATEGORIES: BookshelfCategory[] = [
  {
    category: 'Рассылки',
    items: [
      { name: 'Every.to', url: 'https://every.to/', description: 'AI в работе и бизнесе, приложения', language: 'en' },
      { name: 'How to AI', url: 'https://ruben.substack.com/', description: 'Практические промпты от Ruben Hassid', language: 'en' },
      { name: 'One Useful Thing', url: 'https://www.oneusefulthing.org/', description: 'Этан Моллик об AI в работе и образовании', language: 'en' },
      { name: 'The Batch', url: 'https://www.deeplearning.ai/the-batch/', description: 'Новости AI от DeepLearning.AI', language: 'en' },
      { name: 'The Rundown AI', url: 'https://www.therundown.ai/', description: 'Дайджест AI-новостей', language: 'en' }
    ]
  },
  {
    category: 'Блоги',
    items: [
      { name: 'Import AI', url: 'https://jack-clark.net/', description: 'Глубокая аналитика AI от Jack Clark', language: 'en' }
    ]
  },
  {
    category: 'Telegram-каналы',
    items: [
      { name: 'Точки над AI', url: 'https://t.me/TochkiNadAI', description: 'Русскоязычный канал об AI', language: 'ru' }
    ]
  },
  {
    category: 'YouTube-каналы',
    items: [
      { name: 'AI Explained', url: 'https://www.youtube.com/@aiexplained-official', description: 'Разборы AI-технологий', language: 'en' }
    ]
  }
];
