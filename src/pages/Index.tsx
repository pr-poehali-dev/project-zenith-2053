import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

function PrintView() {
  return (
    <div className="hidden print:block">
      {slides.map((slide) => {
        const isRedBg = slide.accent === "red" && (slide.type === "cover" || slide.type === "final");
        const bgColor = isRedBg ? "#dc2626" : "#fff";
        const fgColor = isRedBg ? "#fff" : "#000";
        const borderColor = isRedBg ? "rgba(255,255,255,0.3)" : "#000";

        return (
          <div
            key={slide.id}
            className="print-slide"
            style={{ background: bgColor, color: fgColor, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {/* Top bar */}
            <div
              className="flex justify-between items-center px-12 py-4 flex-shrink-0"
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              <p
                className="text-xs uppercase tracking-widest font-bold"
                style={{ fontFamily: "'Space Mono', monospace", color: isRedBg ? "rgba(255,255,255,0.8)" : "#dc2626" }}
              >
                {slide.tag}
              </p>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Space Mono', monospace", color: isRedBg ? "rgba(255,255,255,0.5)" : "#737373" }}
              >
                {String(slide.id).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 px-12 py-8 overflow-hidden flex flex-col">
              {slide.type !== "cover" && slide.type !== "final" && (
                <h2
                  className="font-bold tracking-tighter leading-none mb-8 flex-shrink-0"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                  {slide.title}
                </h2>
              )}
              <div className="flex-1">
                <SlideContent slide={slide} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const slides = [
  {
    id: 1,
    tag: "01 / Актуальность",
    title: "Финансовая\nграмотность\nшкольников",
    subtitle: "Исследовательский проект",
    content: null,
    type: "cover",
    accent: "red",
  },
  {
    id: 2,
    tag: "01 / Актуальность",
    title: "Зачем это важно?",
    content: [
      "Школьники обладают аналитическим мышлением, но знания о личных финансах часто остаются недостаточными.",
      "Финансовая грамотность позволит применять математические навыки для принятия рациональных решений в будущем.",
    ],
    type: "text",
    accent: "black",
  },
  {
    id: 3,
    tag: "02 / Цель",
    title: "Цель проекта",
    content: "Изучить уровень финансовой грамотности учащихся научных классов и разработать рекомендации по её развитию с использованием научного и аналитического подхода.",
    type: "quote",
    accent: "red",
  },
  {
    id: 4,
    tag: "03 / Задачи",
    title: "Задачи",
    content: [
      "Изучить понятие финансовой грамотности и её значение",
      "Рассмотреть основные элементы личных финансов",
      "Проанализировать особенности преподавания в классах",
      "Разработать сайт для школьников начальных классов",
    ],
    type: "list",
    accent: "black",
  },
  {
    id: 5,
    tag: "04 / Исследование",
    title: "Объект и предмет",
    content: [
      { label: "Объект", value: "Учащиеся научных классов" },
      { label: "Предмет", value: "Уровень финансовой грамотности школьников и способы её развития" },
    ],
    type: "two-col",
    accent: "black",
  },
  {
    id: 6,
    tag: "05 / Методы",
    title: "Методы исследования",
    content: [
      "Анализ научной и учебной литературы",
      "Анкетирование учащихся",
      "Сравнительный анализ данных",
      "Математические расчёты и моделирование",
    ],
    type: "list",
    accent: "red",
  },
  {
    id: 7,
    tag: "06 / Теория",
    title: "Что такое финансовая грамотность?",
    content: "Совокупность знаний и навыков, позволяющих человеку эффективно управлять личными денежными средствами, планировать бюджет, оценивать финансовые риски и принимать обоснованные экономические решения.",
    type: "quote",
    accent: "black",
  },
  {
    id: 8,
    tag: "06 / Теория",
    title: "Ключевые компоненты",
    content: [
      { icon: "Wallet", label: "Личный бюджет", desc: "Планирование доходов и расходов" },
      { icon: "PiggyBank", label: "Сбережения", desc: "Финансовая «подушка безопасности»" },
      { icon: "CreditCard", label: "Банковские услуги", desc: "Карты, вклады, кредиты" },
      { icon: "TrendingUp", label: "Инвестиции", desc: "Способы увеличения капитала" },
      { icon: "Shield", label: "Финансовая безопасность", desc: "Защита от мошенничества" },
    ],
    type: "cards",
    accent: "black",
  },
  {
    id: 9,
    tag: "06 / Теория",
    title: "Финансы в научных классах",
    content: [
      "Расчёт сложного процента",
      "Анализ инфляции",
      "Построение графиков роста капитала",
      "Оценка рисков инвестиций",
    ],
    note: "Математические знания делают изучение финансов более глубоким и практическим",
    type: "list-note",
    accent: "red",
  },
  {
    id: 10,
    tag: "07 / Практика",
    title: "Вопросы анкеты",
    content: [
      "Ведёте ли вы личный бюджет?",
      "Знаете ли вы, что такое сложный процент?",
      "Пользуетесь ли банковской картой?",
      "Знаете ли вы, что такое инвестиции?",
      "Хотели бы вы изучать финансы в школе?",
    ],
    type: "numbered",
    accent: "black",
  },
  {
    id: 11,
    tag: "07 / Практика",
    title: "Что покажет анализ?",
    content: [
      { label: "Знания", value: "Уровень осведомлённости о финансах" },
      { label: "Интерес", value: "Желание изучать тему глубже" },
      { label: "Потребность", value: "Необходимость дополнительных занятий" },
    ],
    type: "two-col",
    accent: "red",
  },
  {
    id: 12,
    tag: "08 / Предложения",
    title: "Как повысить грамотность?",
    content: [
      "Факультативный курс по финансовой грамотности",
      "Практические занятия по планированию бюджета",
      "Математические задачи на финансовую тематику",
      "Экономические игры и конкурсы",
      "Специалисты из банков и финансовых организаций",
    ],
    type: "list",
    accent: "black",
  },
  {
    id: 13,
    tag: "09 / Вывод",
    title: "Итог",
    content: "Учащиеся научных классов обладают хорошей базой для освоения финансовой грамотности. Включение финансовых тем в образовательный процесс поможет школьникам научиться эффективно управлять личными финансами и принимать взвешенные решения.",
    type: "final",
    accent: "red",
  },
];

type Slide = (typeof slides)[0];

function SlideContent({ slide }: { slide: Slide }) {
  const isRedBg = slide.accent === "red" && (slide.type === "cover" || slide.type === "final");

  if (slide.type === "cover") {
    return (
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 flex flex-col justify-center">
          <p
            className="text-sm uppercase tracking-widest mb-6"
            style={{ fontFamily: "'Space Mono', monospace", color: isRedBg ? "rgba(255,255,255,0.7)" : "#dc2626" }}
          >
            {slide.subtitle as string}
          </p>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none"
            style={{ fontFamily: "'Space Mono', monospace", color: isRedBg ? "#fff" : "#000" }}
          >
            {(slide.title as string).split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? (isRedBg ? "opacity-50" : "text-red-600") : ""}>
                {line}
                <br />
              </span>
            ))}
          </h1>
        </div>
        <div
          className="grid grid-cols-3 pt-6"
          style={{ borderTop: `1px solid ${isRedBg ? "rgba(255,255,255,0.3)" : "#000"}` }}
        >
          {[
            { label: "Предмет", val: "Экономика" },
            { label: "Тип", val: "Исследование" },
            { label: "Год", val: "2024–2025" },
          ].map((item, i) => (
            <div
              key={i}
              className={`pr-6 ${i < 2 ? "border-r mr-6" : ""}`}
              style={{ borderColor: isRedBg ? "rgba(255,255,255,0.3)" : "#000" }}
            >
              <p className="text-sm uppercase tracking-widest" style={{ color: isRedBg ? "rgba(255,255,255,0.5)" : "#737373" }}>
                {item.label}
              </p>
              <p className="font-medium mt-1" style={{ color: isRedBg ? "#fff" : "#000" }}>
                {item.val}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "quote") {
    return (
      <div className="flex flex-col justify-center h-full">
        <p className="text-red-600 text-6xl font-bold leading-none mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>
          "
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug max-w-3xl">
          {slide.content as string}
        </p>
      </div>
    );
  }

  if (slide.type === "final") {
    return (
      <div className="flex flex-col justify-center h-full">
        <div className="max-w-2xl">
          <p className="text-8xl font-bold leading-none mb-6" style={{ fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.3)" }}>
            "
          </p>
          <p className="text-xl md:text-2xl leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.9)" }}>
            {slide.content as string}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-white" />
            <p className="text-sm uppercase tracking-widest font-bold text-white">Спасибо за внимание</p>
          </div>
        </div>
      </div>
    );
  }

  if (slide.type === "text") {
    return (
      <div className="flex flex-col justify-center h-full gap-8 max-w-3xl">
        {(slide.content as string[]).map((text, i) => (
          <p key={i} className="text-xl md:text-2xl leading-relaxed text-neutral-700 border-l-4 border-red-600 pl-6">
            {text}
          </p>
        ))}
      </div>
    );
  }

  if (slide.type === "list" || slide.type === "numbered") {
    const items = slide.content as string[];
    const accentColor = slide.accent === "red" ? "#dc2626" : "#000";
    return (
      <div className="flex flex-col justify-center h-full">
        <ul className="space-y-4 max-w-2xl">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-5">
              <span
                className="text-sm font-bold pt-1 flex-shrink-0 w-8"
                style={{ fontFamily: "'Space Mono', monospace", color: accentColor }}
              >
                {slide.type === "numbered" ? String(i + 1).padStart(2, "0") : "—"}
              </span>
              <p className="text-xl md:text-2xl leading-snug">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (slide.type === "list-note") {
    const items = slide.content as string[];
    return (
      <div className="flex flex-col justify-center h-full">
        <ul className="space-y-4 max-w-2xl">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-5">
              <span
                className="text-sm font-bold pt-1 flex-shrink-0 w-8 text-red-600"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xl md:text-2xl leading-snug">{item}</p>
            </li>
          ))}
        </ul>
        {"note" in slide && slide.note && (
          <p className="mt-10 text-sm uppercase tracking-widest text-neutral-500 border-t border-neutral-300 pt-6 max-w-2xl">
            {slide.note as string}
          </p>
        )}
      </div>
    );
  }

  if (slide.type === "two-col") {
    const items = slide.content as { label: string; value: string }[];
    const accentColor = slide.accent === "red" ? "#dc2626" : "#737373";
    return (
      <div className="flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-3xl">
          {items.map((item, i) => (
            <div
              key={i}
              className="py-8"
              style={{
                paddingRight: i % 2 === 0 ? "3rem" : undefined,
                paddingLeft: i % 2 !== 0 ? "3rem" : undefined,
                borderRight: i % 2 === 0 ? "1px solid #000" : undefined,
                borderTop: i >= 2 ? "1px solid #000" : undefined,
              }}
            >
              <p
                className="text-sm uppercase tracking-widest mb-3"
                style={{ color: accentColor, fontFamily: "'Space Mono', monospace" }}
              >
                {item.label}
              </p>
              <p className="text-xl md:text-2xl font-medium leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "cards") {
    const items = slide.content as { icon: string; label: string; desc: string }[];
    return (
      <div className="flex flex-col justify-center h-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-black p-4 hover:bg-black hover:text-white transition-colors duration-300 group cursor-default"
            >
              <Icon name={item.icon as "Wallet"} size={24} className="mb-3 text-red-600 group-hover:text-red-400" />
              <p className="font-bold text-sm mb-1">{item.label}</p>
              <p className="text-xs text-neutral-500 group-hover:text-neutral-400 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 180);
    },
    [animating]
  );

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[current];
  const isRedBg = slide.accent === "red" && (slide.type === "cover" || slide.type === "final");

  const bgColor = isRedBg ? "#dc2626" : "#fff";
  const fgColor = isRedBg ? "#fff" : "#000";
  const borderColor = isRedBg ? "rgba(255,255,255,0.3)" : "#000";

  return (
    <div
      className="fixed inset-0 flex flex-col transition-colors duration-500 print:hidden"
      style={{ background: bgColor, color: fgColor }}
    >
      {/* Top bar */}
      <div
        className="flex justify-between items-center px-6 md:px-12 py-4 flex-shrink-0"
        style={{ borderBottom: `1px solid ${borderColor}` }}
      >
        <p
          className="text-xs uppercase tracking-widest font-bold"
          style={{ fontFamily: "'Space Mono', monospace", color: isRedBg ? "rgba(255,255,255,0.8)" : "#dc2626" }}
        >
          {slide.tag}
        </p>
        <p
          className="text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace", color: isRedBg ? "rgba(255,255,255,0.5)" : "#737373" }}
        >
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
      </div>

      {/* Slide content */}
      <div
        className="flex-1 px-6 md:px-12 py-8 overflow-hidden transition-opacity duration-200"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <div className="h-full flex flex-col">
          {slide.type !== "cover" && slide.type !== "final" && (
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-8 flex-shrink-0"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {slide.title}
            </h2>
          )}
          <div className="flex-1 overflow-auto">
            <SlideContent slide={slide} />
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div
        className="flex justify-between items-center px-6 md:px-12 py-4 flex-shrink-0"
        style={{ borderTop: `1px solid ${borderColor}` }}
      >
        {/* Progress dots */}
        <div className="flex gap-1.5 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 flex-shrink-0"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: isRedBg
                  ? i === current ? "#fff" : "rgba(255,255,255,0.35)"
                  : i === current ? "#000" : "#d4d4d4",
              }}
            />
          ))}
        </div>

        {/* Arrows + PDF */}
        <div className="flex gap-2 no-print">
          <button
            onClick={() => window.print()}
            className="h-10 px-3 flex items-center gap-2 border transition-all duration-200 text-xs uppercase tracking-widest"
            style={{ borderColor: fgColor, color: fgColor }}
            title="Скачать PDF"
          >
            <Icon name="Download" size={14} />
            <span className="hidden md:inline">PDF</span>
          </button>
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 flex items-center justify-center border transition-all duration-200 disabled:opacity-30"
            style={{ borderColor: fgColor, color: fgColor }}
          >
            <Icon name="ChevronLeft" size={18} />
          </button>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="w-10 h-10 flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: fgColor,
              color: bgColor,
            }}
          >
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>
      </div>

      {/* Keyboard hint on first slide */}
      {current === 0 && (
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest pointer-events-none whitespace-nowrap no-print"
          style={{ fontFamily: "'Space Mono', monospace", color: isRedBg ? "rgba(255,255,255,0.4)" : "#b5b5b5" }}
        >
          ← → или пробел для навигации
        </div>
      )}

      {/* Print: all slides */}
      <PrintView />
    </div>
  );
}