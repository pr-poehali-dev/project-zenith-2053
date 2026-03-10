import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>
            GRIDFORM
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Работы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О студии
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
              Дизайн-студия — Москва
            </p>
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>
              ФОРМА
              <br />
              <span className="text-red-600">ЕСТЬ</span>
              <br />
              ФУНКЦИЯ
            </h1>
            <p className="text-xl max-w-xl mt-8 leading-relaxed">
              Мы создаём дизайн, который работает. Брендинг, визуальные системы и цифровой дизайн — без лишнего, только суть.
            </p>
            <a
              href="#contact"
              className="inline-block mt-10 px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors duration-300"
            >
              Обсудить проект
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2 w-3/4 h-3/4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${i % 3 === 1 || i === 4 ? "bg-white" : "bg-transparent border border-white/30"}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 border-t border-black mt-20 pt-8">
          <div className="pr-8 border-r border-black">
            <p className="text-5xl font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>120+</p>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">Проектов</p>
          </div>
          <div className="px-8 border-r border-black">
            <p className="text-5xl font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>8</p>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">Лет опыта</p>
          </div>
          <div className="pl-8">
            <p className="text-5xl font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>40+</p>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mt-2">Клиентов</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-6xl font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>
              РАБОТЫ
            </h2>
            <p className="text-neutral-400 text-sm uppercase tracking-widest">Избранное 2022–2024</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <span className="text-black group-hover:text-white text-7xl font-bold transition-colors" style={{ fontFamily: "'Space Mono', monospace" }}>01</span>
                  <div className="mt-4 w-full grid grid-cols-4 gap-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-1 bg-black group-hover:bg-white/50 transition-colors" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-red-500 text-xs uppercase tracking-widest mb-1">Брендинг</p>
              <h3 className="text-xl font-bold mb-2">Meridian Bank</h3>
              <p className="text-neutral-400">Полная визуальная идентичность для цифрового банка нового поколения</p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <span className="text-white text-7xl font-bold transition-colors" style={{ fontFamily: "'Space Mono', monospace" }}>02</span>
                  <div className="mt-4 w-12 h-12 border-2 border-white group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
              <p className="text-red-500 text-xs uppercase tracking-widest mb-1">Визуальная система</p>
              <h3 className="text-xl font-bold mb-2">Forma Architects</h3>
              <p className="text-neutral-400">Модульная дизайн-система для архитектурного бюро с 30-летней историей</p>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-red-600 group-hover:bg-black transition-colors duration-300 p-8">
                  <span className="text-white text-7xl font-bold transition-colors" style={{ fontFamily: "'Space Mono', monospace" }}>03</span>
                  <div className="mt-4 flex space-x-2">
                    <div className="w-4 h-4 bg-white" />
                    <div className="w-4 h-4 bg-white/50" />
                    <div className="w-4 h-4 bg-white/25" />
                  </div>
                </div>
              </div>
              <p className="text-red-500 text-xs uppercase tracking-widest mb-1">Цифровой дизайн</p>
              <h3 className="text-xl font-bold mb-2">Strata Ventures</h3>
              <p className="text-neutral-400">Типографическая система и UI-kit для инвестиционной платформы</p>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer md:col-span-2">
              <div className="aspect-video bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-between bg-neutral-800 group-hover:bg-red-600 transition-colors duration-300 px-12">
                  <span className="text-white text-8xl font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>04</span>
                  <div className="flex flex-col space-y-3">
                    <div className="w-32 h-1 bg-white" />
                    <div className="w-24 h-1 bg-white/60" />
                    <div className="w-40 h-1 bg-white/30" />
                  </div>
                </div>
              </div>
              <p className="text-red-500 text-xs uppercase tracking-widest mb-1">Брендинг + Упаковка</p>
              <h3 className="text-xl font-bold mb-2">Klar Cosmetics</h3>
              <p className="text-neutral-400">Разработка бренда с нуля: нейминг, логотип, упаковка, руководство по стилю</p>
            </div>

            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-200 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <span className="text-black group-hover:text-white text-7xl font-bold transition-colors" style={{ fontFamily: "'Space Mono', monospace" }}>05</span>
                </div>
              </div>
              <p className="text-red-500 text-xs uppercase tracking-widest mb-1">Типографика</p>
              <h3 className="text-xl font-bold mb-2">Nord Magazine</h3>
              <p className="text-neutral-400">Редизайн журнала об архитектуре и урбанистике</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8" style={{ fontFamily: "'Space Mono', monospace" }}>
                О<br />СТУДИИ
              </h2>
              <div className="aspect-[4/5] bg-black relative mb-8 md:mb-0 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 gap-px">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={`${[0, 4, 7, 11].includes(i) ? "bg-red-600" : "bg-neutral-900"}`} />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-end p-6">
                  <p className="text-white text-sm uppercase tracking-widest" style={{ fontFamily: "'Space Mono', monospace" }}>
                    С 2016 года
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-2xl font-medium mb-6 leading-relaxed">
                Мы делаем дизайн, который не нужно объяснять.
              </p>
              <p className="text-lg mb-6 text-neutral-600 leading-relaxed">
                GRIDFORM — студия, работающая на стыке типографики и стратегии. Мы убеждены: сильный визуальный язык строится на системе, а не на случайности.
              </p>
              <p className="mb-6 text-neutral-600 leading-relaxed">
                С 2016 года мы работаем с компаниями, которым важно не просто «красиво», а точно и убедительно. Наши клиенты — банки, архитектурные бюро, технологические компании и издательства.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-black">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4 text-red-600" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Принципы
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-black inline-block flex-shrink-0" />
                      Система прежде всего
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-black inline-block flex-shrink-0" />
                      Типографика как архитектура
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-black inline-block flex-shrink-0" />
                      Модульная сетка
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-black inline-block flex-shrink-0" />
                      Форма следует функции
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-4 text-red-600" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Услуги
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-600 inline-block flex-shrink-0" />
                      Брендинг и айдентика
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-600 inline-block flex-shrink-0" />
                      Визуальные системы
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-600 inline-block flex-shrink-0" />
                      Цифровой дизайн / UI
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-red-600 inline-block flex-shrink-0" />
                      Редизайн и аудит
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-16" style={{ fontFamily: "'Space Mono', monospace" }}>
            КАК МЫ<br />РАБОТАЕМ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: "01", title: "Анализ", desc: "Изучаем контекст, конкурентов и аудиторию. Находим точку отличия." },
              { num: "02", title: "Стратегия", desc: "Формулируем визуальную концепцию и принципы коммуникации." },
              { num: "03", title: "Дизайн", desc: "Создаём систему: от логотипа до руководства по стилю." },
              { num: "04", title: "Запуск", desc: "Передаём все материалы, обучаем команду, остаёмся на связи." },
            ].map((step, i) => (
              <div key={i} className="border-l border-neutral-700 px-8 py-6 hover:border-red-600 transition-colors group">
                <p className="text-red-600 text-sm font-bold mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>{step.num}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8" style={{ fontFamily: "'Space Mono', monospace" }}>
                ДАВАЙТЕ<br />РАБОТАТЬ
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Есть проект? Расскажите о нём. Мы ответим в течение одного рабочего дня.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-4">
                  <span className="w-20 text-sm uppercase tracking-widest opacity-70">Почта</span>
                  <a href="mailto:hello@gridform.ru" className="hover:underline font-medium">
                    hello@gridform.ru
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-20 text-sm uppercase tracking-widest opacity-70">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline font-medium">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-20 text-sm uppercase tracking-widest opacity-70">Адрес</span>
                  <span className="font-medium">Москва, Россия</span>
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/30">
                <p className="text-sm uppercase tracking-widest opacity-70 mb-4">Соцсети</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Behance</a>
                  <a href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Instagram</a>
                  <a href="#" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">Telegram</a>
                </div>
              </div>
            </div>
            <div>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <p className="text-7xl font-bold mb-6" style={{ fontFamily: "'Space Mono', monospace" }}>✓</p>
                  <p className="text-2xl font-bold mb-2">Сообщение отправлено</p>
                  <p className="opacity-70">Мы свяжемся с вами в течение одного рабочего дня</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2 opacity-70">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-white"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2 opacity-70">
                      Почта
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-white"
                      placeholder="Ваш email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2 opacity-70">
                      Проект
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-white resize-none"
                      placeholder="Расскажите о вашем проекте"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 font-bold"
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white border-t border-neutral-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold tracking-tighter" style={{ fontFamily: "'Space Mono', monospace" }}>GRIDFORM</p>
          <p className="text-neutral-500 text-sm">© 2024 Все права защищены</p>
          <p className="text-neutral-500 text-sm uppercase tracking-widest">Дизайн-студия · Москва</p>
        </div>
      </footer>
    </main>
  );
}
