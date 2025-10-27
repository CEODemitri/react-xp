import './App.css'
let color = 'blue';
let sun = "☀️";

function Header({possession, year}) {
  return (
    <header>
      <h1>Meech's {possession}</h1>
      <p>{year}</p>
    </header>
  )
}

const items = [
  'Pluto',
  'Neptune',
  'Uranus'
]

const itemObject = items.map((planet, i) =>  ({
  id: i,
  name: planet
}))

function Main({planets}) {
  return (
    <ul>
      {planets.map((planet) => (
        <li style={{listStyleType: "none"}} key={planet.id}>{planet.name}</li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <>
      <Header possession="Block" year={new Date().getFullYear()}/>
      <h2>Hallo {color.toUpperCase()} Kosmos {sun}!</h2>
      <Main planets={itemObject}/>
    </>
  )
}

export default App
