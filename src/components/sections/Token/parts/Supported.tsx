import React from "react";
import commonStyles from "styles/common.module.css";
import Text from "components/common/Text/Text";
import PlayNow from "components/common/PlayNow";

const Supported = () => {
  return (
    <>
      <div className={commonStyles.board + " mt-36 px-6 md:px-12 pb-12 sm:pb-12 pt-2"} style={{marginBottom: 0}}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="sm:col-span-2 self-center text-center sm:text-left mt-12 md:mr-8 mb-10 md:mb-4">
            <Text type="h2">You dont need a wallet to start</Text>
          </div>
          <div className="flex justify-center col-span-1 xl:row-span-2 xl:-mt-24">
            <img src="/supported/gold.webp" className="w-80 h-80 sm:w-56 sm:h-56 lg:w-80 lg:h-80"/>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <Text type="h4" color="#8A978C">Just open the game, play and have fun!</Text>
          </div>
          <PlayNow />
          {/*<Text type="h3" color="#8A978C" className="col-span-1 sm:col-span-2 mt-6">Supported Blockchains</Text>*/}
        </div>
      </div>
      {/*<div className="flex flex-wrap justify-start pl-4 sm:pl-12 -mt-8">*/}
      {/*  <img className="w-40 h-44 mr-4" src="/supported/supported1.svg" />*/}
      {/*  <img className="w-40 h-44 mr-4" src="/supported/supported2.svg"/>*/}
      {/*  <img className="w-40 h-44" src="/supported/supported3.svg"/>*/}
      {/*</div>*/}
    </>
  )
}

export default Supported;
