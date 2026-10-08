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
    consultation: { price: 300000, duration: 50  },
    lesson: { price: 200000, duration: 50 },
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
  // Скриншот переписки: положите файл (JPG или PNG) в assets/reviews/ и добавьте строку
  //   { image: "assets/reviews/otzyv-1.jpg", alt: "Отзыв мамы Миши, 4 года" }
  // Текстовый отзыв:
  //   { text: "Текст отзыва", author: "Анна, мама Миши, 4 года" }
  // Порядок в списке — порядок на сайте.
  reviewsVisible: 3, // сколько отзывов видно сразу, остальные открываются кнопкой «Показать ещё»
  reviews: [
    { image: "assets/reviews/review1.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 1" },
    { image: "assets/reviews/review2.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 2" },
    { image: "assets/reviews/review3.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 3" },
    { image: "assets/reviews/review4.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 4" },
    { image: "assets/reviews/review5.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 5" },
    { image: "assets/reviews/review6.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 6" },
    { image: "assets/reviews/review7.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 7" },
    { image: "assets/reviews/review8.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 8" },
    { image: "assets/reviews/review9.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 9" },
    { image: "assets/reviews/review10.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 10" },
    { image: "assets/reviews/review11.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 11" },
    { image: "assets/reviews/review12.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 12" },
    { image: "assets/reviews/review13.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 13" },
    { image: "assets/reviews/review14.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 14" },
    { image: "assets/reviews/review15.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 15" },
    { image: "assets/reviews/review16.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 16" },
    { image: "assets/reviews/review17.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 17" },
    { image: "assets/reviews/review18.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 18" },
    { image: "assets/reviews/review19.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 19" },
    { image: "assets/reviews/review20.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 20" },
    { image: "assets/reviews/review21.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 21" },
    { image: "assets/reviews/review22.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 22" },
    { image: "assets/reviews/review23.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 23" },
    { image: "assets/reviews/review24.jpg", alt: "Отзыв родителей о занятиях с логопедом Висолой Аблаевой, скриншот 24" },
  ],
};
