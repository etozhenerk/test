import React from "react";

export const StartButton = ({startTrivia, start}) => {
  return (
    <button className="start-button" onClick={() => {startTrivia(!start)}}>{start ? 'Start over' : 'Start'}</button>
  )
};
