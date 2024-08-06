import React from "react";
import styles from "./styles.module.css";
import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

const Features = () => {
  return (
    <div className={`w-full bg-main pt-32 lg:pt-44`}>
      <div data-aos="fade-up" id={HeaderLink.FEATURES}>
        <Text font="stoke" className="text-center text-3xl md:text-52px">Game Features</Text>
        <div

          className="grid grid-cols-1 w-full mb-8 gap-x-4 -gap-y-16 pt-10"
        >
          <div data-aos="fade-up" className="flex items-center justify-between lg:-ml-16 lg:-mb-16 lg:flex-row flex-col-reverse sm:m-0 overflow-hidden mb-16">

            <img loading="lazy" src="/main/feature1.webp" className={styles.image_wrapper + " max-width-none"} />

            <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:px-0 px-4">
              <div className="flex items-center justify-center mb-3">
                <div
                  className={styles.line + " mr-5"}
                  style={{ transform: "rotate(180deg)" }}
                />
                <div className={styles.line} />
              </div>
              <Text type="h4" className="text-center mb-2" font="stoke">
                COMPETITIVE COMBAT
              </Text>
              <Text type="h5" color="#8A978C" className="text-center">
                Players can use various types of dragons in battles  and
                complete the quests in story mode. By playing, players will be
                rewarded with SB tokens and NFT
              </Text>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center justify-between lg:-mr-16 lg:-my-16 lg:flex-row flex-col sm:m-0 overflow-hidden mb-16">
            <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:px-0 px-4 flex flex-col ">
              <div className="flex items-center justify-center mb-3">
                <div
                  className={styles.line + " mr-5"}
                  style={{ transform: "rotate(180deg)" }}
                />
                <div className={styles.line} />
              </div>
              <Text type="h4" className="text-center mb-2" font="stoke">
                PLAYER DRIVEN ECONOMY
              </Text>
              <Text type="h5" color="#8A978C" className="text-center">
                Players can use various types of dragons in battles and
                complete the quests in story mode. By playing, players will be
                rewarded with SB tokens and NFT
              </Text>
            </div>
            <img loading="lazy" src="/main/feature2.webp" className={styles.image_wrapper + " max-width-none"} />

          </div>

          <div data-aos="fade-up" className="flex items-center justify-between lg:-ml-16 lg:-my-16 lg:flex-row flex-col-reverse sm:m-0 overflow-hidden mb-16">

            <img loading="lazy" src="/main/feature3.webp" className={styles.image_wrapper + " max-width-none"} />

            <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:px-0 px-4">
              <div className="flex items-center justify-center mb-3">
                <div
                  className={styles.line + " mr-5"}
                  style={{ transform: "rotate(180deg)" }}
                />
                <div className={styles.line} />
              </div>
              <Text type="h4" className="text-center mb-2" font="stoke">
                OWN YOUR ASSETS
              </Text>
              <Text type="h5" color="#8A978C" className="text-center">
                Players can use various types of dragons in battles and
                complete the quests in story mode. By playing, players will be
                rewarded with SB tokens and NFT
              </Text>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center justify-between lg:-mr-16 lg:-mt-16 lg:flex-row flex-col sm:m-0 overflow-hidden mb-16">
            <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:px-0 px-4 flex flex-col">
              <div className="flex items-center justify-center mb-3">
                <div
                  className={styles.line + " mr-5"}
                  style={{ transform: "rotate(180deg)" }}
                />
                <div className={styles.line} />
              </div>
              <Text type="h4" className="text-center mb-2" font="stoke">
                LAND MANAGEMENT
              </Text>
              <Text type="h5" color="#8A978C" className="text-center">
                Players can use various types of dragons in battles and
                complete the quests in story mode. By playing, players will be
                rewarded with SB tokens and NFT
              </Text>
            </div>

            <img loading="lazy" src="/main/feature4.webp" className={styles.image_wrapper + " max-width-none"} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
