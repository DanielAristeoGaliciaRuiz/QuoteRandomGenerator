import { useState } from 'react'
import QuoteBox  from './components/QuoteBox'
import quoteDB from "./db/quotes.json"
import colors from "./db/colors"

function App() {

  //Función para ontener un índice aleatorios dado un array.
  const randomElement=(array)=>{
    const randomIndex=Math.floor(array.length*Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(randomElement(quoteDB))
  const [color, setColors] = useState(randomElement(colors))
  
  //Función para obtener nuevos valores y modificar el estado de quote y colors
  const getNewValues=()=>{
    const newQuote=randomElement(quoteDB)
    const newColor=randomElement(colors)
    setQuote(newQuote)
    setColors(newColor)
  }

  const backgroundObject={
    backgroundColor:color
  }

  const colorObject={
    color:color
  }

  return (
    <div className="App" style={backgroundObject}>
    <QuoteBox quote={quote} 
    getNewValues={getNewValues} 
    colorObject={colorObject}
    backgroundObject={backgroundObject}/>
    </div>
  )
}

export default App
