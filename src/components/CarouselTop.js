import React, { useState,useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/CarouselTop.css'

function CarouselTop() {
  const [welcomeBanner,setWelcomeBanner]=useState(true);
  const landing=require('../assets/landing2.jpg'); 
  const Drip = require('../assets/Drip.jpg');
  const Drip2 = require('../assets/Drip2.jpg');
  const sprinkler = require('../assets/sprinkler.jpg');

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeBanner(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const wlcm=()=>{
    return(
      welcomeBanner?
      <>
      <img
        className="d-block w-100 CarouselImg"
        src={landing}
        alt="First slide"
      />
      </>:
      <img
        className="d-block w-100 CarouselImg"
        src={Drip}
        alt="First slide"
      />
    )
  }
  
  return (
    <>
    <div className='CarouselTopST'>
      <Carousel>
      <Carousel.Item interval={2000}>
        {wlcm()}
        {/* <Carousel.Caption>
          <h3>Welcome</h3>
          <p>to sid</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 CarouselImg"
          src={Drip2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 CarouselImg"
          src={sprinkler}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default CarouselTop