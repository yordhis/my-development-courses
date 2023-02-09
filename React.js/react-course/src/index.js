import React, { useState }  from 'react'
import ReactDOM  from 'react-dom/client'

// import Greeting from './Greeting'
// import { Button } from './Button'
// import { TaskCard } from './TaskCard'
// import { Posts } from './Posts'


const root = ReactDOM.createRoot(document.getElementById('root'))

const ComponenteX = () => {
       const [counter, setCounter ] = useState(1)
       
       return (
              <div>
                     <h1>Contando: { counter } </h1>
                     <button onClick={ () => {
                            setCounter(counter + 1)
                     }}>
                            Sumar
                     </button>
              </div>
       )

}

root.render(<>
  <ComponenteX />
</>)
