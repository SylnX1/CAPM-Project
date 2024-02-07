import React, { useState } from "react";

export default function LocalStorageSetting() {
  const [count, setCount] = useState(+(localStorage.count || 0));

  const handleClickIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleClickDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  localStorage.setItem("count", count);

  return (
    <div>
      <button onClick={handleClickIncrease}>Increase</button>
      <button onClick={handleClickDecrease}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
}