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
    consultation: { price: 1000000, duration: 60  },
    lesson: { price: 200000, duration: 60 },
  },

  // Картинки. Положите файлы в папку assets/ и поменяйте пути.
  images: {
    portrait: { src: "assets/IMG_3086.HEIC", alt: "Висола Аблаева" }, // 4:5
    atWork: { src: "assets/IMG_5914.HEIC", alt: "Висола Аблаева на занятии" }, // 1:1
    // Блок «Наше пространство», формат 3:4. Можно добавить или убрать фото.
    space: [
      { src: "assets/space-1.svg", alt: "Кабинет" },
      { src: "assets/space-2.svg", alt: "Пособия и материалы" },
      { src: "assets/space-3.svg", alt: "Фрагмент занятия" },
      { src: "assets/space-4.svg", alt: "Игровая зона" },
    ],
  },

  // Отзывы родителей. Пока список пуст, раздел и пункт меню скрыты.
  // { text: "Текст отзыва", author: "Анна, мама Миши, 4 года" }
  reviews: [{ text: "Самая лучшая логопедка в городе!❤️", author: "Анна, мама Миши, 4 года" }],
};
