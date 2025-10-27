import './App.css';
import pluto from './images/pluto.jpeg';

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
   <>
     <div>
      <h2>Welcome to the real universe</h2>
    </div>
    <main>
      {/* <img src="https://github.com/ceodemitri.png" alt="Pluto" height="200"/> */}
      <img src={pluto} alt="Pluto" height={200} />
      <ul>
        {planets.map((planet) => (
          <li style={{listStyleType: "none"}} key={planet.id}>{planet.name}</li>
        ))}
      </ul>
    </main>
   </> 
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
