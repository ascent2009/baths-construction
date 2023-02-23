export const findPath = () => {
  const path = window.location.pathname;
  let newPath = path.split("/").filter((p) => p !== "");
  switch (newPath[0]) {
    case "catalogue":
      newPath[0] = "Каталог";
      break;
    case "barrel_baths":
      newPath[0] = "Бани-бочки";
      break;
    case "carcass_baths":
      newPath[0] = "Каркассные бани";
      break;
    case "blog":
      newPath[0] = "Блог";
      break;
    case "information":
      newPath[0] = "Информация";
      break;
    case "projects":
      newPath[0] = "Готовые проекты";
      break;
  }
  switch (newPath[1]) {
    case "classic_barrel":
      newPath[1] = "Классические бани-бочки";
      break;
    case "carcass_baths":
      newPath[1] = "Каркассные бани";
      break;
    case "knowhow":
      newPath[1] = "Полезное в блоге";
      break;
    case "about":
      newPath[1] = "О нас";
      break;
    case "vacancies":
      newPath[1] = "Вакансии";
      break;
    case "faq":
      newPath[1] = "Вопросы и ответы";
      break;
    case "contacts":
      newPath[1] = "Контакты";
      break;
    case "gorky2":
      newPath[1] = "СНТ Горки-2";
      break;
    case "basins":
      newPath[1] = "Купели и фурако";
      break;
    case "extra_catalogue":
      newPath[1] = "Еще из каталога";
      break;
  }

  switch (newPath[2]) {
    case "peak_barrel":
      newPath[2] = "Баня-бочка с козырьком";
      break;
    case "carcass_lira":
      newPath[2] = "Мобильная баня Лира";
      break;
    case "roundbasin":
      newPath[2] = "Купель круглая";
      break;
  }

  return newPath.join(" / ").trim();
};
