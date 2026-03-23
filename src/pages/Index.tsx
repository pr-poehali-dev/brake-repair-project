import { useState } from "react";
import Icon from "@/components/ui/icon";

interface StructureItem { icon: string; label: string; desc: string; }
interface ProcessStep { num: string; title: string; desc: string; }
interface EquipCategory { title: string; icon: string; items: string[]; }
interface SafetyBlock { icon: string; title: string; text: string; }
interface Metric { label: string; value: string; unit: string; icon: string; }
interface TableRow { item: string; value: string; }

interface TitleSlide { id: number; type: "title"; title: string; subtitle: string; meta: string; year: string; }
interface StructureSlide { id: number; type: "structure"; title: string; content: { description: string; items: StructureItem[] }; }
interface ProcessSlide { id: number; type: "process"; title: string; content: { steps: ProcessStep[] }; }
interface EquipmentSlide { id: number; type: "equipment"; title: string; content: { categories: EquipCategory[] }; }
interface SafetySlide { id: number; type: "safety"; title: string; content: { intro: string; blocks: SafetyBlock[] }; }
interface EconomySlide { id: number; type: "economy"; title: string; content: { intro: string; metrics: Metric[]; table: TableRow[] }; }
interface ConclusionSlide { id: number; type: "conclusion"; title: string; content: { points: string[]; outro: string }; }

type Slide = TitleSlide | StructureSlide | ProcessSlide | EquipmentSlide | SafetySlide | EconomySlide | ConclusionSlide;

