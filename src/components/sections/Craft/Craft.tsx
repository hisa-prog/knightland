import React from "react";
import styles from "./styles.module.css";

import commonStyles from "styles/common.module.css";
import CraftBoard from "components/sections/Craft/Board/CraftBoard";
import Text from "components/common/Text/Text";

const crafts = [
  { src: '/craft/craft1.webp', bigText: '300+ soldiers', smallText: 'to collect and combine' },
  { src: '/craft/craft2.webp', bigText: '500+ items', smallText: 'to gather and craft' },
  { src: '/craft/craft3.webp', bigText: '10 ways', smallText: 'of crafting items' },
];

const Craft = () => {
  return (
    <div data-aos="fade-up" className={commonStyles.board + ' flex w-full flex-col items-center py-16 xl:flex-row xl:px-4 xxl:px-12 xl:py-0'}>
      <div className="w-full text-center xl:text-left lg:mr-4">
        <Text type="h2" className="xl:w-40">Gather and craft hundreds of items</Text>
      </div>


      <div className="flex w-full flex-wrap pt-3 sm:pt-10 sm:flex-nowrap justify-around xl:pt-0 xl:-mt-16">
        {crafts.map((craft, i) => (
          <div key={i} className={`${styles.img} flex flex-col relative md:mx-1.5`}>
            <picture>
              <source media="(max-width: 768px)" srcSet={craft.src.slice(0, -4) + "M.png"} />
              <source media="(min-width: 769px)" src={craft.src} />
              <img src={craft.src} />
            </picture>
            <div className="relative flex justify-center w-full -top-6 md:-top-8">
              <CraftBoard bigText={craft.bigText} smallText={craft.smallText} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Craft;
