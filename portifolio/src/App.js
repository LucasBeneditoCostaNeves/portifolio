import { Header } from "./components/header";
import { Project } from "./components/project";
import mercado from "./assents/image1.png";
import onbooks from "./assents/img5.png";
import test from "./assents/img7.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Project img={test} className="" styleInfo="info1" />
        <Project img={onbooks} styleInfo="info1" />
      </div>
    </div>
  );
}

export default App;
