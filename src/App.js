import React, { useState } from "react";
import Display from "./component/display/display";
import ButtonPanel from "./component/buttonPanel/buttonPanel";
import Calculate from "./logic/calculate";

function App() {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: "",
  });

  const handleClick = (buttonName) => {
    let result = Calculate({ state }, buttonName);
    setState( Calculate({ state }, buttonName) );
  };
  console.log("state", state);

  return (
    <div>
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clikmeApp={(value) => handleClick(value)} />
    </div>
  );
}

export default App;
