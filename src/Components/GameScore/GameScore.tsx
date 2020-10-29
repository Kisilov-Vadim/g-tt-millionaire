import React, { memo, ReactElement } from "react";
import config from "../../Config.json";

// components
import ScoreItem from "../ScoreItem/ScoreItem";

function GameScore(): ReactElement {
  const prices = [...config.prices].reverse();
  return (
    <div className="game_score">
      {
        prices.map((item, index) => (
          <ScoreItem
            key={item}
            index={index}
            length={prices.length}
          >
            {item}
          </ScoreItem>
        ))
      }
    </div>
  );
}

export default memo(GameScore);
