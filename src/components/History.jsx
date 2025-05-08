import React from 'react'

const History = ({moves}) => {
  return (
    <div>
      <div>
        <ol className='text-white font-bold'>{moves}</ol>
      </div>
    </div>
  )
}

export default History
