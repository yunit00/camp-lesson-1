
import { ChecklistItem, Tool, CourseDay, ProjectExample, FAQItem, Section } from './types';

export const SECTIONS: Section[] = [
  { id: 'intro', title: '00 // INTRO' },
  { id: 'checklist', title: '01 // CHECKLIST' },
  { id: 'tools', title: '02 // TOOLS' },
  { id: 'glossary', title: '03 // GLOSSARY' },
  { id: 'structure', title: '04 // STRUCTURE' },
  { id: 'inspiration', title: '05 // INSPIRATION' },
  { id: 'thinking', title: '06 // AI MINDSET' },
  { id: 'efficiency', title: '07 // WORKFLOW' },
  { id: 'organization', title: '08 // FILES' },
  { id: 'outcomes', title: '09 // RESULTS' },
  { id: 'links', title: '10 // LINKS' },
  { id: 'faq', title: '11 // FAQ' },
  { id: 'essentials', title: '12 // ESSENTIALS' }
];

export const CHECKLIST: ChecklistItem[] = [
  { id: 'git', label: 'GitHub', description: 'Создайте аккаунт для хранения кода', link: 'https://github.com', category: 'registration' },
  { id: 'rail', label: 'Railway', description: 'Регистрация для запуска ботов', link: 'https://railway.app', category: 'registration' },
  { id: 'net', label: 'Netlify', description: 'Регистрация для лендингов', link: 'https://netlify.com', category: 'registration' },
  { id: 'openr', label: 'OpenRouter', description: 'Доступ ко всем AI моделям', link: 'https://openrouter.ai', category: 'registration' },
  { id: 'google', label: 'Google Account', description: 'Для NotebookLM', category: 'registration' },
  { id: 'cursor', label: 'Cursor', description: 'Основной AI редактор кода', link: 'https://cursor.sh', category: 'tools' },
  { id: 'whisper', label: 'Whisper (Mac/Win)', description: 'Для голосового ввода', link: 'https://macwhisper.com', category: 'tools' },
  { id: 'folder', label: 'Папка проектов', description: 'Создайте AI_Camp_Projects', category: 'workspace' },
  { id: 'tg', label: 'Telegram', description: 'Доступ к чату курса', category: 'workspace' },
];

export const TOOLS: Tool[] = [
  { name: 'Whisper', purpose: 'Голосовой ввод текста', when: 'День 1-2', link: 'https://macwhisper.com' },
  { name: 'NotebookLM', purpose: 'Персональный RAG', when: 'День 3-4', link: 'https://notebooklm.google.com' },
  { name: 'Cursor', purpose: 'Редактор кода с AI', when: 'День 5-6', link: 'https://cursor.sh' },
  { name: 'GitHub', purpose: 'Хранение кода', when: 'День 6-7', link: 'https://github.com' },
  { name: 'Railway', purpose: 'Хостинг ботов', when: 'День 7-8', link: 'https://railway.app' },
  { name: 'Netlify', purpose: 'Хостинг сайтов', when: 'День 7-8', link: 'https://netlify.com' },
  { name: 'OpenRouter', purpose: 'Доступ к AI-моделям', when: 'День 6+', link: 'https://openrouter.ai' },
  { name: 'v0', purpose: 'Генерация UI', when: 'День 7-8', link: 'https://v0.dev' },
  { name: 'Google AI Studio', purpose: 'Презентации', when: 'День 10-11', link: 'https://aistudio.google.com' },
  { name: 'BotFather', purpose: 'Создание ботов', when: 'День 8-9', link: 'https://t.me/botfather' },
];

export const COURSE_STRUCTURE: CourseDay[] = [
  { day: '1', topic: 'Настройка сервисов', format: 'Документ', details: 'Регистрация везде', week: 1 },
  { day: '2', topic: 'Вводная лекция', format: 'Эфир 19:00', details: 'Тренды 2026, программа', week: 1 },
  { day: '3', topic: 'Whisper', format: 'Запись', details: 'Голосовой ввод текста', week: 1 },
  { day: '4', topic: 'Контекст-инжиниринг', format: 'Запись', details: 'Работа с контекстом', week: 1 },
  { day: '5', topic: 'NotebookLM', format: 'Запись', details: 'Обучение и документы', week: 1 },
  { day: '6', topic: 'Vibe Coding (Base)', format: 'Эфир 19:00', details: 'Cursor / Claude / v0', week: 2 },
  { day: '7', topic: 'Инфраструктура', format: 'Документ', details: 'GitHub, Railway, Netlify', week: 2 },
  { day: '8', topic: 'Сайты и лендинги', format: 'Запись/Эфир', details: 'Как делать свои сайты', week: 2 },
  { day: '9', topic: 'Telegram-боты', format: 'Документ', details: 'Как делать ботов', week: 2 },
  { day: '10', topic: 'Второй мозг', format: 'Запись', details: 'Second Brain система', week: 3 },
  { day: '11', topic: 'Контент с AI', format: 'Запись', details: 'Документы, таблицы, слайды', week: 3 },
  { day: '12', topic: 'AI-мышление', format: 'Эфир 19:00', details: 'Система процессов', week: 3 },
  { day: '13', topic: 'Демо-день', format: 'Эфир', details: 'Презентация проектов', week: 3 },
];

export const PROJECTS: ProjectExample[] = [
  { category: '🤖 Telegram-боты', title: 'Writer Bot', why: 'Быстрое редактирование текстов', features: ['Переписывание в стиле', 'Исправление ошибок', 'Кнопка "Улучшить"'] },
  { category: '🤖 Telegram-боты', title: 'Second Brain Input', why: 'Быстрый ввод идей', features: ['Прием голосовых заметок', 'Структурирование', 'Связь с базой знаний'] },
  { category: '🌐 Сайты', title: 'Сайт-шпаргалка', why: 'Полезный контент для других', features: ['Интерактивные элементы', 'Self-explaining дизайн'] },
  { category: '🌐 Сайты', title: 'Личное портфолио', why: 'Профессиональное лицо', features: ['Сборка за вечер', 'AI-генерация UI'] },
];

export const FAQ: FAQItem[] = [
  { question: 'Нужен ли опыт программирования?', answer: 'Нет. Курс рассчитан на новичков. Вы используете AI для кода.' },
  { question: 'Сколько времени уделять?', answer: 'Примерно 2-3 часа в день активной работы (эфиры + практика).' },
  { question: 'Что если я отстаю?', answer: 'Все записи доступны. Двигайтесь в своем темпе, главное — практика.' },
  { question: 'Нужны ли платные подписки?', answer: 'Для начала достаточно бесплатных тарифов и OpenRouter.' },
];
