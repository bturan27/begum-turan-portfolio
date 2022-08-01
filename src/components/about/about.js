import "./about.css";

import Learning from "../../img/coding_girls.jpeg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img src="https://images.pexels.com/photos/1449599/pexels-photo-1449599.jpeg?auto=compress&cs=tinysrgb&w=1200"alt=""className="a-img"/>
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
                        <img src={Learning} alt='' className="a-award-img"/> 
                        <div className="a-award-texts"></div>
                        <h4 className="a-award-title>">KDLKSFKLDKLKFS /</h4>
                        <p className="a-award-desc">
                            klfdlkdl;fkl;kl;d </p>
                    </div>
                </div>



            </div>
        </div>
    )

}


export default About;