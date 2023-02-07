import React,{useState,useEffect} from 'react'
import '../CSS/NavBar2.css';

function NavBar() {
    const [radio1,setRadio1] = useState(false);
    const [radio1Class,setRadio1Class] = useState("hideLabel");
    const [radio2,setRadio2] = useState(true);
    const [radio2Class,setRadio2Class] = useState("showLabel");
    const [radio3,setRadio3] = useState(false);
    const [radio3Class,setRadio3Class] = useState("hideLabel");
    const [stickyScroll,setStickyScroll] = useState('Desktop');
    const home = require('../assets/Home2.png');
    const contactUs = require('../assets/contactUs.png');
    const productsPipe = require('../assets/products3.png');
    const siddhant = require('../assets/Siddhant.png');
    // const siddhantSmall = require('../assets/logo-small.png');
    useEffect(() => {
        setRadio2(true);
        // window.location.replace("/#Home");
        const handleScroll = () => {
            if(window.innerWidth>780 && window.scrollY > 20){
                setStickyScroll('Desktop Sticky');
            }
            else{
                setStickyScroll('Desktop');
            }
            
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const handleChange= (e) =>{
        if(e==="1"){
            setRadio1(true);
            setRadio1Class("showLabel");
            setRadio2Class("hideLabel");
            setRadio3Class("hideLabel");
            window.location.replace("/#Products");
        }
        else if(e==="2"){
            setRadio2(true);
            setRadio2Class("showLabel");
            setRadio1Class("hideLabel");
            setRadio3Class("hideLabel");
            window.location.replace("/#Home");
        }
        else if(e==="3"){
            setRadio3(true);
            setRadio3Class("showLabel");
            setRadio2Class("hideLabel");
            setRadio1Class("hideLabel");
            window.location.replace("/#ContactUs");
        }
    }
  return (
    <>
    <div className={stickyScroll}>
        <div className='Logo'>
            <a  href='#Home'><img className="logoImg" alt='Logo' src={siddhant}/></a>
        </div>
        <div className='Nav'>
            <a className='NavItemstag button-30' href='#Home'>Home</a>
            <a className='NavItemstag button-30' href='#Products'>Products</a>
            <a className='NavItemstag button-30' href='#ContactUs'>Contact Us</a>
        </div>
    </div>
    <div className="phone">
        <input type="radio" name="s" id="s1" defaultChecked={radio1} />
        <input type="radio" name="s" id="s2" defaultChecked={radio2}/> 
        <input type="radio" name="s" id="s3" defaultChecked={radio3} />
        <label className='navLabel' htmlFor="s1" onClick={()=>handleChange("1")}><img src={productsPipe} alt="pipes" /><span className={radio1Class}>Products</span></label>
        <label className='navLabel' htmlFor="s2" onClick={()=>handleChange("2")}><img src={home} alt="home btn" /><span className={radio2Class}>Home</span></label>
        <label className='navLabel' htmlFor="s3" onClick={()=>handleChange("3")}><img src={contactUs} alt="contact us" /><span className={radio3Class}>Contact Us</span></label>
        <div className="circle">            
        </div>
        <div className="phone_content">
            <div className="phone_bottom">
                <span className="indicator"></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar