import React,{useEffect,useState} from "react";
import "../CSS/Home.css";
import ContactUs from "./ContactUs";
import Products from "./Products";
import CarouselTop from "./CarouselTop";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Divider from "./Divider";

function Home() {
  const [textAnimationClass,setTextAnimationClass]=useState("textAnimatefrom");
  // const [expandClass,setExpandClass] = useState("subNavItem isMobile");
  const jain = require('../assets/jain.png');
  const prayag = require('../assets/prayag.png');
  const supreme = require('../assets/supreme.png');
  const psg = require('../assets/psg.png');
  const side_leaf = require('../assets/side_leaf.png');
  const palm_leaf = require('../assets/palm_leaf.png');
  const florida_leaf = require('../assets/florida_leaf.png');

  useEffect(() => {
    

    const timer = setTimeout(() => {
      setTextAnimationClass("textAnimateto");
      AOS.init({duration:1000});
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // const handleMobileExpand = () =>{
  //   if(expandClass==="subNavItem"){
  //     setExpandClass("subNavItem isMobile");
  //   }
  //   else{
  //     setExpandClass("subNavItem");
  //   }
  // }
  
  return (
    <>
      <div id="Home">
        
        {/* <div className="subNav">
          <div className="mobileExpand" onClick={handleMobileExpand}>
            today
          </div>
          <div className={expandClass}>
            <span>
              22deg
            </span>
            <span>
              cloudy
            </span>
          </div>
          <div className={expandClass}>
            click here for weather Report
          </div>
          <div className={expandClass}>
            <span>
              Sunday
            </span>
            <span>
              23/04/2068
            </span>
          </div>
        </div> */}
        <CarouselTop />
        <div  className="welcomeDiv">
            <div className="outerSideLeaf">
              <div className="sideLeaf">
                <img alt="sideleaf" src={side_leaf}/>
              </div>
            </div>
            <div className="outerSideLeaf">
              <div className="sidePalmLeaf">
                <img alt="sideleaf" style={{height:"550px"}} src={palm_leaf}/>
              </div>
            </div>
            <div className="outerSideLeaf">
              <div className="sideFloridaLeaf">
                <img alt="sideleaf" style={{height:"100px"}} src={florida_leaf}/>
              </div>
            </div>
          <div className="textDivOuter">
            <div className="hideDiv">
              <span className={textAnimationClass}>Hello there,</span>
            </div>
            <div className="hideDiv">
              <span className={textAnimationClass}>Welcome to</span>
            </div>
            <div className="hideDiv">
              <span className={`${textAnimationClass} shopName`}>SIDDHANT IRRIGATION CENTER</span>
            </div>
            <div className="hideDiv">
              <span className={`${textAnimationClass} shopName`}>and DISTRIBUTORS.</span>
            </div>
            <div className="hideDiv weOfferText">
              <span className={textAnimationClass}>We offer products from</span>
            </div>
          </div>

          <div className="CompanyCardsDiv">
            
            <div className="companyCard" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <img className="companyCardLogo" alt="" src={jain}/>
            </div>
            <div className="companyCard" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <img className="companyCardLogo" alt="" src={supreme}/>
            </div>
            <div className="companyCard" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <img className="companyCardLogo" alt="" src={prayag}/>
            </div>
            <div className="companyCard" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              <img className="companyCardLogoPSG" alt="" src={psg}/>
            </div>
            
          </div>
        </div>
      </div>
      {/* <Divider/> */}
      <section id="Products">
        <Products />
      </section>
      <section id="ContactUs">
        <ContactUs />
      </section>
    </>
  );
}

export default Home;
