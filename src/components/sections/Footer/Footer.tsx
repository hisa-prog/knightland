import React, { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { HeaderLink, HeaderLinks } from "common/constants/HeaderLinks";
import Container from "components/common/Container/Container";
import ContactMenu from "components/common/ContactMenu";
import Text from "components/common/Text/Text";
import { useMediaQuery } from "common/helpers/useMediaQuery";

import Logo from "components/svg/Main/logo";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import { useVisibleSection } from "common/helpers/hooks/useVisibleSection";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isActiveUserMenu, setIsActiveUserMenu] = useState(false);

  const { currentSectionId } = useVisibleSection();
  const { isDesktop } = useMediaQuery();
  const openUserMenu = useCallback(() => {
    setIsActiveUserMenu(true);
  }, [setIsActiveUserMenu])
  const closeUserMenu = useCallback(() => setIsActiveUserMenu(false), [setIsActiveUserMenu]);
  const onClickToLink = useCallback((id) => {
    closeUserMenu()
    smoothAutoScroll(id)
  }, [closeUserMenu])

  return (
    <div className={styles.footer + ' flex w-full flex-col'}>
      <Container disableVerticalPadding={true}>
        <div className="flex w-full justify-between flex-col items-center md:flex-row pt-28 pb-14 px-8 md:px-0 lg:pb-12">
          <div className="flex items-center mb-10 md:mb-0">
            <div className="w-48 md:mr-7 flex justify-center md:justify-start cursor-pointer" onClick={() => onClickToLink(HeaderLink.MAIN)}>
              <Logo />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex mx-6">
              <ContactMenu />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )

}

export default Footer;
