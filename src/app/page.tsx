import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";

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
          <div className="infos">
            <h3>Languages</h3>
            <div className="languages-info">
              <span>PT-BR Native Speaker</span>
              <span>EN - Intermediate</span>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="educational-info">
              <span>🎓</span>
              <span>
                Technical Course in Computer Science - CEDUP Abílio Paulo
              </span>
            </div>
          </div>
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
