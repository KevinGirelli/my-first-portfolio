import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Languages } from "./components/languages/languages";

import "./styles/home.scss"

export default function Home() {
  return (
    <main>
      <div className="main-content">
        <div className="first-content">
          <Header/>
          <Experience/>
        </div>
        <div className="second-content">
          <div className="separator"></div>
          <Languages/>
          <Education/>
          <div className="social-medias">
            <h3>Social Medias</h3>
            <div className="social-btn">
              <span></span>
              <span></span>
            </div>
          </div>
          <button>Contact me</button>
        </div>
      </div>
    </main>
  );
}
