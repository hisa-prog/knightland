import React, { useEffect, useState } from "react";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";
import Image from 'next/image'
import FreeToPlay from "../MainInfo/FreeToPlay/FreeToPlay";
import styles from "./styles.module.css";

const NewMainInfo = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  useEffect(() => {
    const worm = document.getElementById("worm");
    const wizard = document.getElementById("wizard");
    const tail = document.getElementById("tail");
    const shard01 = document.getElementById("shard01");
    const shard02 = document.getElementById("shard02");
    const shard03 = document.getElementById("shard03");
    const shard04 = document.getElementById("shard04");
    const shard05 = document.getElementById("shard05");
    const shard06 = document.getElementById("shard06");
    const shard07 = document.getElementById("shard07");
    const shard08 = document.getElementById("shard08");
    const shard09 = document.getElementById("shard09");
    const shard10 = document.getElementById("shard10");
    const shard11 = document.getElementById("shard11");
    const shard12 = document.getElementById("shard12");
    window.addEventListener("mousemove", function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      worm.style.transform = `translate(-${x * 10}px, ${y * 10}px)`;
      wizard.style.transform = `translate(${y * 10}px)`;
      tail.style.transform = `translate( ${y * 10}px)`;

      shard01.style.transform = `translate(-${x * 20}px, ${y * 10}px)`;
      shard02.style.transform = `translate(${x * 2}px, ${y * 10}px)`;
      shard03.style.transform = `translate(${x * 10}px, -${y * 5}px)`;
      shard04.style.transform = `translate(-${x * 12}px, ${y * 15}px)`;
      shard05.style.transform = `translate(-${x * 22}px, ${y * 15}px)`;
      shard06.style.transform = `translate(-${x * 15}px, -${y * 15}px)`;
      shard07.style.transform = `translate(${x * 27}px, -${y * 15}px)`;
      shard08.style.transform = `translate(${x * 12}px, ${y * 15}px)`;
      shard09.style.transform = `translate(${x * 18}px, -${y * 15}px)`;
      shard10.style.transform = `translate(-${x * 14}px, ${y * 15}px)`;
      shard11.style.transform = `translate(${x * 19}px, ${y * 15}px)`;
      shard12.style.transform = `translate(${x * 24}px, ${y * 15}px)`;
    });
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div className="z-10 grid relative" id={HeaderLink.MAIN}>
        <div className="z-10 relative">
          <div className="main hidden lg:flex">
            <div className="mx-auto relative">
              <img
                className="hidden lg:block w-full h-full background"
                src="/common/movingElemets/bg.webp"
                alt=""
              />
              <img
                id="worm"
                className="absolute hidden lg:block top-0 right-0"
                src="/common/movingElemets/worm.webp"
                alt=""
              />
              <img
                id="wizard"
                className="absolute hidden lg:block bottom-10 xl:bottom-16 h-auto"
                src="/common/movingElemets/wizard.webp"
                alt=""
              />
              <img
                id="tail"
                className="absolute w-full h-full hidden lg:block -left-20 top-0"
                src="/common/movingElemets/tail.webp"
                alt=""
              />
            </div>
          </div>
          <img
            className="w-full hidden md:block lg:hidden"
            src="/common/newBackgroundTablet.webp"
            alt=""
          />
          <img
            className="block md:hidden w-full"
            src="/common/newBackgroundMobile.webp"
            alt=""
          />
          <div className="absolute z-50 w-full h-full top-0 shard_position mx-auto left-0 right-0 hidden lg:block">
            <img
              id="shard01"
              src="/common/movingElemets/shard01.webp"
              className="absolute w-10 bottom-32 left-64 xl:left-80 xl:w-14 xxl:left-96 xxl:bottom-40 3xl:bottom-72 3xl:w-28"
              alt=""
            />
            <img
              id="shard02"
              src="/common/movingElemets/shard02.webp"
              className="absolute w-14 bottom-28 left-80 xl:w-20 xl:ml-32 xxl:w-24 xxl:ml-44 xxl:bottom-36 3xl:w-auto 3xl:bottom-72 3xl:ml-64"
              alt=""
            />
            <img
              id="shard03"
              src="/common/movingElemets/shard03.webp"
              className="absolute w-8 bottom-14 left-80 xl:w-10 xl:ml-32 xxl:w-14 xxl:ml-44 xxl:bottom-20 3xl:w-auto 3xl:bottom-40 3xl:ml-64"
              alt=""
            />
            <img
              id="shard04"
              src="/common/movingElemets/shard04.webp"
              className="absolute w-4 bottom-24 left-96 ml-10 xl:w-5 xl:ml-52 xxl:w-6 xxl:ml-64 xxl:bottom-28 3xl:w-auto 3xl:bottom-72 3xl:ml-96"
              alt=""
            />
            <img
              id="shard05"
              src="/common/movingElemets/shard05.webp"
              className="absolute left-96 ml-14 w-12 bottom-2 xl:ml-40 xxl:left-96 xxl:ml-60 xxl:bottom-4 3xl:bottom-10 3xl:ml-80"
              alt=""
            />
            <img
              id="shard06"
              src="/common/movingElemets/shard06.webp"
              className="absolute right-96 mr-32 xl:right-96 xl:mr-44 bottom-16 w-14 xxl:right-96 xxl:mr-72 xxl:bottom-24 huge:mr-0 3xl:mr-96 3xl:bottom-44"
              alt=""
            />
            <img
              id="shard07"
              src="/common/movingElemets/shard07.webp"
              className="absolute bottom-2 w-16 right-96 mr-20 xl:bottom-1 xl:right-96 xl:mr-36 xl:w-24 xxl:bottom-1 xxl:right-96 xxl:mr-52 huge:mr-52 3xl:mr-80 3xl:bottom-24"
              alt=""
            />
            <img
              id="shard08"
              src="/common/movingElemets/shard08.webp"
              className="absolute w-20 right-96 mr-1 bottom-14 xl:right-96 xl:mr-14 xl:bottom-20 xxl:w-28 xxl:right-96 xxl:mr-28 xxl:bottom-24 huge:mr-32 3xl:mr-72 3xl:bottom-44"
              alt=""
            />
            <img
              id="shard09"
              src="/common/movingElemets/shard09.webp"
              className="absolute w-10 right-96 mr-8 bottom-14 xl:right-96 xl:mr-20 xl:bottom-20 xxl:w-14 xxl:right-96 xxl:mr-36 xxl:bottom-24 huge:mr-40 3xl:mr-80 3xl:bottom-44"
              alt=""
            />
            <img
              id="shard10"
              src="/common/movingElemets/shard10.webp"
              className="absolute bottom-28 right-96 -mr-5 w-6 xl:mr-1 xl:w-8 xl:bottom-36 xxl:bottom-52 xxl:right-96 xxl:mr-20 huge:mr-10 3xl:mr-60 3xl:bottom-72"
              alt=""
            />
            <img
              id="shard11"
              src="/common/movingElemets/shard11.webp"
              className="absolute right-96 mr-1 w-10 bottom-4 xl:mr-12 xl:bottom-8 xl:w-16 xxl:right-96 xxl:mr-28 xxl:bottom-12 huge:mr-40 3xl:mr-80 3xl:bottom-12"
              alt=""
            />
            <img
              id="shard12"
              src="/common/movingElemets/shard12.webp"
              className="absolute right-96 -mr-10 w-6 bottom-8 xl:mr-1 xl:bottom-16 xl:w-8 xxl:w-10 xxl:right-96 xxl:mr-1 xxl:bottom-24 huge:mr-20 3xl:mr-40 3xl:bottom-28"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="lg:px-16 w-full z-20 md:px-12 px-4 absolute top-56 xl:top-52"
          >
            <div className="mx-auto max-w-8xl">
              <Text type="h1" className="text-center md:text-left z-30" font="stoke">
                Own Land,
              </Text>
              <Text type="h1" className="text-center md:text-left z-30" font="stoke">
                Craft Weapons,
              </Text>
              <Text type="h1" className="text-center md:text-left z-30" font="stoke">
                Earn Crypto
              </Text>
              <div className="flex flex-col md:flex-row z-30 mt-5 items-center">
                <div className="h-12 mr-2 flex items-center">
                  <img
                    style={{ maxWidth: "3.2rem" }}
                    className="hidden md:block"
                    src="/main/terra.svg"
                    alt=''
                  />
                  <img className="md:hidden" src="/main/polygon.svg" alt="" />
                </div>
                <div className="">
                  <Text type="h4" className="text-center md:text-left">
                    Get Ready For The Worlds First <br />
                    MMORPG On Terra
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FreeToPlay />
    </div >
  );
};

export default NewMainInfo;
