import { useState } from "react";
function Counter() {
  // count = current value
  // setCount = function to update value
  const [count, setCount] = useState(0);


  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}


export default Counter;