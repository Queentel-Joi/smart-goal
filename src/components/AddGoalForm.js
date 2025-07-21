import React, { useState } from "react";

function AddGoalForm({ onAddGoal }) {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      title,
      targetAmount: parseFloat(targetAmount),
      savedAmount: 0,
    };
    onAddGoal(newGoal);
    setTitle("");
    setTargetAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input
        type="text"
        placeholder="Goal title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default AddGoalForm;
