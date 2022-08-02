import "./about.css";
import Learning from "../../img/coding_girls.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/242756118_3279738098920506_1386223902576905305_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=BqxDXWPHPFIAX-vr1zr&_nc_ht=scontent-lax3-2.xx&oh=00_AT_FUAgC2rIh-s7B5ywhRsQjqDLQouxkc1puzkFuN1-iOA&oe=62ECD974"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Learning} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;