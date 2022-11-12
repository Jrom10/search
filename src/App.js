import { useState } from "react";

const personas = [
  {id: 'p01',
    name: 'Nicolas',
  },
  {id: 'p02',
    name: 'Tincho',
  },
  {id: 'p03',
    name: 'Nandres',
  }
]
const mascotas = [
  {id: 'm01',
    name: 'Zafiro',
  },
  {id: 'm02',
    name: 'Mecha',
  },
  {id: 'm03',
    name: 'Clarita',
  }
]
const crosswork = [
  {id: 'c01',
    name: 'PushUp',
  },
  {id: 'c02',
    name: 'DeadLift',
  },
  {id: 'c03',
    name: 'BoxJump',
  }
]

function App() {

  const [data, setData] = useState(...personas, ...mascotas, ...crosswork)
  const [current, setCurrent] = useState('all')
  const [selection, setSelection] = useState(null)

  function handleClick(e) {
    const location = e.target.filter

    switch (location) {
      case 'all':
          setData([...personas, ...mascotas, ...crosswork])  
          setCurrent('all')
        break;
        case 'personas':
          setData([...personas])  
          setCurrent('personas')
        break;
        case 'mascotas':
          setData([...mascotas])  
          setCurrent('mascotas')
        break;
        case 'crosswork':
          setData([...crosswork])  
          setCurrent('crosswork')
        break;
    
      default:
        break;
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleClick} filter='all'>TODOS</button>
        <button onClick={handleClick} filter='personas'>PERSONAS</button>
        <button onClick={handleClick} filter='mascotas'>MASCOTAS</button>
        <button onClick={handleClick} filter='crosswork'>CROSSWORK</button>
      </div>
      <div>
        {data.map((item)=>(
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

