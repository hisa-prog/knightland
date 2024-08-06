import React, { memo } from "react";
import Text from "components/common/Text/Text";
import styles from './styles.module.css'
import { HeaderLink } from "common/constants/HeaderLinks";

const data = [
  { src: '/partners/partner1.svg', url: 'https://daomaker.com' },
  // { src: '/partners/partner2.svg', url: 'https://infinitypad.com' },
  // { src: '/partners/partner3.svg', url: 'https://tfm.com/en' },
];

const Partners = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col justify-start w-full px-12 py-5 pt-32 lg:pt-44" id={HeaderLink.PARTNERS}>
      <Text className="w-full justify-center text-center mb-10 text-3xl md:text-52px" font="stoke">Partners</Text>
      <div className="flex w-full justify-center flex-col items-center md:flex-row">
        {data.map((item, i) => (
          <a href={item.url} key={i} target="_blank" className={styles.root + " flex flex-col px-4 py-4 w-80 md:w-64 md:w-72 mb-10 h-24 md:h-auto md:self-stretch" + (i === 0 ? ' ' : ' md:ml-6 lg:ml-12')}>
            <img loading="lazy" src={item.src} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default memo(Partners);