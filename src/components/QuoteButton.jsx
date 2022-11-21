import React from 'react'

export const QuoteButton = ({getNewValues,backgroundObject}) => {
  return (
<button onClick={getNewValues} style={backgroundObject}>
<i className='bx bx-chevrons-right'></i>
</button>
  )
}

export default QuoteButton 