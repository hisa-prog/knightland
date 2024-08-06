import React from "react";
import Text from "components/common/Text/Text";

interface IProps {
  bigText: string;
  smallText: string;
}

const CraftBoard = (props: IProps) => {
  const { bigText, smallText } = props;

  return (
    <div className="flex relative">
      <img src="/craft/craftBoard.svg" />
      <div className="flex flex-col items-center justify-center absolute w-full h-full md:h-4/5">
        <Text type="h4" fontWeight="bold">{bigText}</Text>
        <Text type="h5" className="text-center" color={"#80bbc3"}>{smallText}</Text>
      </div>
    </div>
  )
}

export default CraftBoard;