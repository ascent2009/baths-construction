import React, { useContext, useState } from "react";
import s from "./style.module.scss";
import HeaderMain from "../../Header/HeaderMain";
import { A, navigate } from "hookrouter";
import { AppContext } from "../../../context";
import { SVGCollection } from "../../Pages/EnglishVersionPage";
import { findPath } from "../../../app/findPath";
import ExtraLogoSvg from "../../../assets/logo-extra-black.svg";
import ArrowSliderSvg from "../../../assets/arrow-extra-slider.svg";
import VKSvg from "../../../assets/vk-black.svg";
import InstagramSvg from "../../../assets/insta-black.svg";
import TelegramSvg from "../../../assets/telegram.svg";
import DzenSvg from "../../../assets/dzen.svg";
import InputBtnSvg from "../../../assets/arrow-extra-input.svg";

const ExtraCatalogue = () => {
  const {
    extraCatalogueImages,
    extraSelectionImages,
    extraBlogImages,
    extraGalleryImages,
  } = useContext(AppContext);
  const repeatedImages = new Array(3).fill(extraSelectionImages).flat();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItemsPage = repeatedImages.slice(firstItemIndex, lastItemIndex);
  const pageNumbers: number[] = [];
  for (let i = 1; i <= repeatedImages.length / itemsPerPage; i++) {
    pageNumbers.push(i);
  }
  const loadMore = () => {
    if (currentPage <= pageNumbers.length) setItemsPerPage((prev) => prev + 3);
  };

  const [slideIndex, setSlideIndex] = useState(1);
  const prevSlide = () => {
    if (slideIndex !== extraBlogImages.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === extraBlogImages.length) {
      setSlideIndex(1);
    }
  };
  const nextSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(extraBlogImages.length);
    }
  };
  
  const [input, setInput] = useState<{ email: string }>({
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value)
      setInput({
        ...input,
        [name]: value,
      });
  return;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let response = await fetch("http://www.example.com", {
      method: "POST",
      mode: "no-cors", // no-cors
      body: JSON.stringify({ input }),
      headers: { "Content-Type": "application/json" },
    });
    // console.log(response.status)
    if (response.status === 200) {
      let data = await response.json();
      // console.log("data: ", data);
      alert(
        `${data}! Ваши данные получены!`
      );
      navigate("/success")
    }
    setInput({ email: ""});
    // navigate("/order_page");
    // closeModal();
  };

  return (
    <>
      <HeaderMain
        display={{ display: "none" }}
        className="header_main__menu_block_eng"
        background="header_main__eng"
        logo={SVGCollection.darkLogo}
        phoneIcon={SVGCollection.phoneIcon}
        arrowIcon={SVGCollection.arrowIcon}
      />
      <section className={s.main}>
        <div className={s.main_top__link}>Главная / {findPath()} /</div>
        <article className={s.main_extra__barrel}>
          <h2 className={s.main_extra__barrel_title}>Еще из каталога</h2>
          <ul className={s.main_extra__barrel_images}>
            {extraCatalogueImages.map(({ title, url, link }) => (
              <li key={url} className={s.main_extra__barrel_images_item}>
                <img src={url} alt={title} />
                <A href={link ? link : ""}>{title}</A>
              </li>
            ))}
          </ul>
        </article>
        <article className={s.main_extra__conditions}>
          <div className={s.main_extra__conditions_item}>
            <h4>Сроки изготовления от 16 дней.</h4>
            <p>
              Проведем экскурсию на производстве в п. Сосново в день обращения.
              Приозерский район, работаем без выходных.
            </p>
          </div>
          <div className={s.main_extra__conditions_item}>
            <h4>Доставляем по Ленинградской области и в Карелию.</h4>
            <p>
              Осуществляем сборку на участке. Ежегодно изготавливаем более 100
              мобильных бань.
            </p>
          </div>
          <div className={s.main_extra__conditions_item}>
            <h4>Принимаем заказы на декабрь-январь.</h4>
            <p>
              Стоимость на сайте актуальная, без скрытых платежей, комплектация
              под ключ!
            </p>
          </div>
        </article>
        <article className={s.main_extra__selection}>
          <ul className={s.main_extra__selection_menu}>
            <li className={s.main_extra__selection_menu_item}>
              <label
              // forHTML="style"
              >
                Стиль:
              </label>
              <select name="style" id="style" defaultValue="Все">
                <option value="all">Все</option>
              </select>
            </li>
            <li className={s.main_extra__selection_menu_item}>
              <label
              // forHTML="options"
              >
                Варианты:
              </label>
              <select name="options" id="options" defaultValue="Все">
                <option value="all">Все</option>
              </select>
            </li>
            <li className={s.main_extra__selection_menu_item}>
              <label
              // forHTML="square"
              >
                Жил. площадь:
              </label>
              <select name="square" id="square" defaultValue="Все">
                <option value="all">Все</option>
              </select>
            </li>
            <li className={s.main_extra__selection_menu_item}>
              <label
              // forHTML="size"
              >
                Размер:
              </label>
              <select name="size" id="size" defaultValue="от 20 до 60 м²">
                <option value="blank">Выберите...</option>
                <option value="20-60">от 20 до 60 м²</option>
              </select>
            </li>
            <li className={s.main_extra__selection_menu_item}>
              <label
              // forHTML="stories"
              >
                Этажность:
              </label>
              <select name="stories" id="stories" defaultValue="Все">
                <option value="all">Все</option>
              </select>
            </li>
          </ul>
          <ul className={s.main_extra__selection_images}>
            {currentItemsPage.map(({ url, title, description, price }) => (
              <li className={s.main_extra__selection_images_item} key={url}>
                <div className={s.main_extra__selection_images_item_img}>
                  <img src={url} alt={title} />
                </div>
                <div className={s.main_extra__selection_images_item_text}>
                  <p>
                    <span>{title}</span>
                    {" / "}
                    {description}
                  </p>
                </div>
                <h4 className={s.main_extra__selection_images_item_price}>
                  {price}
                </h4>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={s.main_extra__selection_button}
            onClick={loadMore}
          >
            Загрузить еще...
          </button>
        </article>
        <article className={s.main_extra__layout}>
          <div className={s.main_extra__layout_text}>
            <h2>У вас уже есть проект бани или понимание планировки?</h2>
            <div className={s.main_extra__layout_text_block}>
              <p>
                Любой проект можем адаптировать или спроектируем его «с нуля» по
                Вашим требованиям. Что бы начать - подойдут схемы начерченные от
                руки.
              </p>
              <p>
                Заказывая проект у нас вы получите точный подсчет материалов,
                цены и сроки от начала работ, до окончания. Стоимость
                проектирования при заключении договора на строительство в нашей
                организации, обойдется вам бесплатно.
              </p>
            </div>
            <h4>Прислать планировку и обсудить проект</h4>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/baths-construction.appspot.com/o/extra-catalogue%2Flayout-extra.png?alt=media&token=5ff7f946-5686-4479-bfda-39f0bd2b84a7"
            alt="layout"
          />
        </article>
        <article className={s.main_extra__invitation}>
          <div className={s.main_extra__invitation_img}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/baths-construction.appspot.com/o/extra-catalogue%2Fshipment-extra.png?alt=media&token=ba58e106-52d1-470a-9e0d-328784851c1b"
              alt="shipment"
            />
          </div>
          <div className={s.main_extra__invitation_block}>
            <img src={ExtraLogoSvg} alt="sosnovo logo" />
            <h3>
              Посетите производство и строящиеся объекты, и убедитесь в качестве
              нашего строительства
            </h3>
            <p>Приезжайте к нам, организуем экскурсию и лично познакомимся.</p>
            <div className={s.main_extra__invitation_block_button}>
              <button type="button">Заявка на посещение</button>
              <div className={s.main_extra__invitation_block_button_phone}>
                <h4>+7 (812) 209-01-18</h4>
                <p>
                  Отвечаем на звонки с 09:00 до 19:00 без выходных и праздников
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className={s.main_extra__blog}>
          <div className={s.main_extra__blog_title}>
            <h2>Наш блог</h2>
            <div className={s.main_extra__blog_title_button}>
              <button type="button" onClick={nextSlide}>
                <img src={ArrowSliderSvg} alt="arrow" />
              </button>
              <button type="button" onClick={prevSlide}>
                <img src={ArrowSliderSvg} alt="arrow" />
              </button>
            </div>
          </div>
          <A href="/blog">Смотреть все записи</A>
          <ul className={s.main_extra__blog_images}>
            {extraBlogImages.map(
              ({ url, date, subtitle, link, title, description }, index) => (
                <li
                  key={subtitle}
                  /*className={s.main_extra__blog_images_item}*/ className={
                    slideIndex === index + 1
                      ? s.main_extra__blog_images_item_active
                      : s.main_extra__blog_images_item
                  }
                >
                  <img src={url} alt={subtitle} />
                  <div>
                    <p>{date}</p>
                    <A href={link ? link : ""}>{subtitle}</A>
                  </div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </li>
              )
            )}
          </ul>
        </article>
        <article className={s.main_extra__gallery}>
          <ul className={s.main_extra__gallery_list}>
            {extraGalleryImages.slice(0, 3).map(({ url }, index) => (
              <li key={index} className={s.main_extra__gallery_list_item}>
                <img src={url} alt="index" />
              </li>
            ))}
          </ul>
          <ul className={s.main_extra__gallery_list_1}>
            {extraGalleryImages.slice(-3).map(({ url }, index) => (
              <li key={index} className={s.main_extra__gallery_list_1_item}>
                <img src={url} alt="index" />
              </li>
            ))}
          </ul>
        </article>
        <article className={s.main_extra__social}>
          <h3>Мы в социальных сетях</h3>
          <p>
            Для тех, кто копает глубже и хочет знать больше. Вступайте в наши
            группы и следите за новостями.
          </p>
          <div className={s.main_extra__social_button}>
            <button type="button">
              <img src={VKSvg} alt="vk" />
            </button>
            <button type="button">
              <img src={InstagramSvg} alt="instagram" />
            </button>
            <button type="button">
              <img src={TelegramSvg} alt="telegram" />
            </button>
            <button type="button">
              <img src={DzenSvg} alt="dzen" />
            </button>
          </div>
        </article>
        <article className={s.main_extra__subscribe}>
          <h3>
            Подпишитесь на наши новости и акции. Своевременная рассылка у вас на
            электронной почте.
          </h3>
          <div className={s.main_extra__subscribe_input}>
            <input type="email" name="email" placeholder="Ваш e-mail..." onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}><img src={InputBtnSvg} alt="submit" /></button>
          </div>
        </article>
      </section>
    </>
  );
};

export default ExtraCatalogue;
