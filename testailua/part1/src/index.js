import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Sankarijulistus = (props) => {
  return(
    <div>
      <p>{props.noKuka} on melkoionen {props.noMika}</p>
    </div>
  )
}

const App = () => {
  const nimi = "Pekka"
  const ika = 10
  const noKuka = "Juuso"
  const noMika = "Supersankari"
  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <h2>Sankari</h2>
      <Sankarijulistus noKuka = {noKuka} noMika = {noMika}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'))
