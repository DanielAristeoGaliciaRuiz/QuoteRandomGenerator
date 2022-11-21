import React from 'react'
import QuoteButton  from './QuoteButton'

export const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject}) => {
  return (
    <article className='quoteBox'>
        <p style={colorObject}>{quote.quote}</p>
        <h3 style={colorObject}>{quote.author}</h3>
        <section className='quoteBox-footer'>
        <QuoteButton getNewValues={getNewValues}
         backgroundObject={backgroundObject}/>
        <i  className='bx bxs-quote-alt-left' style={colorObject}></i>
        </section>
    </article>
  )
}


export default QuoteBox