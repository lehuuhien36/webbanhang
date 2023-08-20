import React from 'react'

export default function Filter() {
  return (
    <div style={{width: "100%", height: "295px", backgroundColor: "#d8d0c1", display: "flex", justifyContent: 'space-evenly', lineHeight: "44px"}}>
        <div style={{padding: "36px 0"}}>
                <div>FEATURED</div>    
            <div>
                <label><input name="best sellers" type="checkbox" checked /> BEST SELLERS (7)</label>
            </div>
            <div>
                <label><input name="new arrivals" type="checkbox" checked /> NEW ARRIVALS (7)</label>
            </div>
           
        </div>
        
        {/* the 2 */}
        <div style={{padding: "36px 0"}}>
            <div>TYPE</div>
            <div>
                <label><input name="single orin" type="checkbox" checked /> SINGLE ORIGIN (17)</label>       
            </div> 
            
            <div>
                <label><input name="blend" type="checkbox" checked /> BLEND (25)</label>       
            </div>
                    
            <div>
                <label><input name="decaf" type="checkbox" checked /> DECAF (3)</label>       
            </div>

        </div>

        {/* the 3 */}
        <div style={{padding: "36px 0"}}>
            <div>ROAST</div>
            <div>
                <label><input name="light" type="checkbox" checked /> LIGHT (16)</label>       
            </div> 
            
            <div>
                <label><input name="medium" type="checkbox" checked /> MEDIUM (16)</label>       
            </div>
                    
            <div>
                <label><input name="dark" type="checkbox" checked /> DARK (5)</label>       
            </div>

        </div>

        {/* the 4    */}
        <div style={{padding: "36px 0"}}>
            <div>REGION</div>
            <div>
                <label><input name="latin america" type="checkbox" checked /> LATIN AMERICA (13)</label>       
            </div> 
            
            <div>
                <label><input name="africa" type="checkbox" checked /> AFRICA (9)</label>       
            </div>

        </div>

        {/* the 5 */}
        <div style={{padding: "36px 0"}}>
            <div>METHOD</div>
            <div>
                <label><input name="instant" type="checkbox" checked /> INSTANT (13)</label>       
            </div> 
            
            <div>
                <label><input name="flash brew" type="checkbox" checked /> FLASH BREW (4)</label>       
            </div>
                    
            <div>
                <label><input name="oatmilk latte" type="checkbox" checked /> OATMILK LATTE (3)</label>       
            </div>
            
            <div>
                <label><input name="dripkit" type="checkbox" checked /> DRIPKIT (2)</label>       
            </div>

        </div>
        
    </div>
  )
}
