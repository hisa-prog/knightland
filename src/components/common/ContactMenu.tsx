import React from "react";
import { Contacts } from "common/constants/Contacts";
import { ContactSvgColor } from "common/ContactSvgColor";
import { useHover } from "common/helpers/hooks/useHover";

interface IProps {
  mobileMenu?: boolean;
}

const ContactMenu = ({ mobileMenu }: IProps) => {
  const { enableHover, disableHover, currentHoverItem } = useHover();

  return (
    <>
      {Contacts.map((contact, i) => {
        const Component = contact.component;
        const color = mobileMenu ? ContactSvgColor.White : currentHoverItem === i ? ContactSvgColor.Yellow : ContactSvgColor.White;

        return (
          <a className="w-10 mx-1" key={i} href={contact.href} target="_blank" onMouseEnter={() => enableHover(i)} onMouseLeave={disableHover}>
            <Component color={color} />
          </a>
        )
      })}
    </>
  )
}

export default ContactMenu