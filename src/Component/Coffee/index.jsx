import React, { useState } from 'react'
import ContainWrapper from '../ContainWrapper'
import Filter from './Filter'

export default function Coffee() {
    const [open, setOpen] = useState(false)
  return (
    <ContainWrapper>
       <div>
            <div>ALL Coffee</div>
            <div><button onClick={()=>setOpen(!open) }>FILTER</button></div>
            {open && (
            <Filter />
            )}
            <div>PRODUCTS (48)</div>
       </div>
       <div></div>
       <div></div>
    </ContainWrapper>
  )
}
