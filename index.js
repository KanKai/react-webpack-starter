import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <>
      <h1>Hello React.js</h1>
    </>
  );
}

const selector = document.querySelector("#app");

ReactDOM.render(<App />, selector);
