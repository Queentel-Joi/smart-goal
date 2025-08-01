import React, { useState } from "react";
import "./GoalList.css";

function GoalList({ goals, onDelete, onDeposit }) {
  const [depositAmounts, setDepositAmounts] = useState({});
  const today = new Date();

  const handleChange = (id, value) => {
    setDepositAmounts({ ...depositAmounts, [id]: value });
  };

  return (
    <div className="goal-list">
      {goals.map((goal) => {
        const progress = (goal.savedAmount / goal.targetAmount) * 100;
        const remaining = goal.targetAmount - goal.savedAmount;
        const deadline = new Date(goal.deadline);
        const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        const isComplete = goal.savedAmount >= goal.targetAmount;
        const isWarning = daysLeft <= 30 && !isComplete;
        const isOverdue = daysLeft < 0 && !isComplete;

        return (
          <div className="goal-card" key={goal.id}>
            <h3>{goal.name}</h3>
            <p>Category: {goal.category}</p>
            <p>Target: ${goal.targetAmount.toLocaleString()}</p>
            <p>Saved: ${goal.savedAmount.toLocaleString()}</p>
            <p>Remaining: ${remaining.toLocaleString()}</p>
            <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
            {isWarning && <p className="warning">⚠️ Less than 30 days left!</p>}
            {isOverdue && <p className="overdue">❌ Deadline passed!</p>}
            {isComplete && <p className="complete">✅ Goal Complete!</p>}

            <div className="progress-bar">
              <div className="fill" style={{ width: `${Math.min(progress, 100)}%` }}></div>
            </div>
            <div className="overview-box">...</div>
<div className="add-goal-form">...</div>
<div className="goal-list">...</div>
<div className="goal-item">...</div>


            <input
              type="number"
              placeholder="Enter amount"
              value={depositAmounts[goal.id] || ""}
              onChange={(e) => handleChange(goal.id, e.target.value)}
            />
            <button onClick={() => onDeposit(goal.id, depositAmounts[goal.id])}>+ Save</button>
            <button onClick={() => onDelete(goal.id)}>Delete</button>
            <button className="save-btn">+ Save</button>
<button className="delete-btn">Delete</button>

          </div>
        );
      })}
    </div>
    
  );
}

export default GoalList;

