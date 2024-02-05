import React, { useState, useEffect } from "react";

const App = () => {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} clicked`;
  });

  return (
    <React.Fragment>
      <div>
        <p>{count} clicked</p>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
    </React.Fragment>
  );
};

export default App;
