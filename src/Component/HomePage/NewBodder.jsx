import React from 'react'

export default function NewBodder() {
  return (
<div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", background: "rgb(221, 209, 255)", marginTop: "36px", padding: "60px"}}>
  <div style={{width: "30%", display: "flex", flexDirection: "column", padding: "40px 30px"}}>
    <h1 style={{fontSize: "30px", textAlign: "left"}}>FIND THE COFFEE OF YOUR DREAMS</h1>
    <p style={{margin: "4px 0", fontWeight: 600, textAlign: "left"}}>Take our coffee quiz to get personalized</p>
    <p style={{margin: "4px 0", fontWeight: 600, textAlign: "left"}}>suggestions based on your coffee-drinking</p>
    <p style={{margin: "4px 0", fontWeight: 600, textAlign: "left"}}>style.</p>
    <button className='shopnow' placeholder="" style={{alignSelf: "flex-start", margin: "60px 0 0 0"}}>TAKE THE QUIZ</button>
  </div>
  <div>
    <div>
      <img src='https://www.vervecoffee.com/cdn/shop/files/Comp-1_1500x.gif?v=1668121688&fbclid=IwAR1Cske9ATVjkWoTHPz3lAGc8VWvZoGuJGlMsJTrCsKGyQwEg0RL6GpPZY8' alt='hinhanh' width={730} height={400}/>
    </div>
  </div>
</div>
  )
}
