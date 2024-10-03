import React from 'react'

 const Repasorafc = (objprops) => {

    const {programa, competencia} = objprops
  return (
    <div>
        <h1 className='bg-primary text-2xl text-white px-6 py-2'>{programa} {competencia}</h1>
    </div>
  )
}
export default Repasorafc;
