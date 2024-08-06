import React from "react";
import styles from "./styles.module.css";

import Text from "components/common/Text/Text";

const events = [
  { src: '/events/event1.webp', title: 'Champion tourney', text: 'Be one of the TOP-100 players to win a lot of FLESH' },
  { src: '/events/event2.webp', title: 'Daily Tasks', text: 'Find useful resources and items that will help you in a game' },
  { src: '/events/event3.webp', title: 'USDC events', text: 'Earn USDC prizes in a frequent gaming events' },
  { src: '/events/event4.webp', title: 'Trials', text: 'Get through the difficult stages for unique resources in the game' },
];

const Activities = () => {
  return (
    <div className="flex flex-col xl:mb-12" data-aos="fade-up">
      <Text type="h2" className="text-center lg:mb-9">
        Take part in everyday events
      </Text>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {events.map((event, i) => (
          <div key={i} className={styles.image + ' flex flex-col mx-2 mt-10 mb-20 lg:my-0'}>
            <img src={event.src} />
            <Text fontWeight="bold" type="h4" className="w-full text-center uppercase mt-6">{event.title}</Text>
            <Text type="h5" className="w-full text-center mt-2">{event.text}</Text>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Activities;
