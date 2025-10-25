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

function App() {
  return (
    <>
      <Header possession="Block" year={new Date().getFullYear()}/>
      <h2>Hallo {color.toUpperCase()} Kosmos {sun}!</h2>
    </>
  )
}

export default App
