import { Header } from "./components/header";
import { Project } from "./components/project";
import onbooks from "./assents/img5.png";
import test from "./assents/img7.png";
import clima from "./assents/clima.png";
import { Modal } from "./components/modal";
import { useState } from "react";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Project
          img={test}
          className=""
          styleInfo="info1"
          name="E-Commerce (CiberMarket)"
        />
        <Project
          img={clima}
          className=""
          styleInfo="info1"
          href="https://sky-view-azure.vercel.app"
          name="Clima (Sky View)"
        />
        <Project
          img={onbooks}
          styleInfo="info1"
          href="https://grupo-5-daniel.vercel.app"
          name="Livraria (On Books)"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
