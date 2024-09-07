import React from "react";

export default function FinishedScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  console.log(highscore)
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 75 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage > 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "😮‍💨";
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of
        <strong>{maxPossiblePoints}</strong> ({percentage}%)
      </p>
      <p className="highscore">(High Score: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
