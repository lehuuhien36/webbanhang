import React, { useState } from 'react'
import ContainWrapper from '../ContainWrapper'
import Filter from './Filter'
import Newproduct from './Newproduct'

export default function Coffee() {
    const [open, setOpen] = useState(false)
  return (
    <ContainWrapper>
       <div style={{padding:'0 18px'}}>
            <div>ALL Coffee</div>
            <div><button onClick={()=>setOpen(!open) }>FILTER</button></div>
            {open && (
            <Filter />
            )}
         
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div>PRODUCTS (48)</div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div>SORT BY:</div>
                    <select placeholder='BEST SELLING'>
                        <option>BEST SELLING</option>
                        <option>NEWEST</option>
                        <option>PRICE LOW TO HIGH</option>
                        <option>PRICE HIGH TO LOW</option>
                    </select>
                 </div>
            </div>
       </div>
       <div><Newproduct /></div>
       <div></div>
    </ContainWrapper>
  )
}
