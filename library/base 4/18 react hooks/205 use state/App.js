import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  let [text, setText] = useState({ text: "Lorem ipsum dolor sit" });

  const incrementHandler = () => {
    setCounter(counter += 1);
  };

  const decrementHandler = () => {
    counter > 0 && setCounter(counter -= 1);
  };

  const changeText = () => {
    setText({ text: "the text is changed" });
  };

  const changeTextWithArg = (text) => {
    setText({ text: text });
  };

  return (
    <React.Fragment>
      <div>
        <p>counter: {counter}</p>
        <button onClick={() => setCounter((counter += 1))}>increment</button>
        <button onClick={() => setCounter((counter -= 1))}>decrement</button>
        <button onClick={() => incrementHandler()}>increment handler</button>
        <button onClick={decrementHandler}>decrement handler</button>
      </div>
      <hr />
      <div>
        <p>{text.text}</p>
        <button onClick={changeText}>change text</button>
        <button onClick={() => changeTextWithArg("text is changed with arg")}>
          change text
        </button>
      </div>
    </React.Fragment>
  );
};

export default App;
