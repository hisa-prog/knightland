import React from "react";
import Button from "components/common/Button/Button";

const PlayNow = () => {
  return (
    <a href="https://play.knightlands.com" target="_blank">
      <Button className="w-28 h-14 cursor-pointer flex justify-center items-center self-center">PLAY NOW</Button>
    </a>
  )
}

export default PlayNow;