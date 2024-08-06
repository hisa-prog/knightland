import React from "react";
import Text from "components/common/Text/Text";
import styles from "./styles.module.css";

const data = [
  { title: 'Mining', percent: 29, width: 100 },
  { title: 'Team', percent: 20, width: 90 },
  { title: 'Private round', percent: 16, width: 57 },
  { title: 'Private Liquidity, MM, and LP Incentives', percent: 15, width: 55 },
  { title: 'Marketing & Growth', percent: 8, width: 47 },
  { title: 'Strategic Round', percent: 5, width: 40 },
  { title: 'Partners', percent: 5, width: 40 },
  { title: 'Ido', percent: 2, width: 30 },
]

const KLToken = () => {
  return (
    <div className="">
      <div className="flex flex-col mb-8 col-start-5 row-start-2 col-span-4 self-center justify-center items-center pt-32 lg:pt-44">
        <Text font="stoke" className="text-3xl md:text-52px">Knight Lands (KL)</Text>
        <Text type="h5" color="#97A3B9" className="text-center max-w-lg my-2">Deflationary governance token focused on investors, can be staked for earning dividends from the game revenue</Text>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row-reverse">
        <div className="flex w-full relative justify-center mb-20">
          <img loading="lazy" className={`${styles.coin} px-4 md:px-0`} src="/common/coin.webp" />
        </div>
        <div className="flex flex-col w-full">
          {data.map((item, i) => (
            <div key={i} className={styles.percent + ' flex justify-between my-1'} style={{ width: `${item.width}%` }}>
              <Text type="h5" className="uppercase break-words" font="stoke">{item.title}</Text>
              <Text type="h5" className="ml-4" font="stoke">{item.percent}%</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KLToken;
