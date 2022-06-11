import "./about.css";
import Award from "../../img/awa.png";
import Me from "../../img/me.jpg";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Про мене</h1>
        <p className="a-sub">
          Відкладаю все що можливо на стільки на скільки це можливо
        </p>
        <p className="a-desc">
          Студент 2 курсу САПР, спеціальності Комп'ютерні науки. Львівська
          політехніка
        </p>

        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Призер шахового чемпіонату Закарпаття 2021
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
