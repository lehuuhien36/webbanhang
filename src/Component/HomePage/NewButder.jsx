import React from 'react'

export default function NewButder() {
  return (
<div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", background: "#9CAF96", marginTop: "36px", padding: "60px"}}>
  <div style={{width: "30%", display: "flex", flexDirection: "column"}}>
    <h1 style={{fontSize: "30px", textAlign: "left"}}>WE ARE VERVE.</h1>
    <p style={{margin: "4px 0", fontWeight: 600}}>Sourcing the very best coffee in</p>
    <p style={{margin: "4px 0", fontWeight: 600}}>the world is our passion. With an</p>
    <p style={{margin: "4px 0", fontWeight: 600}}>unparalleled focus on craft, quality</p>
    <p style={{margin: "4px 0", fontWeight: 600}}>and relationships, we’re making a</p>
    <p style={{margin: "4px 0", fontWeight: 600}}>positive impact in our coffee</p>
    <p style={{margin: "4px 0", fontWeight: 600}}>communities.</p>
    <button className='shopnow' placeholder="" style={{alignSelf: "flex-start", margin: "30px 0 0 0"}}>LEARN MORE</button>
  </div>
  <div style={{backgroundImage:''}}>
    <img src='https://www.vervecoffee.com/cdn/shop/files/Farmlevel-HP-gif_1500x.gif?v=1674153516' alt='hinhanh' width={1000} height={419} style={{objectFit: 'cover'}}/>
  </div>
</div>
  )
}
