import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function NewProduct() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
          slidesToSlide:1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide:1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }



  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", background: "rgb(244 238 229 / 37%)", marginTop: "36px", padding: "12px"}}>
        
            <div style={{width: "30%", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column",}}>
                <h1 style={{fontSize: "30px"}}>NEW AUGUST COFFEES</h1>
                <p style={{margin: "0", fontWeight: 600}}>Like the flowers blooming in our</p>
                <p style={{margin: "4px 0 16px 0 ", fontWeight: 600}}>summer gardens, new August coffees</p>
                <p style={{margin: "4px 0 16px 0 ", fontWeight: 600}}>are the peak flavors of summer.</p>
                <button className='shopnow' placeholder="">SHOP NEW COFFEES</button>
            </div>  
            <div style={{position:'relative', width:'70%',}}>
                <Carousel   arrows={true}  responsive={responsive} showDots={false} draggable={true}>
                <div style={{height:'100%' , width:310}}>
                    <img src='https://www.vervecoffee.com/cdn/shop/files/Kamwangi_August_2023_533x.png?v=1689796437' alt='hinhanh' width={309} height={350} style={{background: "#f4eee5"}}/>
                    <h4>KAMWANGI AB</h4>
                    <p>BLOOD ORANGE PRALINE SIMPLE SYRUP</p>
                    <p>$24.00</p>
                </div> 
                <div style={{height:'100%' , width:310}}>
                    <img src='https://www.vervecoffee.com/cdn/shop/files/Kamwangi_August_2023_533x.png?v=1689796437' alt='hinhanh' width={309} height={350} style={{background: "#f4eee5"}}/>
                    <h4>KAMWANGI AB</h4>
                    <p>BLOOD ORANGE PRALINE SIMPLE SYRUP</p>
                    <p>$24.00</p>
                </div> 
                <div style={{height:'100%' , width:310}}>
                    <img src='https://www.vervecoffee.com/cdn/shop/files/Kamwangi_August_2023_533x.png?v=1689796437' alt='hinhanh' width={309} height={350} style={{background: "#f4eee5"}}/>
                    <h4>KAMWANGI AB</h4>
                    <p>BLOOD ORANGE PRALINE SIMPLE SYRUP</p>
                    <p>$24.00</p>
                </div> 
                <div style={{height:'100%' , width:310}}>
                     <img src='https://www.vervecoffee.com/cdn/shop/files/Kamwangi_August_2023_533x.png?v=1689796437' alt='hinhanh' width={309} height={350} style={{background: "#f4eee5"}}/>
                     <h4>KAMWANGI AB</h4>
                     <p>BLOOD ORANGE PRALINE SIMPLE SYRUP</p>
                     <p>$24.00</p>
                </div> 
                <div style={{height:'100%' , width:310}}>
                     <img src='https://www.vervecoffee.com/cdn/shop/files/Kamwangi_August_2023_533x.png?v=1689796437' alt='hinhanh' width={309} height={350} style={{background: "#f4eee5"}}/>
                     <h4>KAMWANGI AB</h4>
                     <p>BLOOD ORANGE PRALINE SIMPLE SYRUP</p>
                     <p>$24.00</p>
                </div> 
                </Carousel>
            </div>
    </div>
    
  )
}
