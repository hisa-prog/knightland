import React, { memo } from "react";
import { ContactSvgColor } from "common/ContactSvgColor";
import { IContactSvg } from "common/IContactSvg";

const Telegram = ({color = ContactSvgColor.White}: IContactSvg) => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18ZM14.7 26.25L15.0062 21.6617L15.006 21.6615L23.3527 14.1293C23.719 13.8041 23.2727 13.6456 22.7864 13.9405L12.4854 20.4392L8.03599 19.0505C7.07511 18.7563 7.06821 18.096 8.25172 17.6213L25.5902 10.9356C26.3821 10.5761 27.1464 11.1258 26.8441 12.3379L23.8914 26.2523C23.6852 27.2411 23.0878 27.4776 22.26 27.0209L17.762 23.6977L15.6 25.8C15.5932 25.8066 15.5864 25.8132 15.5796 25.8198C15.3378 26.0552 15.1378 26.25 14.7 26.25Z" fill={color}/>
    </svg>
  );
};

export default memo(Telegram);