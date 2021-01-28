import React from 'react';

const History = (props) => {
  const {data} = props;
  return (
    <div className="history">
      <h2>History</h2>
      {data && data.map((item, index)=><div>{item}</div>)}
    </div>
  )
}

export default History
