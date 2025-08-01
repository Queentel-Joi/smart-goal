import React from "react";
import DepositForm from "./DepositForm";

function GoalItem({ goal, onDeposit }) {
  return (
    <div>
      <h3>{goal.title}</h3>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <DepositForm goalId={goal.id} onDeposit={onDeposit} />
    </div>
  );
}

export default GoalItem;
