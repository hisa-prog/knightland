import React, { useEffect, useRef, useState } from "react";
import "styles/globals.css";
import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { ParallaxProvider } from "react-scroll-parallax";

interface IProps {
  Component: React.ComponentType;
  pageProps: any;
}

const MyApp = (props: IProps) => {
  const { Component, pageProps } = props;

  useEffect(() => {

  },[])


  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100
    });
  }, []);

  useEffect(() => {
    const appHeight = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
    window.addEventListener("resize", appHeight)
    appHeight()
    return () => {
      window.removeEventListener("resize", appHeight)
    }
  }, [])


  const [loaded, setLoaded] = useState(false)

  const loadAllImages = async () => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const imageList = [
      "/common/movingElemets/newBackgroundDesc.webp",
      "/common/movingElemets/wizard.webp",
      "/common/movingElemets/worm.webp",
      "/common/movingElemets/tail.webp",
      "/main/feature1.webp",
      "/main/feature2.webp",
      "/main/feature3.webp",
      "/main/feature4.webp",
      "/bg2.webp",
      "/bg2tab.webp",
      "/bg2mob.webp",
      "/common/movingElemets/shard01.webp",
      "/common/movingElemets/shard02.webp",
      "/common/movingElemets/shard03.webp",
      "/common/movingElemets/shard04.webp",
      "/common/movingElemets/shard05.webp",
      "/common/movingElemets/shard06.webp",
      "/common/movingElemets/shard07.webp",
      "/common/movingElemets/shard08.webp",
      "/common/movingElemets/shard09.webp",
      "/common/movingElemets/shard10.webp",
      "/common/movingElemets/shard11.webp",
      "/common/movingElemets/shard12.webp",
    ]
    if (!isSafari) {
      const imagePromises = imageList.map((src) => {
        return new Promise((res) => {
          const image = new Image()
          image.src = src
          image.onload = () => { res(true) }
        })
      })
      await new Promise(imagePromises => setTimeout(imagePromises, 3000))
      setLoaded(true);
    } else {
      setTimeout(() => {
        setLoaded(true);
      }, 5000);
    }
  }

  useEffect(() => {
    loadAllImages()
  }, [])

  return (
    <ParallaxProvider>
      <div
        className={`${loaded ? "overflow-visible" : "overflow-hidden"}
          transition-all duration-100 ease-out relative z-0`}
      >
        <Component {...pageProps} />
      </div>
      <div
        id="preloader"
        style={{ backgroundColor: "#000" }}
        className={`loader ${loaded ? "finish" : ""}
        opacity-100 visible z-50 
        transition-all duration-1000 ease-out absolute top-0 left-0 w-full h-full flex justify-center items-center`}
      >
        <img className="" src="/loader.gif" alt="" />
      </div>
    </ParallaxProvider>
  )
}

export default MyApp