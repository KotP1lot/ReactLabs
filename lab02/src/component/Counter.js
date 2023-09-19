import { useState } from "react";

export default function Counter(props) {
  const [count, SetCount] = useState(props.data.init?props.data.init:0);
  return (
    <div>
      <p>Поточний рахунок: {count} </p>
      <button onClick={() => { count >= props.data.max? SetCount(count): SetCount(count + 1) }}>
        +
      </button>
      <button onClick={() => { count <= props.data.min? SetCount(count): SetCount(count - 1) }}>
        -
      </button>
      <button onClick={() =>{ props.data.init? SetCount(props.data.init): SetCount(0) }}>
        Reset
      </button>
    </div>
  );
}