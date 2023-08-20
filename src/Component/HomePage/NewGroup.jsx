import React from 'react'

export default function NewGroup() {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgb(244, 238, 229, 0.37)", marginTop: "36px", marginBottom: "20px"}}>
    <div style={{height: "100%", width: 310, position:'relative', width:'70%'}}>
      <img src="https://www.vervecoffee.com/cdn/shop/files/SO.png?v=1690933129" alt="hinhanh" width={490} height={368}/>
      <h4>ROASTER’S CHOICE</h4>
      <p>A rotation of curated coffees.</p>
      <button className="shopnow" placeholder="">SHOP ROASTER’S CHOICE</button>
    </div> 
    <div style={{height: "100%", width: 310, margin: " 0 10px", position:'relative', width:'70%'}}>
      <img src="https://www.vervecoffee.com/cdn/shop/files/Blends_2.png?v=1690933149" alt="hinhanh" width={490} height={368}/>
      <h4>FAVORITE BLENDS</h4>
      <p>Consistently delicious best-sellers.</p>
      <button className="shopnow" placeholder="">SHOP BLENDS</button>
    </div>
    <div style={{height: "100%", width: 310, margin: "0 10px", position:'relative', width:'70%'}}>
      <img src="https://www.vervecoffee.com/cdn/shop/files/gift.png?v=1690933483" alt="hinhanh" width={490} height={368}/>
      <h4>GIFT SUBSCRIPTIONS</h4>
      <p>Share the love of Verve coffee.</p>
      <button className="shopnow" placeholder="">SHOP GIFT SUBSCRIPTIONS</button>
    </div> 
  </div>
  )
}
