// Настройки сайта. Меняйте значения здесь — вёрстку трогать не нужно.
window.SITE_CONFIG = {
  // Ссылки на мессенджеры: полная ссылка или просто имя пользователя
  links: {
    telegram: "https://t.me/Visola_ablaeva", // например "visola_logoped" → https://t.me/visola_logoped
    instagram: "https://instagram.com/visola_logoped", // например "visola.logoped" → https://instagram.com/visola.logoped
  },

  // Показывается в подвале. Пустые поля скрываются.
  contact: {
    city: "Tashkent",
    address: "Urta Osyo Trans ko'chasi, 1",
  },

  // Стоимость. price — число в рублях, duration — минуты.
  // Пока price равен null, вместо цены показывается «по запросу».
  prices: {
    currency: "uzs",
    consultation: { price: 300000, duration: 60  },
    lesson: { price: 200000, duration: 60 },
  },

  // Картинки. Положите файлы в папку assets/ и поменяйте пути.
  // Формат — JPG или WebP: HEIC с айфона открывается не во всех браузерах и не индексируется поиском.
  images: {
    portrait: { src: "assets/logoped-visola-ablaeva.jpg", alt: "Висола Аблаева — логопед-дефектолог в Ташкенте" }, // 4:5
    atWork: { src: "assets/logoped-zanyatie-s-rebenkom.jpg", alt: "Логопед Висола Аблаева на занятии с ребёнком" }, // 1:1
    // Блок «Наше пространство», формат 3:4. Можно добавить или убрать фото.
    space: [
      { src: "assets/kabinet-logopeda-tashkent.jpg", alt: "Кабинет логопеда в Ташкенте" },
      { src: "assets/zanyatie-melkaya-motorika.jpg", alt: "Занятие на развитие мелкой моторики" },
      { src: "assets/posobiya-logopeda.jpg", alt: "Пособия и музыкальные инструменты для занятий" },
      { src: "assets/zanyatie-s-kartochkami.jpg", alt: "Ребёнок на логопедическом занятии с карточками" },
    ],
  },

  // Отзывы родителей. Пока список пуст, раздел и пункт меню скрыты.
  // { text: "Текст отзыва", author: "Анна, мама Миши, 4 года" }
  reviews: [{ text: "Самая лучшая логопедка в городе!❤️", author: "Анна, мама Миши, 4 года" }],
};
