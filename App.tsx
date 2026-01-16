
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  Calendar, 
  Lightbulb, 
  Cpu, 
  Check, 
  Menu, 
  X,
  ArrowRight,
  HelpCircle,
  Zap,
  CreditCard,
  ShieldCheck,
  Sparkles,
  Award,
  Users,
  MessageSquare,
  Terminal,
  Settings,
  Coffee,
  Info,
  AlertTriangle,
  ShoppingBag,
  Globe,
  Gift,
  FileText,
  Flame,
  Mic,
  MousePointer2,
  BrainCircuit,
  Fingerprint
} from 'lucide-react';
import { SECTIONS, DAILY_TRACKER, PROJECTS, FAQ, GLOSSARY_CATEGORIES, COURSE_OUTCOMES } from './constants';

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
              <p className="text-[10px] text-gray-400 font-mono tracking-widest mt-1 uppercase">STUDENT_GUIDE</p>
            </div>
            <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-200 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
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
                <span className="truncate">{section.title}</span>
                {activeSection === section.id && <ChevronRight className="w-3 h-3 flex-shrink-0" />}
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Старт: 19 Янв 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('ai_camp_active_section') || 'intro';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [checkedServices, setCheckedServices] = useState<Record<string, boolean>>({});
  const [faqCategory, setFaqCategory] = useState('Общие вопросы');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  
  // Persist checked services
  useEffect(() => {
    const saved = localStorage.getItem('ai_camp_services_tracker');
    if (saved) setCheckedServices(JSON.parse(saved));
  }, []);

  // Handle section changes: persist and scroll to top
  useEffect(() => {
    localStorage.setItem('ai_camp_active_section', activeSection);
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  const toggleService = (id: string) => {
    const next = { ...checkedServices, [id]: !checkedServices[id] };
    setCheckedServices(next);
    localStorage.setItem('ai_camp_services_tracker', JSON.stringify(next));
  };

  const faqCategories = Array.from(new Set(FAQ.map(f => f.category)));
  const getFaqIcon = (category: string) => {
    switch (category) {
      case 'Общие вопросы': return <Info className="w-4 h-4" />;
      case 'Технические требования': return <Terminal className="w-4 h-4" />;
      case 'Организация обучения': return <Calendar className="w-4 h-4" />;
      case 'Результаты и проекты': return <Award className="w-4 h-4" />;
      case 'Дополнительные вопросы': return <MessageSquare className="w-4 h-4" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div className="animate-in fade-in duration-700 max-w-3xl mx-auto py-4 lg:py-6">
            <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                   <Fingerprint className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-400 leading-none mb-1 uppercase tracking-tighter">AUTHENTICATED_ACCESS</p>
                  <p className="text-xs font-black uppercase tracking-wider">CAMP_INITIALIZED</p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-mono text-gray-400 uppercase">Phase_00</p>
                <p className="text-xs font-bold uppercase">Initialization</p>
              </div>
            </div>

            <div className="space-y-10">
              <section className="relative">
                <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
                  Добро пожаловать в <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-400">AI-кэмп!</span>
                </h1>
                <div className="max-w-2xl">
                  <p className="text-xl lg:text-2xl font-medium leading-snug tracking-tight text-gray-900">
                    Сегодня мы начинаем перепрошивку подхода к работе и жизни через ИИ инструменты. 
                  </p>
                  <p className="mt-4 text-gray-500 text-base lg:text-lg leading-relaxed">
                    Этот гайд – сборник основных вопросов и тем. Его не нужно зубрить, он просто будет у вас под рукой и поможет сверяться, а также даст примеры для вдохновения и некоторые чит-коды.
                  </p>
                </div>
              </section>

              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-black/10" />
                <span className="text-[10px] font-mono text-gray-300 tracking-[0.4em] uppercase">21_days_reload</span>
                <div className="h-px flex-1 bg-black/10" />
              </div>

              <section className="space-y-4">
                <p className="text-xl lg:text-2xl font-medium leading-snug tracking-tight text-gray-900">
                  В ближайший 21 день мы докажем, что ИИ – это мощный соавтор и компаньон. 
                </p>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed border-l-2 border-black pl-6 py-1">
                  Мы здесь для практики: через голос, руки и AI-мышление вы научиться собирать работающие продукты буквально за вечер и проектировать собственную систему личной эффективности.
                </p>
              </section>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-black/10" />
                <span className="text-[10px] font-mono text-gray-300 tracking-[0.4em] uppercase">fire_is_on</span>
                <div className="h-px w-8 bg-black/10" />
              </div>

              <section className="text-center space-y-8 py-2">
                <div className="inline-flex flex-col items-center">
                  <div className="relative mb-6">
                     <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-10 animate-pulse rounded-full" />
                     <Flame className="w-12 h-12 text-orange-600 relative z-10 animate-bounce" />
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black tracking-tighter leading-tight max-w-2xl mx-auto">
                    Ваш путь к AI-ориентированному мышлению начинается прямо сейчас, <span className="underline decoration-orange-500 underline-offset-8">разводим костры!</span>
                  </h2>
                </div>

                <div>
                  <button 
                    onClick={() => setActiveSection('tracker')}
                    className="group relative inline-flex items-center gap-6 bg-black text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl shadow-black/10"
                  >
                    К следующему разделу <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </section>
            </div>
          </div>
        );

      case 'tracker':
        return (
          <div className="animate-in slide-in-from-right-4 fade-in duration-500">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle2 className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Трекер кэмпа</h2>
            </div>
            <p className="text-gray-500 mb-12 text-sm">Отмечайте сервисы и темы по мере прохождения модуля.</p>
            
            <div className="space-y-16">
              {[1, 2, 3].map(week => (
                <div key={week} className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-black bg-black text-white px-3 py-1 rounded">НЕДЕЛЯ 0{week}</span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  
                  <div className="space-y-10">
                    {DAILY_TRACKER.filter(d => d.week === week).map((day, di) => (
                      <div key={di} className="relative pl-8 border-l-2 border-gray-100 group hover:border-black transition-colors">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-gray-200 rounded-full group-hover:border-black transition-colors" />
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                              День {day.day}: {day.topic}
                            </h3>
                            <span className="text-[10px] font-mono text-gray-400 border px-2 py-0.5 rounded">{day.format}</span>
                          </div>
                          <p className="text-sm text-gray-500">{day.details}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {day.services.map((service) => (
                            <div 
                              key={service.id}
                              onClick={() => toggleService(service.id)}
                              className={`
                                cursor-pointer px-4 py-3 rounded-xl border transition-all duration-300 flex items-center gap-3 select-none
                                ${checkedServices[service.id] 
                                  ? 'bg-black border-black text-white shadow-xl shadow-black/30 scale-[1.05]' 
                                  : 'bg-white border-gray-100 hover:border-black hover:shadow-md active:scale-95'}
                              `}
                              style={{
                                transform: checkedServices[service.id] ? 'scale(1.05)' : 'scale(1)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                              }}
                            >
                              <div className={`
                                w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300
                                ${checkedServices[service.id] ? 'bg-white border-white rotate-0' : 'border-gray-200 rotate-45'}
                              `}>
                                {checkedServices[service.id] && <Check className="w-3 h-3 text-black stroke-[3]" />}
                              </div>
                              <span className="text-xs font-black truncate">{service.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'glossary':
        return (
          <div className="animate-in slide-in-from-right-4 fade-in duration-500">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Глоссарий терминов</h2>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {GLOSSARY_CATEGORIES.map((cat, ci) => (
                <div 
                  key={ci} 
                  className="break-inside-avoid-column mb-8 bg-white/50 border border-gray-100 p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 border-b-2 border-black pb-3 mb-6">
                    <h3 className="text-xs font-black uppercase tracking-widest">{cat.title}</h3>
                  </div>
                  <div className="space-y-6">
                    {cat.terms.map((item, ti) => (
                      <div key={ti} className="group">
                        <h4 className="font-bold text-[13px] mb-1 group-hover:text-black transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 bg-black/20 rounded-full" />
                          {item.t}
                        </h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed font-medium pl-3">
                          {item.d}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'inspiration':
        const categories = Array.from(new Set(PROJECTS.map(p => p.category)));
        return (
          <div className="animate-in slide-in-from-right-4 fade-in duration-500">
            <div className="flex items-center gap-4 mb-12">
              <Lightbulb className="w-8 h-8 text-black" />
              <h2 className="text-4xl font-bold tracking-tight">Вдохновение</h2>
            </div>
            <div className="space-y-16">
              {categories.map(category => (
                <div key={category} className="space-y-8">
                  <h3 className="text-2xl font-black border-l-4 border-black pl-4">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.filter(p => p.category === category).map((proj, i) => (
                      <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl group hover:shadow-2xl hover:shadow-black/5 transition-all flex flex-col">
                        <h4 className="text-lg font-bold mb-3">{proj.title}</h4>
                        <p className="text-xs text-gray-600 mb-6 flex-grow">{proj.why}</p>
                        <div className="pt-4 border-t border-gray-50">
                          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-3">Функционал:</p>
                          <ul className="space-y-2">
                            {proj.features.map((f, j) => (
                              <li key={j} className="flex items-center gap-2 text-[11px] text-gray-500">
                                <Check className="w-3 h-3 text-black" /> {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'outcomes':
        return (
          <div className="animate-in slide-in-from-bottom-8 fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-4 border-black pb-8">
              <div>
                <Award className="w-12 h-12 text-black mb-4" />
                <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Чему вы <br/>научитесь</h2>
              </div>
              <div className="max-w-xs">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Общий итог:</p>
                <p className="text-sm font-medium leading-relaxed">Полная трансформация подхода к работе через AI-инструменты и инфраструктуру.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {COURSE_OUTCOMES.map((category, idx) => (
                <div key={idx} className="group flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 flex-1">
                    {category.items.map((item, i) => (
                      <div key={i} className="bg-white border-2 border-gray-100 p-6 rounded-[2rem] hover:border-black hover:shadow-xl transition-all duration-300">
                        <div className="flex gap-4">
                          <div className="mt-1">
                            <Sparkles className="w-4 h-4 text-black opacity-30 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div>
                            <h4 className="font-bold text-base mb-2 group-hover:underline">{item.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="animate-in slide-in-from-right-4 fade-in duration-500 h-full flex flex-col">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">Knowledge Base</span>
                </div>
                <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">FAQ / Вопросы</h2>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-full hidden md:block">
                <p className="text-[10px] font-mono text-gray-500 uppercase">Всего ответов: {FAQ.length}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 flex-1">
              <div className="lg:w-72 space-y-2">
                <p className="text-[10px] font-mono font-black text-gray-400 uppercase tracking-widest mb-4 ml-2">Разделы:</p>
                {faqCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setFaqCategory(category);
                      setOpenFaqIndex(null);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-xs font-bold transition-all
                      ${faqCategory === category 
                        ? 'bg-black text-white shadow-xl shadow-black/10 translate-x-1' 
                        : 'bg-white border border-gray-100 text-gray-500 hover:border-black hover:text-black'}
                    `}
                  >
                    {getFaqIcon(category)}
                    <span className="truncate">{category}</span>
                  </button>
                ))}
              </div>

              <div className="flex-1 space-y-4">
                <div className="mb-6">
                  <h3 className="text-xl font-black flex items-center gap-3">
                    <ChevronRight className="w-5 h-5" />
                    {faqCategory}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {FAQ.filter(f => f.category === faqCategory).map((item, i) => {
                    const isOpen = openFaqIndex === i;
                    return (
                      <div 
                        key={i} 
                        className={`
                          bg-white rounded-3xl border transition-all duration-300
                          ${isOpen ? 'border-black ring-1 ring-black shadow-lg' : 'border-gray-100 hover:border-gray-300'}
                        `}
                      >
                        <button 
                          onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                          className="w-full text-left px-8 py-6 flex items-center justify-between group"
                        >
                          <span className="font-bold text-base pr-4 leading-tight">{item.question}</span>
                          <div className={`
                            w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all
                            ${isOpen ? 'bg-black text-white border-black rotate-90' : 'bg-gray-50 group-hover:bg-black group-hover:text-white group-hover:border-black'}
                          `}>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </button>
                        
                        <div className={`
                          overflow-hidden transition-all duration-300
                          ${isOpen ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0'}
                        `}>
                          <div className="h-px bg-gray-100 mb-6" />
                          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl whitespace-pre-wrap">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      case 'essentials':
        return (
          <div className="animate-in slide-in-from-right-4 fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400">Billing Guide</span>
                </div>
                <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Оплата <br/>сервисов</h2>
              </div>
              
              <div className="bg-white border-2 border-gray-100 p-8 rounded-[2.5rem] max-w-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                   <Users className="w-24 h-24 text-black" />
                </div>
                <div className="flex items-center gap-2 text-black mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest">Памятка Точки над ИИ</span>
                </div>
                <div className="space-y-4 relative z-10">
                  <p className="text-xs text-gray-700 leading-relaxed font-medium italic">
                    "Если у вас нет иностранной карты или друзей за границей, готовых помочь с оплатой, мы собрали для вас этот список решений."
                  </p>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Эта база знаний сформирована силами нашего комьюнити. Пользуйтесь, но помните: все действия вы совершаете на свой страх и риск. Ни посредники, ни сами сервисы не дают 100% гарантий.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-10 hover:border-black transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">1. Готовые аккаунты</h3>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Самый простой путь</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Plati.market', desc: 'Маркетплейс цифровых товаров', url: 'https://plati.market' },
                    { name: 'GGSel', desc: 'Каталог продавцов и активаций', url: 'https://ggsel.net' },
                    { name: 'FunPay', desc: 'Биржа аккаунтов', url: 'https://funpay.com' },
                  ].map((item, i) => (
                    <a key={i} href={item.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl group hover:bg-black hover:text-white transition-all">
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-[10px] text-gray-400 group-hover:text-gray-300">{item.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-30 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-10 hover:border-black transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">2. Виртуальные карты</h3>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Для контроля баланса</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Zarub.io', desc: 'Карты для арбитража и сервисов', url: 'https://zarub.io' },
                    { name: 'Zambulay', desc: 'Предоплаченные карты Visa/Mastercard', url: 'https://zambulay.com' },
                  ].map((item, i) => (
                    <a key={i} href={item.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl group hover:bg-black hover:text-white transition-all">
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-[10px] text-gray-400 group-hover:text-gray-300">{item.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-30 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#fcfcfc] text-[#1a1a1a] flex flex-col lg:flex-row">
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />
      
      <Sidebar 
        activeSection={activeSection} 
        onSelect={(id) => setActiveSection(id)}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main 
        ref={mainContentRef}
        className="flex-1 overflow-y-auto custom-scrollbar"
      >
        <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16 lg:px-12 min-h-full flex flex-col">
          <div className="flex-1">
            {renderContent()}
          </div>
          
          <footer className="mt-16 pt-10 pb-10 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-400 font-mono mb-4 italic">
              Этот гайд — ваша шпаргалка на весь AI-кэмп
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400">
              © 2026 AI CAMP TOCHKI
            </p>
          </footer>
        </div>
      </main>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}</style>
    </div>
  );
}
