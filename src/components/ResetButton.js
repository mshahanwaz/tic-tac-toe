import React from "react";

function ResetButton(props) {
  const { reset, handleReset, children } = props;
  return (
    <button className="game-btn" disabled={!reset} onClick={handleReset}>
      {children}
    </button>
  );
}

export default ResetButton;
