import React from "react";

function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const totalTarget = goals.reduce((sum, g) => sum + g.targetAmount, 0);

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Target: ${totalTarget}</p>
      <p>Total Saved: ${totalSaved}</p>
    </div>
  );
}

export default Overview;
