import React from 'react';
import "./index.css";
import ChrisPic from '../../assets/about-creator-pics/ChrisPic.png';
import SuzannaPic from '../../assets/about-creator-pics/SuzannaPic.png';
import RachelPic from '../../assets/about-creator-pics/RachelPic.jpg';
import KimPic from '../../assets/about-creator-pics/KimPic.jpg';
import { Link } from 'react-router-dom';

function About() {
  return(
    <div className="AddPetSection">
      <div className="AboutContainer">
        <div className="OuterContainer">
          <div className="AboutInnerContainer">
            <div className="AboutInfo">
              <div className="AboutDescription">
                A Petter Life is a Progressive Web Application that uses React.js and MongoDB to give undesired pets "a petter life."
              </div>
            </div>

            <div className="CreatorInfo">
              <div className="CreatorContainers">

                <div className="CreatorRow">
                  <div className="CreatorContainer">
                      <img clasName="CreatorPic" src={SuzannaPic} alt="creator-suzanna"></img>
                      <div className="CreatorDescription">
                        <div className="CreatorName">Suzanna Akins</div>
                        <div className="CreatorBio">Full-Stack Web Developer</div>
                        <a className="CreatorLinks" href="https://github.com/suzannaakins">Github</a>
                      </div>
                  </div>

                  <div className="CreatorContainer">
                    <img clasName="CreatorPic" src={RachelPic} alt="creator-rachel"></img>
                    <div className="CreatorDescription">
                      <div className="CreatorName">Rachel Wagschal</div>
                      <div className="CreatorBio">Full-Stack Web Developer</div>
                      <a className="CreatorLinks" href="https://github.com/rawagschal">Github</a>
                    </div>
                  </div>
                </div>
                  
                <div className="CreatorRow">
                  <div className="CreatorContainer">
                      <img clasName="CreatorPic" src={KimPic} alt="creator-kim"></img>
                      <div className="CreatorDescription">
                        <div className="CreatorName">Kim Mulligan</div>
                        <div className="CreatorBio">Full-Stack Web Developer</div>
                        <a className="CreatorLinks" href="https://github.com/Kimmulligan">Github</a>
                      </div>
                  </div>

                    <div className="CreatorContainer">
                      <img clasName="CreatorPic" src={ChrisPic} alt="creator-chris"></img>
                      <div className="CreatorDescription">
                        <div className="CreatorName">Chris Meissner</div>
                        <div className="CreatorRole">Full-Stack Web Developer</div>
                        <a className="CreatorLinks" href="https://github.com/ChrisMeissner">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="BackToHomepageBtn">Home</Link>
      </div>
    </div>
  )
}

export default About;