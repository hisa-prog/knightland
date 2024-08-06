import Text from "components/common/Text/Text";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { SwiperSlide } from "swiper/react";
import { IArmy } from "./ArmySwiper";
import "./styles.module.css"

interface IArmySlideProps {
  monster: IArmy;
  index: number;
  currentIndex: number;
  normalWidth: number;
  normalFontSize: number;
  totalIndexes: number;
}

export const ArmySlide: FC<IArmySlideProps> = ({
  monster,
  index,
  currentIndex,
  normalWidth,
  totalIndexes,
  normalFontSize,
}) => {
  const videoRef = useRef<HTMLVideoElement>();
  const [rectWidth, setRectWidth] = useState(0);
  const [rectHeight, setRectHeight] = useState(0);
  const [rectAspect, setRectAspect] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const videoRect = videoRef.current.getBoundingClientRect();
    setRectWidth(videoRect.width);
  }, []);

  const isCurrent = currentIndex === index;
  const isPrevOrNext =
    index === currentIndex - 1 ||
    index === currentIndex + 1 ||
    (currentIndex === 0 && index === totalIndexes) ||
    (currentIndex === totalIndexes && index === 0);
  const currentWidth =
    currentIndex === index ? normalWidth * 2.1 : normalWidth * 1.3;
  const fontSize =
    currentIndex === index ? normalFontSize * 1.5 : normalFontSize * 1;

  const [activeTab, setActiveTab] = useState(false);

  useEffect(() => {
    if (currentIndex === index) {
      videoRef.current.loop = true;
      videoRef.current.play();
      setActiveTab(true);
    } else {
      videoRef.current.pause();
      setActiveTab(false);
    }
  }, [currentIndex, setActiveTab]);

  const [loadVideo, setLoadVideo] = useState(false)
  const loaded = () => {
    setLoadVideo(true)
  }

  return (
    <>
      <div
        style={{
          width: currentWidth,
          fontSize,
        }}
        className={`h-full transition-all duration-1000 origin-center overflow-hidden  transform w-full mx-auto flex items-center flex-col rounded-md relative`}
      >
        <div className={`relative`}>
          <div className={`${loadVideo ? 'invisible' : 'visible'} absolute z-10 flex justify-center items-center h-full w-full`}>
            <div className={`lds-ellipsis absolute`}><div></div><div></div><div></div><div></div></div>
            <img loading="lazy" className={``} src={monster.img} alt={monster.title} />
          </div>
          <video
            onLoadedData={loaded}
            onLoadedMetadata={loaded}
            onProgress={loaded}
            id="video"
            ref={videoRef}
            className={`w-full h-full rounded-md origin-center transform transition-all duration-1000`}
            src={monster.src}
            muted
          />
        </div>
        <div className="w-full z-10 absolute bottom-5">
          <Text font="stoke" className="text-center h-5 ">
            {monster.title}
          </Text>
        </div>
        <div className={`filter_slider rounded-md transform transition-all duration-1000`} />
      </div>
    </>
  );
};
