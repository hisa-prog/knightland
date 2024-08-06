import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";
import Button from "components/common/Button/Button";
import SequelIcon from "components/svg/Sequel/Sequel";
import { HeaderLink } from "common/constants/HeaderLinks";

const Sequel = () => {
    return (
        <div data-aos="fade-up" id={HeaderLink.PROLOGUE} className={styles.container + " w-full relative z-10 overflow-hidden"}>
            <div className={styles.sequelWrapper + ` mx-auto w-full xl:max-w-6xl relative flex justify-center w-full`}>
                <div className={styles.sequelBackground + ' flex w-full h-full z-10 relative items-center px-4 md:px-16 lg:pt-16 pt-0 pb-8 sm:pb-16'}>
                    <div className="w-full lg:w-1/2 ml-auto flex flex-col text-center ">
                        <div className={styles.logo + " relative -my-6 sm:-my-12 lg:absolute lg:w-1/2 lg:-top-12 lg:-left-10"}>
                            <SequelIcon />
                        </div>
                        <div className="w-full hidden md:block mt-4 lg:mt-0">
                            <Text type="h1" className=" mb-4">
                                Earn tokens now in “Knights: Prologue”
                            </Text></div>
                        <div className="w-full block md:hidden mt-4 lg:mt-0">
                            <Text type="h2" className=" mb-4">
                                Earn tokens now in “Knights: Prologue”
                            </Text></div>
                        <Text type="h4" className="mx-auto max-w-2xl mb-4 w-full">Don't wait, play and earn now</Text>
                        <div className="w-full flex">
                            <a href="https://play.knightlands.com" className="mx-auto" target="_blank">
                                <Button className="w-28 h-14 cursor-pointer flex justify-center items-center">PLAY NOW</Button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Sequel;
