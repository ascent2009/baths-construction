import React from "react";
import s from "./style.module.scss";
import { A } from "hookrouter";
import Button from "../../Button";

interface IInvitation {
  className: string;
  title: string;
  link: string;
  buttonTitle: string;
  buttonClass: string;
  mb?: string
}

const Invitation: React.FC<IInvitation> = ({
  className,
  title,
  link,
  buttonTitle,
  buttonClass,
  mb
}) => {
  return (
    <div
      className={s[`${className}`]}
      style={{marginBottom: mb}}
    >
      <h4 className={s.main_invitation__title}>{title}</h4>
      <div className={s.main_invitation__button_block}>
        {/* <A href={"tel: +7(812)467-90-60"} target="_blank">
          Оформить заказ
        </A> */}
        <Button title={buttonTitle} className={buttonClass} />
        <A href="/production">{link}</A>
      </div>
    </div>
  );
};

export default Invitation;
