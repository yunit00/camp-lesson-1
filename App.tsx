
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  Calendar, 
  Lightbulb, 
  Cpu, 
  FolderOpen, 
  Check, 
  Menu, 
  X,
  ArrowRight,
  Target,
  HelpCircle,
  Package,
  Zap
} from 'lucide-react';
import { SECTIONS, CHECKLIST, TOOLS, COURSE_STRUCTURE, PROJECTS, FAQ } from './constants';

// Components
const Navbar = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => (
  <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center lg:hidden">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
        <Cpu className="text-white w-5 h-5" />
      </div>
      <span className="font-bold tracking-tight">AI CAMP</span>
    </div>
    <button onClick={onOpenSidebar} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
      <Menu className="w-6 h-6" />
    </button>
  </nav>
);

const Sidebar = ({ activeSection, onSelect, isOpen, onClose }: { activeSection: string, onSelect: (id: string) => void, isOpen: boolean, onClose: () => void }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#f4f4f2] border-r border-gray-200/50 transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-tighter">AI CAMP</h1>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest mt-1 underline decoration-black decoration-2">STUDENT_GUIDE</p>
            </div>
            <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-200 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSelect(section.id);
                  onClose();
                }}
                className={`
                  w-full text-left px-4 py-3 rounded-lg text-xs font-mono transition-all duration-200 flex items-center justify-between group
                  ${activeSection === section.id 
                    ? 'bg-black text-white shadow-lg shadow-black/10' 
                    : 'text-gray-500 hover:bg-gray-200/60 hover:text-black'}
                `}
              >
                <span>{section.title}</span>
                {activeSection === section.id && <ChevronRight className="w-3 h-3" />}
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Start: 19 Jan 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    const saved = localStorage.getItem('ai_camp_checklist');
    if (saved) setCheckedItems(JSON.parse(saved));
  }, []);

  const toggleCheck = (id: string) => {
    const next = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(next);
    localStorage.setItem('ai_camp_checklist', JSON.stringify(next));
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a]">
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      
      <Sidebar 
        activeSection={activeSection} 
        onSelect={scrollTo}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="lg:ml-72 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 lg:px-12">
          
          {/* Header */}
          <section id="intro" className="mb-24 animate-in fade-in duration-700">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-mono text-gray-500 mb-6 tracking-wider">
              // AI GUIDE
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
              Гайд по<br />AI Camp
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center text-gray-500 mb-12">
              <p className="max-w-md text-xl leading-relaxed">
                Практикуем AI-мышление. Узнайте, как превратить AI в личного ассистента, разработчика и партнера.
              </p>
              <div className="hidden md:block w-px h-12 bg-gray-200" />
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-widest text-black font-bold">Duration: 21 Days</p>
                <p className="text-xs font-mono uppercase tracking-widest">Start: 19.01.2026</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xs font-mono text-gray-400 mb-4 uppercase tracking-widest">Программа</h3>
                <ul className="space-y-4">
                  {COURSE_STRUCTURE.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <span className="font-mono text-xs text-black font-bold">0{item.day}</span>
                      <span className="text-sm font-medium">{item.topic}</span>
                    </li>
                  ))}
                  <li className="text-gray-300 text-xs font-mono italic">... и еще 9 дней практики</li>
                </ul>
              </div>
              <div className="bg-black text-white p-8 rounded-3xl border border-black shadow-xl shadow-black/10 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Используйте чеклист ниже, чтобы отслеживать свой прогресс в подготовке к старту.
                  </p>
                </div>
                <button 
                  onClick={() => scrollTo('checklist')}
                  className="mt-8 bg-white text-black px-6 py-3 rounded-full text-xs font-mono font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 w-fit"
                >
                  НАЧАТЬ ПОДГОТОВКУ <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section id="checklist" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <CheckCircle2 className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Чеклист подготовки</h2>
            </div>
            
            <div className="space-y-12">
              {(['registration', 'tools', 'workspace'] as const).map(cat => (
                <div key={cat} className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 border-b border-gray-100 pb-2">
                    {cat === 'registration' ? 'Регистрация в сервисах' : cat === 'tools' ? 'Установка инструментов' : 'Рабочее пространство'}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {CHECKLIST.filter(item => item.category === cat).map(item => (
                      <div 
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`
                          group cursor-pointer p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4
                          ${checkedItems[item.id] 
                            ? 'bg-gray-50 border-gray-200 opacity-60' 
                            : 'bg-white border-gray-100 hover:border-black hover:shadow-md'}
                        `}
                      >
                        <div className={`
                          mt-0.5 w-6 h-6 rounded-md border flex items-center justify-center transition-colors
                          ${checkedItems[item.id] ? 'bg-black border-black' : 'border-gray-200 group-hover:border-black'}
                        `}>
                          {checkedItems[item.id] && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-bold ${checkedItems[item.id] ? 'line-through text-gray-400' : ''}`}>
                              {item.label}
                            </span>
                            {item.link && !checkedItems[item.id] && (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-gray-400 hover:text-black"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tools Table */}
          <section id="tools" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <Package className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight text-balance">Обзор инструментов</h2>
            </div>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <th className="py-4 font-normal">Инструмент</th>
                    <th className="py-4 font-normal">Назначение</th>
                    <th className="py-4 font-normal">Когда?</th>
                    <th className="py-4 font-normal text-right">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {TOOLS.map((tool, i) => (
                    <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 font-bold text-sm">{tool.name}</td>
                      <td className="py-5 text-sm text-gray-600">{tool.purpose}</td>
                      <td className="py-5 text-sm">
                        <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-mono">{tool.when}</span>
                      </td>
                      <td className="py-5 text-right">
                        <a href={tool.link} className="inline-block p-2 hover:bg-black hover:text-white rounded-lg transition-all">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Glossary */}
          <section id="glossary" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <BookOpen className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Глоссарий</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: 'LLM', d: 'Большая языковая модель (GPT-4, Claude). Понимает и генерирует текст.' },
                { t: 'Vibe Coding', d: 'Подход, где вы не пишете код с нуля, а комбинируете голос (Whisper), AI-генерацию и точечные правки в Cursor.' },
                { t: 'RAG', d: 'AI отвечает только на основе ваших документов (NotebookLM).' },
                { t: 'Prompt', d: 'Ваш запрос или инструкция для нейросети.' },
                { t: 'Context', d: 'Вся информация, которую вы даете AI перед вопросом.' },
                { t: 'API', d: 'Способ общения программ. API-ключ — это пароль доступа.' },
                { t: 'Tokens', d: 'Единицы измерения текста. 1 токен ≈ 0.75 слова.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <h4 className="font-mono font-bold text-black mb-2">{item.t}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Structure */}
          <section id="structure" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <Calendar className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Структура курса</h2>
            </div>
            
            {[1, 2, 3].map(week => (
              <div key={week} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono font-black bg-black text-white px-3 py-1 rounded">WEEK 0{week}</span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>
                <div className="space-y-4">
                  {COURSE_STRUCTURE.filter(d => d.week === week).map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center font-mono text-sm group-hover:bg-black group-hover:text-white transition-all">
                          {item.day}
                        </div>
                        <div className="w-px flex-1 bg-gray-100 my-2" />
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold">{item.topic}</h4>
                          <span className="text-[10px] font-mono text-gray-400 px-2 py-0.5 border border-gray-100 rounded">{item.format}</span>
                        </div>
                        <p className="text-sm text-gray-500">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Inspiration */}
          <section id="inspiration" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <Lightbulb className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Вдохновение</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((proj, i) => (
                <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl group hover:shadow-2xl hover:shadow-black/5 transition-all">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{proj.category}</span>
                  <h4 className="text-xl font-bold mt-4 mb-2">{proj.title}</h4>
                  <p className="text-sm text-gray-600 mb-6 font-medium italic">{proj.why}</p>
                  <ul className="space-y-2">
                    {proj.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="w-3 h-3 text-black" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Thinking */}
          <section id="thinking" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <Target className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">AI-мышление</h2>
            </div>
            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-6 italic">Принцип "Слепой специалист"</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Представьте, что AI — гений в пустой комнате с завязанными глазами. Он не видит ваш мир. Ваша задача — передать ему полное описание реальности через контекст.
                </p>
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Упражнение №1:</p>
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 space-y-4">
                    <p className="text-sm font-medium">Опишите задачу специалисту:</p>
                    <ul className="space-y-3 text-sm text-gray-500">
                      <li className="flex gap-3">
                        <span className="font-mono text-black font-bold">1.</span>
                        Что вы хотите получить в итоге?
                      </li>
                      <li className="flex gap-3">
                        <span className="font-mono text-black font-bold">2.</span>
                        Какие у вас ограничения?
                      </li>
                      <li className="flex gap-3">
                        <span className="font-mono text-black font-bold">3.</span>
                        Что уже сделано?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section id="efficiency" className="mb-32 scroll-mt-24">
             <div className="flex items-center gap-4 mb-12">
              <Zap className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Эффективность</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex-shrink-0 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Метод "Акинатор"</h4>
                    <p className="text-sm text-gray-500">Пусть AI сам задаст вопросы для ТЗ.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex-shrink-0 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Валидация ответов</h4>
                    <p className="text-sm text-gray-500">Просите оценить свой ответ от 0 до 100.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex-shrink-0 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Гигиена контекста</h4>
                    <p className="text-sm text-gray-500">Новая тема — новый чат с саммари.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex-shrink-0 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold mb-1">Markdown структура</h4>
                    <p className="text-sm text-gray-500">Используйте заголовки и списки в промптах.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Folder Structure */}
          <section id="organization" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <FolderOpen className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight text-balance">Организация файлов</h2>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-3xl text-gray-300 font-mono text-xs leading-relaxed overflow-x-auto shadow-2xl">
              <p className="text-gray-500 mb-4">// Project structure</p>
              <div className="space-y-1">
                <p>AI_Camp_Projects/</p>
                <p className="pl-4">└── project_name/</p>
                <p className="pl-8 text-gray-500">├── README.md <span className="text-yellow-500/80 italic ml-2"># Описание</span></p>
                <p className="pl-8 text-gray-500">├── PRD.md <span className="text-yellow-500/80 italic ml-2"># Требования</span></p>
                <p className="pl-8 text-gray-500">├── design_tokens.md <span className="text-yellow-500/80 italic ml-2"># Стили</span></p>
                <p className="pl-8 text-gray-500">├── code/ <span className="text-yellow-500/80 italic ml-2"># Код</span></p>
                <p className="pl-8 text-gray-500">└── notes/ <span className="text-yellow-500/80 italic ml-2"># Заметки</span></p>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section id="outcomes" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <Target className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Результаты курса</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Освоите Vibe Coding',
                'Создадите свою Second Brain систему',
                'Научитесь делать сайты и боты',
                'Настроите личную систему процессов',
                'Разрушите барьер "я не программист"',
                'Ускорите проверку идей в 10 раз'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Links */}
          <section id="links" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <ExternalLink className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Полезные ссылки</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {TOOLS.map((tool, i) => (
                <a 
                  key={i} 
                  href={tool.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4 bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-black transition-all group"
                >
                  <span className="text-xs font-bold text-center group-hover:underline">{tool.name}</span>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <HelpCircle className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">FAQ</h2>
            </div>
            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <details key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 cursor-pointer">
                  <summary className="flex items-center justify-between list-none font-bold text-lg pr-4">
                    {item.question}
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-gray-500 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Essentials */}
          <section id="essentials" className="mb-32 scroll-mt-24">
            <div className="flex items-center gap-4 mb-12">
              <Package className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Что иметь под рукой</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold mb-4">Банковская карта</h4>
                <p className="text-xs text-gray-500">Для оплаты OpenRouter и API по мере необходимости.</p>
              </div>
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <h4 className="font-bold mb-4">Telegram</h4>
                <p className="text-xs text-gray-500">Для чата курса и создания ботов через BotFather.</p>
              </div>
              <div className="p-8 rounded-3xl bg-black text-white shadow-xl shadow-black/10">
                <h4 className="font-bold mb-4">Любопытство</h4>
                <p className="text-xs text-gray-400">Экспериментируйте. Это лучший способ научиться AI.</p>
              </div>
            </div>
          </section>

          {/* Final Footer */}
          <footer className="pt-24 pb-12 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-400 font-mono mb-6 italic">
              Этот гайд — ваша шпаргалка на весь курс. Сохраните его.
            </p>
            <div className="flex justify-center gap-4 mb-8">
               <button 
                  onClick={() => scrollTo('intro')}
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Cpu className="w-6 h-6" />
                </button>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400">
              © 2026 AI CAMP EDITION
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