const slides: Slide[] = [
  {
    id: 1, type: "title",
    title: "Организация работы отделения по ремонту автотормозного оборудования и запорной арматуры",
    subtitle: "Курсовая работа",
    meta: "Специальность: Техническая эксплуатация подвижного состава железных дорог",
    year: "2024",
  },
  {
    id: 2, type: "structure", title: "Структура отделения",
    content: {
      description: "Отделение по ремонту автотормозного оборудования входит в состав вагонного депо и обеспечивает технически исправное состояние тормозных систем подвижного состава.",
      items: [
        { icon: "Users", label: "Мастер участка", desc: "Руководство производственным процессом, контроль качества" },
        { icon: "Wrench", label: "Слесари-ремонтники", desc: "Разборка, дефектовка, ремонт и сборка тормозного оборудования" },
        { icon: "FlaskConical", label: "Испытатели", desc: "Проверка тормозного оборудования на стендах после ремонта" },
        { icon: "ClipboardCheck", label: "Контролёр ОТК", desc: "Контроль качества отремонтированного оборудования" },
      ],
    },
  },
  {
    id: 3, type: "process", title: "Технологический процесс",
    content: {
      steps: [
        { num: "01", title: "Входной контроль", desc: "Приёмка неисправного оборудования, визуальный осмотр и регистрация дефектов" },
        { num: "02", title: "Разборка и очистка", desc: "Разборка узлов на составные части, промывка и обезжиривание деталей" },
        { num: "03", title: "Дефектовка", desc: "Измерение износа деталей, выявление трещин и других дефектов согласно нормам" },
        { num: "04", title: "Ремонт и замена", desc: "Восстановление или замена изношенных деталей, притирка уплотнений" },
        { num: "05", title: "Сборка", desc: "Сборка узлов в соответствии с технологическими картами и регламентами" },
        { num: "06", title: "Испытание", desc: "Испытание на стенде: проверка плотности, давления срабатывания, хода поршня" },
      ],
    },
  },
  {
    id: 4, type: "equipment", title: "Оборудование отделения",
    content: {
      categories: [
        { title: "Стендовое оборудование", icon: "Gauge", items: ["Стенд для испытания воздухораспределителей", "Стенд для проверки авторегуляторов", "Стенд для испытания концевых кранов"] },
        { title: "Технологическое оборудование", icon: "Settings", items: ["Моечная машина для деталей", "Пресс для запрессовки втулок", "Верстаки слесарные с тисками"] },
        { title: "Измерительный инструмент", icon: "Ruler", items: ["Манометры контрольные класс 0.4", "Штангенциркули, микрометры", "Щупы, калибры, шаблоны"] },
      ],
    },
  },
  {
    id: 5, type: "safety", title: "Охрана труда",
    content: {
      intro: "Работы в отделении выполняются в соответствии с требованиями Правил по охране труда при техническом обслуживании и ремонте грузовых вагонов.",
      blocks: [
        { icon: "ShieldCheck", title: "СИЗ", text: "Спецодежда, защитные очки, перчатки, защитная обувь — обязательны при выполнении всех видов работ" },
        { icon: "AlertTriangle", title: "Опасные факторы", text: "Сжатый воздух до 1,0 МПа, движущиеся части оборудования, острые кромки деталей, хим. вещества" },
        { icon: "BookOpen", title: "Инструктажи", text: "Вводный, первичный, повторный (1 раз в 6 мес.), внеплановый и целевой инструктажи по охране труда" },
        { icon: "Flame", title: "Пожарная безопасность", text: "Наличие первичных средств пожаротушения, курение запрещено, пути эвакуации свободны" },
      ],
    },
  },
  {
    id: 6, type: "economy", title: "Экономические показатели",
    content: {
      intro: "Расчёт экономической эффективности организации работы отделения за расчётный период.",
      metrics: [
        { label: "Программа ремонта", value: "4 800", unit: "ед./год", icon: "BarChart2" },
        { label: "Явочная численность", value: "12", unit: "чел.", icon: "Users" },
        { label: "Фонд рабочего времени", value: "1 987", unit: "час/год", icon: "Clock" },
        { label: "Производительность труда", value: "400", unit: "ед./чел.", icon: "TrendingUp" },
      ],
      table: [
        { item: "Фонд оплаты труда", value: "3 240 000 ₽" },
        { item: "Страховые взносы (30,2%)", value: "978 480 ₽" },
        { item: "Амортизация оборудования", value: "215 000 ₽" },
        { item: "Прочие расходы (15%)", value: "636 672 ₽" },
        { item: "Итого себестоимость", value: "5 070 152 ₽" },
      ],
    },
  },
  {
    id: 7, type: "conclusion", title: "Заключение",
    content: {
      points: [
        "Разработана рациональная организация рабочих мест отделения по ремонту автотормозного оборудования и запорной арматуры",
        "Составлен технологический процесс ремонта с учётом действующей нормативно-технической документации ОАО «РЖД»",
        "Подобрано необходимое технологическое оборудование и измерительный инструмент",
        "Разработаны мероприятия по охране труда и технике безопасности согласно требованиям ПОТРВ",
        "Проведён расчёт основных экономических показателей работы отделения",
      ],
      outro: "Внедрение предложенных решений позволит обеспечить качественный ремонт тормозного оборудования и повысить безопасность движения поездов.",
    },
  },
];

