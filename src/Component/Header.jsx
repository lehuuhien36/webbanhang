import React from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

export default function Header() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div style={{padding:'8px 32px', backgroundColor:'#7373de', color:'white', fontSize: 16, fontWeight: 700}}>
      <Carousel  arrows={false}  autoPlaySpeed={1000} autoPlay  responsive={responsive} showDots={false} draggable={false}>
        <div style={{height:'100%'}}>hạt cà phê sửa hạng bằng tay</div>
        <div>100% hạt cà phê thượng hạng</div>
        <div>bí quyết độc đáo</div>
        <div>Carabica Robusta bí quyết rang tay và phối trộn độc đáo</div>
      </Carousel>
    </div>
      <div className='xxx' style={{background: "#f4eee5", display: "flex", justifyContent: "center", flexDirection: "column",  alignItems: "center"}}>
        <h1 style={{margin: "0px", padding: "5px", fontFamily:'fantasy'}}> <a href='/' style={{textDecoration: "none", color: "inherit"}}>VERVE</a></h1>
        <p style={{margin: "0px", padding: "5px", fontSize: 12}}>COFFEE ROASTERS</p>  
      </div>                             
      <div className='header'>
        <div><a href='/coffee' style={{textDecoration: "none", color: "inherit"}}>COFFEE</a></div>
        <div>LOCATIONS</div>
        <div>SUBSCRIPTION</div>
        <div>STORY</div>
        <div>GOODS</div>
        <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>QUIZ<div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}><MdOutlineNavigateNext /></div></div> 
      </div>
    </div>
    
  ) 
}
