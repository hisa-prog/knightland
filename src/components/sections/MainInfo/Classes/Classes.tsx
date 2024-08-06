import React from "react";
import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";
import Container from "components/common/Container/Container";
import styles from "./styles.module.css";

const Classes = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col w-full items-center relative pt-32 lg:pt-44"
    >
      <Text font="stoke" className="mb-10 text-3xl md:text-52px">
        Player Classes
      </Text>
      <div className="flex flex-col items-center">
        <img loading="lazy"
          src="/common/playerClasses.webp"
          className={`${styles.image} hidden sm:block w-11/12 xxl:w-full`}
        />
        <div className="flex flex-col items-end -mt-0 max-w-8xl lg:-mt-48 px-0 lg:px-16">
          <div className="flex justify-center flex-col sm:flex-row">
            <div className={`${styles.class_text} mr-4`}>
              <img loading="lazy"
                src="/common/mobileArcher.webp"
                className="sm:hidden mb-2 md:mb-0"
              />
              <div className="flex items-center justify-center mb-2">
                <div
                  className={`${styles.line} mr-4`}
                  style={{ transform: "rotate(180deg)" }}
                />
                <Text type="h5" font="stoke">
                  ARCHER
                </Text>
                <div className={`${styles.line} ml-4`} />
              </div>

              <Text type="h5" className="text-center opacity-60">
                Players can use various types of dragons in battles and complete
                the quests in story mode
              </Text>
            </div>

            <div className={`${styles.class_text} mr-4`}>
              <img loading="lazy"
                src="/common/mobileMage.webp"
                className="sm:hidden mb-2 md:mb-0"
              />
              <div className="flex items-center justify-center mb-2">
                <div
                  className={`${styles.line} mr-4`}
                  style={{ transform: "rotate(180deg)" }}
                />
                <Text type="h5" font="stoke">
                  MAGE
                </Text>
                <div className={`${styles.line} ml-4`} />
              </div>

              <Text type="h5" className="text-center opacity-60">
                Players can use various types of dragons in battles and complete
                the quests in story mode. By playing, players will be rewarded
                with SB tokens and NFT
              </Text>
            </div>

            <div className={styles.class_text}>
              <img loading="lazy"
                src="/common/mobileFighter.webp"
                className="sm:hidden mb-2 md:mb-0"
              />
              <div className="flex items-center justify-center mb-2">
                <div
                  className={`${styles.line} mr-4`}
                  style={{ transform: "rotate(180deg)" }}
                />
                <Text type="h5" font="stoke">
                  FIGHTER
                </Text>
                <div className={`${styles.line} ml-4`} />
              </div>

              <Text type="h5" className="text-center opacity-60">
                Players can use variuos types of dragons
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