const SlideHeader = ({ title, num }: { title: string; num: number }) => (
  <div className="flex items-stretch border-b-2 border-gray-100">
    <div className="bg-[#C8102E] w-2 shrink-0" />
    <div className="flex-1 flex items-center justify-between px-8 py-4">
      <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-black text-xl text-[#1C1C1C] tracking-tight">{title}</h2>
      <div className="flex items-center gap-3">
        <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#888] text-xs tracking-widest uppercase">ОАО «РЖД»</div>
        <div className="w-7 h-7 bg-[#C8102E] rounded-sm flex items-center justify-center">
          <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white font-black text-xs">{num}</span>
        </div>
      </div>
    </div>
  </div>
);

const SlideTitle = ({ slide }: { slide: TitleSlide }) => (
  <div className="h-full flex flex-col relative overflow-hidden">
    <div className="absolute inset-0 bg-[#C8102E]" />
    <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-white" />
    <div className="absolute bottom-[42%] left-0 right-0 h-1 bg-[#1C1C1C]" />
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center gap-4 p-8 pb-4">
        <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center shadow-lg">
          <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#C8102E] font-black text-lg leading-none">РЖД</span>
        </div>
        <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white/80 text-sm tracking-widest uppercase">ОАО «Российские железные дороги»</div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-16 pb-6">
        <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white/60 text-xs tracking-widest uppercase mb-4">{slide.subtitle}</div>
        <h1 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white font-black text-3xl leading-tight max-w-3xl mb-6">{slide.title}</h1>
        <div className="w-16 h-1 bg-white/40 mb-4" />
        <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white/70 text-sm">{slide.meta}</div>
      </div>
      <div className="bg-white px-16 py-5 flex items-center justify-between">
        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#1C1C1C] font-bold text-sm">ВАГОННОЕ ДЕПО</span>
        <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#888] text-sm">{slide.year}</span>
      </div>
    </div>
  </div>
);

const SlideStructure = ({ slide }: { slide: StructureSlide }) => (
  <div className="h-full flex flex-col">
    <SlideHeader title={slide.title} num={slide.id} />
    <div className="flex-1 flex flex-col p-8 gap-5">
      <p style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#444] text-sm leading-relaxed border-l-4 border-[#C8102E] pl-4">{slide.content.description}</p>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {slide.content.items.map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 flex gap-4 shadow-sm">
            <div className="w-10 h-10 bg-[#C8102E] rounded-sm flex items-center justify-center shrink-0">
              <Icon name={item.icon} size={20} className="text-white" />
            </div>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-sm text-[#1C1C1C] mb-1">{item.label}</div>
              <div style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#666] text-sm leading-snug">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideProcess = ({ slide }: { slide: ProcessSlide }) => (
  <div className="h-full flex flex-col">
    <SlideHeader title={slide.title} num={slide.id} />
    <div className="flex-1 p-8 grid grid-cols-3 gap-4">
      {slide.content.steps.map((step, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 flex flex-col gap-2 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-12 h-12 bg-gray-50 flex items-center justify-center">
            <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-gray-200 font-black text-lg">{step.num}</span>
          </div>
          <div className="w-8 h-1 bg-[#C8102E] mb-1" />
          <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-sm text-[#1C1C1C]">{step.title}</div>
          <div style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#666] text-sm leading-snug">{step.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

const SlideEquipment = ({ slide }: { slide: EquipmentSlide }) => (
  <div className="h-full flex flex-col">
    <SlideHeader title={slide.title} num={slide.id} />
    <div className="flex-1 p-8 grid grid-cols-3 gap-5">
      {slide.content.categories.map((cat, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col overflow-hidden">
          <div className="bg-[#1C1C1C] px-5 py-4 flex items-center gap-3">
            <Icon name={cat.icon} size={18} className="text-[#C8102E]" />
            <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-sm text-white">{cat.title}</span>
          </div>
          <div className="p-5 flex flex-col gap-3">
            {cat.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#C8102E] rounded-full mt-1.5 shrink-0" />
                <span style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#444] text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SlideSafety = ({ slide }: { slide: SafetySlide }) => (
  <div className="h-full flex flex-col">
    <SlideHeader title={slide.title} num={slide.id} />
    <div className="flex-1 flex flex-col p-8 gap-5">
      <p style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#444] text-sm leading-relaxed bg-[#FFF5F5] border border-[#F5C0C0] rounded-sm px-4 py-3">{slide.content.intro}</p>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {slide.content.blocks.map((b, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-sm p-5 flex gap-4 shadow-sm">
            <div className="w-10 h-10 bg-[#C8102E] rounded-sm flex items-center justify-center shrink-0">
              <Icon name={b.icon} size={20} className="text-white" />
            </div>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-sm text-[#1C1C1C] mb-1">{b.title}</div>
              <div style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#666] text-sm leading-snug">{b.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideEconomy = ({ slide }: { slide: EconomySlide }) => (
  <div className="h-full flex flex-col">
    <SlideHeader title={slide.title} num={slide.id} />
    <div className="flex-1 p-8 flex gap-6">
      <div className="flex-1 grid grid-cols-2 gap-3 content-start">
        {slide.content.metrics.map((m, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-sm p-4 shadow-sm flex gap-3 items-center">
            <div className="w-9 h-9 bg-[#C8102E] rounded-sm flex items-center justify-center shrink-0">
              <Icon name={m.icon} size={16} className="text-white" />
            </div>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-black text-lg text-[#C8102E] leading-none">{m.value}</div>
              <div style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#888] text-xs">{m.unit}</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#444] text-xs font-semibold mt-0.5">{m.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-72 flex flex-col">
        <div className="bg-[#1C1C1C] px-4 py-3">
          <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-bold text-sm text-white">Калькуляция расходов</span>
        </div>
        <div className="border border-gray-200 border-t-0">
          {slide.content.table.map((row, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-2.5 border-b border-gray-100 ${i === slide.content.table.length - 1 ? "bg-[#FFF5F5] border-[#F5C0C0]" : "bg-white"}`}>
              <span style={{ fontFamily: "'PT Sans', sans-serif" }} className={`text-xs leading-snug ${i === slide.content.table.length - 1 ? "font-bold text-[#1C1C1C]" : "text-[#555]"}`}>{row.item}</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif" }} className={`text-xs font-bold whitespace-nowrap ml-2 ${i === slide.content.table.length - 1 ? "text-[#C8102E]" : "text-[#1C1C1C]"}`}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SlideConclusion = ({ slide }: { slide: ConclusionSlide }) => (
  <div className="h-full flex flex-col">
    <SlideHeader title={slide.title} num={slide.id} />
    <div className="flex-1 p-8 flex flex-col gap-3">
      <div className="flex flex-col gap-2.5">
        {slide.content.points.map((p, i) => (
          <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-sm px-5 py-3 shadow-sm">
            <div className="w-6 h-6 bg-[#C8102E] rounded-sm flex items-center justify-center shrink-0 mt-0.5">
              <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white font-black text-xs">{i + 1}</span>
            </div>
            <span style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-[#444] text-sm leading-snug">{p}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto bg-[#1C1C1C] rounded-sm px-6 py-4 flex items-center gap-4">
        <Icon name="CheckCircle" size={24} className="text-[#C8102E] shrink-0" />
        <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white font-medium text-sm leading-snug">{slide.content.outro}</p>
      </div>
    </div>
  </div>
);

const renderSlide = (slide: Slide) => {
  switch (slide.type) {
    case "title": return <SlideTitle slide={slide} />;
    case "structure": return <SlideStructure slide={slide} />;
    case "process": return <SlideProcess slide={slide} />;
    case "equipment": return <SlideEquipment slide={slide} />;
    case "safety": return <SlideSafety slide={slide} />;
    case "economy": return <SlideEconomy slide={slide} />;
    case "conclusion": return <SlideConclusion slide={slide} />;
  }
};

const slideLabels = ["Титул", "Структура", "Техпроцесс", "Оборудование", "Охрана труда", "Экономика", "Заключение"];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div className="min-h-screen bg-[#E0E0E0] flex flex-col items-center justify-center p-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="w-full max-w-5xl">
        <div className="bg-[#F5F5F5] shadow-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
          {renderSlide(slides[current])}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 bg-white border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-[#C8102E] hover:border-[#C8102E] transition-colors group"
          >
            <Icon name="ChevronLeft" size={18} className="text-gray-600 group-hover:text-white" />
          </button>
          <div className="flex gap-1.5 flex-1 flex-wrap">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className={`flex items-center gap-1.5 px-3 h-7 text-xs font-semibold transition-all border ${
                  i === current
                    ? "bg-[#C8102E] border-[#C8102E] text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-[#C8102E] hover:text-[#C8102E]"
                }`}
              >
                <span className="opacity-60">{i + 1}</span>
                <span>{slideLabels[i]}</span>
              </button>
            ))}
          </div>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="w-9 h-9 bg-white border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-[#C8102E] hover:border-[#C8102E] transition-colors group"
          >
            <Icon name="ChevronRight" size={18} className="text-gray-600 group-hover:text-white" />
          </button>
        </div>
        <div className="mt-2 text-center text-xs text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Слайд {current + 1} из {slides.length}
        </div>
      </div>
    </div>
  );
}
