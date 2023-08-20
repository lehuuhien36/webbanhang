import React from 'react'

export default function NewHighlands() {
  return (
<div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start", background: "#F5F5DC", marginTop: "36px", padding: "12px"}}>
  <div style={{width: "30%", display: "flex", flexDirection: "column", padding: "40px 30px"}}>
    <p style={{margin: "0", fontWeight: 600, textAlign: "left"}}>Find out how much coffee you need.</p>
    <h1 style={{fontSize: "30px", textAlign: "left"}}>THE VERVE COFFEE CALCULATOR</h1>
    <p style={{margin: "4px 0", fontWeight: 600, textAlign: "left"}}>Move the slider based on how much coffee</p>
    <p style={{margin: "4px 0", fontWeight: 600, textAlign: "left"}}>your household drinks daily, and we’ll</p>
    <p style={{margin: "4px 0", fontWeight: 600, textAlign: "left"}}>calculate the exact amount to suit your</p>
    <p style={{margin: "4px 0", fontWeight: 600, textAlign: "left"}}>needs.</p>
    <button className='shopnow' placeholder="" style={{alignSelf: "flex-start"}}>SHOP COFFEE</button>
  </div>
</div>
  )
}
