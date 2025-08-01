import React from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(
    (goal) => goal.savedAmount >= goal.targetAmount
  ).length;
  const totalSaved = goals.reduce(
    (acc, goal) => acc + Number(goal.savedAmount),
    0
  );
  const completionRate = totalGoals ? ((completedGoals / totalGoals) * 100).toFixed(0) : 0;

  return (
    <div className="overview">
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Completed Goals: {completedGoals}</p>
      <p>Completion Rate: {completionRate}%</p>
      <p>Total Saved: ${totalSaved.toLocaleString()}</p>
    </div>
  );
}

export default Overview;