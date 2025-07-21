import React from "react";
import DepositForm from "./DepositForm";

function GoalList({ goals, onDeposit }) {
  return (
    <div>
      <h2>My Goals</h2>
      {goals.map((goal) => (
        <div key={goal.id}>
          <h3>{goal.title}</h3>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <DepositForm goalId={goal.id} onDeposit={onDeposit} />
        </div>
      ))}
    </div>
  );
}

export default GoalList;
