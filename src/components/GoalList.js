import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ goals, onDeposit }) {
  return (
    <div>
      <h2>My Goals</h2>
      {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} onDeposit={onDeposit} />
      ))}
    </div>
  );
}

export default GoalList;
