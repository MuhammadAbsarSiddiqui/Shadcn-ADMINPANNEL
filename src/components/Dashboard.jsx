import React from 'react'
import { TableDemo } from './TableDemo'
import { Component } from './Component'
import { CardWithForm } from './CardWithForm'

function Dashboard() {
  return (
    <div className='flex flex-1 flex-row flex-wrap w-full justify-between bg-sky-700 p-4  '>
      <div class="basis-128 shrink"> <TableDemo /> </div>
      <div class="basis-64"> <Component/> </div>
      <div class="basis-64"><CardWithForm/> </div>
      <div class="basis-64"></div>
    </div>
  )
}

export default Dashboard 
