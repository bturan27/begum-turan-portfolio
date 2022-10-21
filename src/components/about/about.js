import "./about.css";
import Learning from "../../img/coding_girls.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src={Learning}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        {/* <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p> */}
        <p className="a-desc">
        I came to the US in 2014 as an exchange student and have worked 6 consecutive summers as a waitress in Montana and Wyoming. This allowed me to sponsor myself to further my education in the computer science field. Since the start of obtaining my Master's degree, I have held internships in software development in Chicago and Montana, as well as completed software development bootcamp in Silicon Valley. I am trilingual (English, German & Turkish) and constantly strive to advance these languages as well as programming.
        </p>
        {/* <div className="a-award">
          <img src={Learning} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;