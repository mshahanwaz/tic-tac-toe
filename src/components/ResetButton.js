import React from "react";

function Button(props) {
  const { reset, handleReset, children } = props;
  return (
    <button className="game-btn" disabled={!reset} onClick={handleReset}>
      {children}
    </button>
  );
}

export default Button;
