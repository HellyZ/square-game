import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import History from './components/History';
import './App.css';

function App () {
  const [modes, setModes] = useState({});
  const [history, setHistory] = useState([])
  const [isStarted, setIsStarted] = useState(false)
  const [selected, setSelected] = useState(null)


  useEffect(async () => {
    const result = await fetch(
      'http://demo1030918.mockable.io/',
    );
    if (!result.ok) {
      alert('Game Server is Down!');
    }
    
    const data = await result.json()
    setModes(data);
    setSelected(Object.keys(data)[0]);
  }, []);

  const handleTileHover = (e, row, tile) => {

    const value = `row ${row} col ${tile}`
    setHistory([...history, value])
  }

  return (
    <div className="game">
      <div className="game-row">
        <div className='row'>
        <div className="controls">
            <select value={selected} onChange={(e)=>{setSelected(e.target.value)}}>
              {modes && Object.entries(modes).map((item, index) => <option key={index} value={item[1].fields}>{item[0]}</option>)}
            </select>
            <button onClick={(e)=>setIsStarted(!isStarted)}>Start Game</button>
          </div>
        </div>
          
          <div className="main">
            {
            isStarted ? (<Board mapSize={modes[selected].field} handleTileHover={handleTileHover} />) : <h1>Ready!</h1>
          }
              <History data={history} />
          </div>
        </div>
      </div>
    );
  }

export default App;
