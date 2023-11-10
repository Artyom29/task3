
import Cards from '../Cards/cards'
import '../Style/App.css'

function App() {

  const arr = [
    {
      cost: 300,
      color: 'blue'
    },
    {
      cost: 450,
      color: 'green'
    },
    {
      cost: 550,
      color: 'red'
    },
    {
      cost: 1000,
      color: 'black'
    },
  ]

  return (
    <>
      <Cards card={arr[0]} />
      <Cards card={arr[1]} />
      <Cards card={arr[2]} />
      <Cards card={arr[3]} />
    </>
  )
}

export default App
