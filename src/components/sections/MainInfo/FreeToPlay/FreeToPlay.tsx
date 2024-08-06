import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";
import { useParallax } from "react-scroll-parallax";

const FreeToPlay = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: 20,
  });

  return (
    <div
      id={HeaderLink.PLAY_TO_EARN}
      className={"grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 z-0 relative -mt-20 md:-mt-40 lg:mt-60 lg:pb-96"}
    >
      <div
        className={`py-20 col-span-12 hidden fixed w-full top-0 z-0 lg:block`}>
        <img
          // style={{ height: "100vw" }}
          src={"/bg2.webp"} className={`w-full h-screen`} alt="" loading="lazy" />
        {/* <div className={`flex w-full justify-end text-gray-500 mt-2 pr-20`}>
          Knight Lands World
        </div> */}
      </div>
      <div className="w-full col-span-8">
        <img src={`/bg2tab.webp`} className={`w-full hidden md:block lg:hidden`} alt="" />
      </div>
      <div className="w-full col-span-4">
        <img src={`/bg2mob.webp`} className={`w-full md:hidden`} alt="" />
      </div>
      <div className="col-span-full max-w-8xl w-full mx-auto flex justify-start px-4">
        <div className="overflow-visible w-full absolute top-72 lg:top-0" ref={parallax.ref}>
          <Text type="h1" className="text-left" font="stoke">
            Free to play — <br />
            play to earn
          </Text>
          <Text type="h4" color="white" className="mt-5 text-left">
            Knight Lands is perfect for casual, competitive and <br /> business-minded
            gamers - everyone earns crypto by <br />
            playing
          </Text>
        </div>
      </div>
    </div>
  );
};
export default FreeToPlay;
