const companyEmail = "72_tat@mail.ru";

const routes = ["4", "4д", "24", "31", "43", "43к", "61", "62", "65", "76", "83", "119", "152к", "157"];

const routesGrid = document.querySelector("#routesGrid");

const make2gisLink = (routeNumber) => {
  const query = encodeURIComponent(`маршрут ${routeNumber} Тюмень`);
  return `https://2gis.ru/tyumen/search/${query}`;
};

routesGrid.innerHTML = routes
  .map(
    (route) => `
      <article class="route-card">
        <div>
          <span class="route-number">${route}</span>
          <p>Городской пассажирский маршрут № ${route}</p>
        </div>
        <a class="route-link" href="${make2gisLink(route)}" target="_blank" rel="noreferrer">
          Открыть в 2ГИС
        </a>
      </article>
    `,
  )
  .join("");

document.querySelectorAll(".mini-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = form.dataset.subject || "Сообщение с сайта";
    const name = data.get("name")?.toString().trim() || "Не указано";
    const message = data.get("message")?.toString().trim() || "Не указано";
    const body = encodeURIComponent(`Имя / контакт: ${name}\n\nСообщение:\n${message}`);

    window.location.href = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
});
