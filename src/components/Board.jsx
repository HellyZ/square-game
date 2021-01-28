import React from 'react';

const Board = (props) => {
  const {mapSize, handleTileHover} = props;
  
  const tiles =  [...Array(mapSize)].map((_, index) => Array(mapSize).fill(index))

  const renderRow = (row, rowId) => {

    return row.map((item, index)=>(
      <div 
        className="mapTile" 
        key={index} 
        onMouseEnter={(e)=>{handleTileHover(e, rowId, index+1)}}
        onMouseLeave={e => e.target.style.backgroundColor='#fff'}
        onMouseOver={e => e.target.style.backgroundColor='#03a8f4'}
      >
      </div>
    ))
  }
  return (
      <div className="game-board">
        {tiles.map((row, index)=>(
          <div className="mapRow" style={{gridRow:mapSize}} key={index} >{renderRow(row, index+1)}</div>
        ))
        }
        </div>)
  }
  export default Board;
