import React, { useEffect, useState } from "react";

import Header from "components/sections/Header/Header";
import Footer from "components/sections/Footer/Footer";
import Container from "components/common/Container/Container";
import Roadmap from "components/sections/Roadmap/Roadmap";
import KLToken from "components/sections/Token/parts/KLToken";
import Layout from "components/Layout";
import Team from "components/sections/Team/Team";
import Partners from "components/sections/Partners/Partners";
import Sequel from "components/sections/Sequel/Sequel";
import Prizes from "components/sections/MainInfo/Prizes/Prizes";
import Classes from "components/sections/MainInfo/Classes/Classes";
import NewMainInfo from "components/sections/MainInfo/MainInfo";
import Features from "components/sections/MainInfo/Features/Features";
import ArmySwiper from "components/sections/ArmySwiper/ArmySwiper";
import ModalProvider from "components/context/ModalContext";
import FreeToPlay from "components/sections/MainInfo/FreeToPlay/FreeToPlay";


export default function Home() {

  return (
    <ModalProvider>
      <Layout>
        <div className="w-full h-full">
          <Header />

          <NewMainInfo />
          
          <Container>
            <Features />

            <Classes />

            <ArmySwiper />

            <KLToken />

            <Sequel />

            <Roadmap />
            <Team />
            <Partners />
          </Container>

          <Footer />
        </div>
      </Layout>
    </ModalProvider>
  )
}