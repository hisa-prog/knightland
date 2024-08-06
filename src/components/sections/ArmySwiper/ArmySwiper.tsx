
import Text from "components/common/Text/Text";
import ModalProvider, {
  useModalContext,
} from "components/context/ModalContext";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { ArmySlide } from "./ArmySwiperSlide";
import Slider, { Settings } from "react-slick";

export interface IArmy {
  src: string;
  img: string;
  title: string;
}

const army: IArmy[] = [
  { src: "/slider/MushroomKnight.mp4", img: "/slider/Mushroom.webp", title: "Mushroom Knight" },
  { src: "/slider/ForestCreature.mp4", img: "/slider/Forest.webp", title: "Forest Creature" },
  { src: "/slider/Crocodile.mp4", img: "/slider/Crocodile.webp", title: "Crocodile" },
  { src: "/slider/Archer.mp4", img: "/slider/Archer.webp", title: "Archer" },
  { src: "/slider/Drowned.mp4", img: "/slider/Drowned.webp", title: "Drowned" },
  { src: "/slider/IceCreature.mp4", img: "/slider/Ice.webp", title: "Ice Creature" },
];

const ArmySwiper = (props) => {
  const { className, style, onClick } = props;
  const elemCount = army.length
  const { isModalOpen, handleClose, handleOpen } = useModalContext()
  const [elemWidth, setElemWidth] = useState(100)
  const [currentIndex, setCurrentIndex] = useState(0)

  const [normalWidth, setNormalWidth] = useState(0)
  useEffect(() => {
    const width = window.innerWidth
    if (width < 1240) {
      setNormalWidth(140)
    } else {
      setNormalWidth(210)
    }

  })

  const [normalFontSize, setNormalFontSize] = useState(14)

  const settings: Settings = {
    infinite: true,
    className: "transform scale-150",
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: "0px",
    focusOnSelect: true,
    // variableWidth: true,
    // arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (currentIndex, nextIndex) => {
      setCurrentIndex(nextIndex)
    },
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  };

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <img
        loading="lazy"
        className={`cursor-pointer absolute right-1 z-10 md:-right-1 top-96 huge:w-14 huge:top-72`}
        style={{ ...style, display: "block", }}
        src={`/common/ArrowCircleRight.svg`}
        onClick={onClick}
        alt={``}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <img
        loading="lazy"
        className={`cursor-pointer absolute z-10 left-1 md:-left-1 top-96 huge:w-14 huge:top-72`}
        style={{ ...style, display: "block", }}
        src={`/common/ArrowCircleLeft.svg`}
        onClick={onClick}
        alt={``}
      />
    );
  }

  return (
    <>
      <div className="flex items-center justify-center mt-20 pt-32 lg:pt-44">
        <Text font="stoke" className="text-3xl md:text-52px">
          Diverse World
        </Text>
      </div>
      <div className="w-full flex items-center">
        <Slider
          {...settings} className={"w-full h-full flex items-center overflow-visible relative"}>
          {army.map((monster, _i) => (
            <ArmySlide
              index={_i}
              monster={monster}
              key={`armyslide${_i}`}
              currentIndex={currentIndex}
              normalWidth={normalWidth}
              normalFontSize={normalFontSize}
              totalIndexes={army.length - 1}
            />
          ))}
        </Slider>

      </div>

    </>
  );
};

export default ArmySwiper;
