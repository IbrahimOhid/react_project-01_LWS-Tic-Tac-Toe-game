import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <div>
      <h1>Winner: </h1>
      <div className='inline-flex'>
      <Square />
      <Square />
      <Square />
      </div>
      <div className='inline-flex'>
      <Square/>
      <Square />
      <Square />
      </div>
      
      <div className='inline-flex'>
      <Square/>
      <Square />
      <Square />
      </div>
    </div>
  )
}

export default Board
