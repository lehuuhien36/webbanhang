import React from 'react'
import ContainWrapper from '../ContainWrapper'
import BackGround from './BackGround'
import NewProduct from './NewProduct'
import NewHouse from './NewHouse'
import NewGroup from './NewGroup'
import NewHighlands from './NewHighlands'
import NewBodder from './NewBodder'
import NewButder from './NewButder'

export default function Home() {
  return (
    <ContainWrapper>
        <div><BackGround /></div>
        <div><NewProduct /></div>
        <div><NewHouse /></div>
        <div><NewGroup /></div>
        <div><NewHighlands /></div>
        <div><NewBodder /></div>
        <div><NewButder /></div>
        <div>8</div>
        <div>9</div>
    </ContainWrapper>
  )
}
