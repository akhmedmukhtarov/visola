(function () {
  const config = window.SITE_CONFIG || {};
  const links = config.links || {};
  const contact = config.contact || {};
  const prices = config.prices || {};
  const images = config.images || {};
  const reviews = config.reviews || [];

  const all = (selector) => document.querySelectorAll(selector);

  // Ссылки на мессенджеры
  const linkBases = {
    telegram: "https://t.me/",
    instagram: "https://instagram.com/",
  };
  all("[data-link]").forEach((el) => {
    const name = el.dataset.link;
    const value = (links[name] || "").trim();
    if (!value) {
      console.warn(`config.js: не заполнено links.${name}`);
      return;
    }
    // Подходит и полная ссылка, и просто имя пользователя
    el.href = /^https?:\/\//.test(value) ? value : linkBases[name] + value.replace(/^@/, "");
    el.target = "_blank";
    el.rel = "noopener";
  });

  // Стоимость
  all("[data-price]").forEach((el) => {
    const item = prices[el.dataset.price] || {};
    const value = el.querySelector(".price-value");
    const duration = el.querySelector(".price-duration");
    if (item.price == null) {
      value.textContent = "по запросу";
    } else {
      value.textContent = `${Number(item.price).toLocaleString("ru-RU")} ${prices.currency || "₽"}`;
    }
    if (item.duration == null) {
      duration.hidden = true;
    } else {
      duration.textContent = `/ ${item.duration} мин`;
    }
  });

  // Картинки
  all("[data-img]").forEach((el) => {
    const image = images[el.dataset.img];
    if (!image) return;
    el.src = image.src;
    el.alt = image.alt || "";
  });

  const spaceGrid = document.querySelector("[data-space]");
  if (spaceGrid) {
    (images.space || []).forEach((image) => {
      const frame = document.createElement("div");
      frame.className = "space-photo";
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt || "";
      img.loading = "lazy";
      frame.append(img);
      spaceGrid.append(frame);
    });
  }

  // Отзывы
  const reviewsGrid = document.querySelector("[data-reviews]");
  if (reviews.length === 0) {
    all("[data-reviews-section]").forEach((el) => (el.hidden = true));
  } else if (reviewsGrid) {
    const template = document.getElementById("review-template");
    reviews.forEach((review) => {
      const node = template.content.cloneNode(true);
      node.querySelector("blockquote").textContent = review.text;
      node.querySelector("figcaption").textContent = review.author;
      reviewsGrid.append(node);
    });
  }

  // Подвал
  const address = document.querySelector("[data-address]");
  if (address) {
    address.textContent = [contact.city, contact.address].filter(Boolean).join(" · ");
  }
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
