import React from 'react'

export default function BackGround() {
  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems: "center", background: "#f4eee5"}}>
        <div style={{width: "50%", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column",}}>
            <h1 style={{fontSize: "48px"}}>SERMON</h1>
            <p style={{margin: "0", fontWeight: 600}}>This best selling blend is a new take on an old</p>
            <p style={{margin: "4px 0 16px 0 ", fontWeight: 600}}>classic. Behold, your perfect morning.</p>
            <button className='shopnow' placeholder="SHOP NOW">SHOP NOW</button></div>
        <div style={{width: "50%" ,display: "flex", justifyContent: 'center', alignItems: "center"}}><img src='https://www.vervecoffee.com/cdn/shop/files/Sermon_HP_1500x.png?v=1691078132' alt='hinhanh' style={{margin:'auto'}} width={"100%"} height={"100%"}/></div>
    </div>
  )
}
