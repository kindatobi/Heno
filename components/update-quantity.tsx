import { useState } from "react";

export default function UpdateQuantity() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div
        onClick={() => {
          if (count >= 1) setCount((s) => s + 1);
        }}
      >
        -
      </div>
      <div>{count}</div>
      <div onClick={() => setCount((s) => s + 1)}>+</div>
    </div>
  );
}
