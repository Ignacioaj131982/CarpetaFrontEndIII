import './App.css'
import Saludo from "./Components/Saludo"
import Card from "./Components/Card"

function App() {
  return (
    <>
      <Saludo nombre="Juan">Hola</Saludo>

      <Card>
        <button>Agregar</button>
      </Card>
      <Card>
        <button>Quitar</button>
      </Card>
      <Card>
        <button>Almacenar</button>
      </Card>
      
    </>
  )
}

export default App;
