import React from "react";
import s from "./style.module.scss";
import DarkLogo from "../../assets/logo-dark.svg";
import VKSvg from "../../assets/vk.svg";
import InstagramSvg from "../../assets/instagram.svg";
import { A } from "hookrouter";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <section className={s.footer_top}>
        <div className={s.footer_top__left}>
          <img src={DarkLogo} alt="logo" />
        </div>
        <div className={s.footer_top__center}>
          <nav className={s.footer_top__center_menu_mobile}>
            <ul className={s.footer_top__center_submenu_mobile}>
              <ul className={s.footer_top__center_subsubmenu_mobile}>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Главная</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Каталог</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Информация</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Наш блог</A>
                </li>
              </ul>
            </ul>
          </nav>

          <nav className={s.footer_top__center_menu}>
            <ul className={s.footer_top__center_submenu}>
              <ul className={s.footer_top__center_subsubmenu}>
                <A href="#" className={s.footer_top__center_submenu_title}>
                  <h4>Бани-бочки</h4>
                </A>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Классические</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Квадро-бани</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Овальные</A>
                </li>
              </ul>
            </ul>
            <ul className={s.footer_top__center_submenu}>
              <ul className={s.footer_top__center_subsubmenu}>
                <A href="#" className={s.footer_top__center_submenu_title}>
                  <h4>Информация</h4>
                </A>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">О нас</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Вакансии</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Вопросы и ответы</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Контакты</A>
                </li>
              </ul>
            </ul>

            <ul className={s.footer_top__center_submenu}>
              <ul className={s.footer_top__center_subsubmenu}>
                <A href="#" className={s.footer_top__center_submenu_title}>
                  <h4>Каркассные бани</h4>
                </A>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Серия Лира</A>
                </li>
                <li className={s.footer_top__center_submenu_item}>
                  <A href="#">Серия Флора</A>
                </li>
              </ul>
            </ul>
            <ul className={s.footer_top__center_submenu}>
              <A href="#" className={s.footer_top__center_submenu_title}>
                <h4>Наш блог</h4>
              </A>
              <A href="/english">For English speakers</A>
            </ul>
          </nav>
        </div>
        <div className={s.footer_top__right}>
          <h4 className={s.footer_top__right_title}>Прием заказов</h4>
          <h3 className={s.footer_top__right_phone}>+7 (812) 467-90-60</h3>
          <p className={s.footer_top__right_timetable}>
            с 09:00 до 20:00 без выходных
          </p>
          <A
            href={"https://web.whatsapp.com/"}
            target="_blank"
            className={s.footer_top__right_whatsapp}
          >
            Написать в Whatsapp
          </A>
          <A
            href={"mailto:info@novobani.ru"}
            target="_blank"
            className={s.footer_top__right_email}
          >
            <span>E-mail:&nbsp;</span>info@novobani.ru
          </A>
        </div>
      </section>
      <section className={s.footer_bottom}>
        <div className={s.footer_bottom__social}>
          <p className={s.footer_bottom__social_sign}>Подписывайтесь на нас:</p>
          <div className={s.footer_bottom__social_link}>
            <img src={VKSvg} alt="vk" />
            <A href="https://www.vk.com" target="_blank">
              Вконтакте
            </A>
          </div>
          <div className={s.footer_bottom__social_link}>
            <img src={InstagramSvg} alt="instagram" />
            <A href="https://www.instagram.com" target="_blank">
              Instagram
            </A>
          </div>
        </div>
        <div className={s.footer_bottom__copyright}>
          <p>
            2022 © «Новобани» Воспроизведение или распространение материалов с
            сайта в любой форме может производиться только с письменного
            разрешения правообладателя. При использовании материалов — ссылка на
            правообладателя и источник заимствования обязательна.
          </p>
          <p>
            Сайт не является публичной офертой и носит информационный характер
          </p>
          <A href="#">Политика конфиденциальности</A>
        </div>
        <div className={s.footer_bottom__copyright_mobile}>
          <p>
            2021 © «Делодом» Воспроизведение или распространение материалов с
            сайта в любой форме может производиться только с письменного
            разрешения правообладателя. При использовании материалов — ссылка на
            правообладателя и источник заимствования обязательна.
          </p>
          <A href="#">Политика конфиденциальности</A>
          <p>
            Сайт не является публичной офертой и носит информационный характер.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
