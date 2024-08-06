import React from "react";
import styles from "./styles.module.css";

import { useMatchMediaQuery } from "common/helpers/useMediaQuery";
import Text from "components/common/Text/Text";
import { Breakpoints } from "common/constants/Breakpoints";
import { HeaderLink } from "common/constants/HeaderLinks";

interface IRoad {
  step: string;
  description: string;
  isChecked?: boolean;
}

const road: {year: string, items: IRoad[]}[] = [
  {
    year: '2019',
    items: [
      {step: 'Q2', description: 'Start of the Knights: Prologue development', isChecked: true},
      {step: 'Q3', description: 'Early Knights: Prologue concept', isChecked: true},
      {step: 'Q4', description: 'First raids implemented', isChecked: true}
    ]
  },
  {
    year: '2020',
    items: [
      {step: 'Q1', description: 'More gameplay features', isChecked: true},
      {step: 'Q2', description: 'Art improvements', isChecked: true},
      {step: 'Q3', description: 'Adding competitive gameplay', isChecked: true},
      {step: 'Q4', description: 'Redone game balance', isChecked: true},
    ]
  },
  {
    year: '2021',
    items: [
      {step: 'Q1', description: 'Preparing to alpha test, improved blockchain interactions', isChecked: true},
      {step: 'Q2', description: 'Alpha public test, new art, polishing', isChecked: true},
      {step: 'Q3', description: 'Public launch', isChecked: true},
      {step: 'Q4', description: 'Preproduction of Knight Lands started', isChecked: true},
    ]
  },
  {
    year: '2022',
    items: [
      {step: 'Q1', description: 'IDO, DEX/CEX Listings'},
      {step: 'Q2', description: 'Knights: Prologue NFT events'},
      {step: 'Q3', description: 'Knights: Prologue extra content'},
      {step: 'Q4', description: 'Land Sale in Knight Lands'},
    ]
  },
  {
    year: '2023',
    items: [
      {step: 'Q1', description: 'Early Launch of Knight Lands'},
      {step: 'Q2', description: 'Expansion of the Lands, New buildings'},
      {step: 'Q3', description: 'Pets system, PvP arenas'},
      {step: 'Q4', description: 'Guilds'},
    ]
  }
]

const Roadmap = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col justify-center w-full md:pl-0 pt-32 lg:pt-44" id={HeaderLink.ROADMAP}>
      <Text className="text-center text-3xl md:text-52px" font="stoke">Roadmap</Text>
      <div className={styles.container + " flex mt-10 w-full"}>
        {road.map(({year, items}, i) => (
          <div key={i} className="mb-14 flex flex-col items-start self-start w-full md:w-auto">
            <div className="flex items-center">
              <div className={styles.line} style={{transform: 'rotate(180deg)'}}/>
              <Text type="h4" className="mx-4" font="stoke">{year}</Text>
              <div className={styles.line}/>
            </div>
            {items.map((item, j) => (
              <div key={j} className="flex items-center my-2 lg:mx-2">
                <div className="flex justify-center items-center h-full">
                  <div className={item.isChecked ? styles.checked : styles.notChecked}>
                    {item.isChecked && <img src={'/common/check.svg'} />}
                  </div>
                </div>
                <div className="flex items-baseline ">
                  <Text type="h5" fontWeight={700} font="stoke" color="#8A978C" className="mr-1 max-w-full lg:max-w-sm xl:max-w-md">
                    {item.step}
                    <Text fontWeight={400} font="poppins" color="#FFFFFF" isSpan={true}>— {item.description}</Text>
                  </Text>
                </div>
              </div>
            ))}
          </div>
          )
        )}
      </div>
    </div>
  )
}

export default Roadmap;
