import React, { useState, useEffect } from "react";
import AddGoalForm from "./components/AddGoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("https://smart-goal-752a.onrender.com/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  function handleAddGoal(newGoal) {
    fetch("http://localhost:3001/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((addedGoal) => setGoals((prev) => [...prev, addedGoal]));
  }

  function handleDeposit(goalId, amount) {
    const goal = goals.find((g) => g.id === goalId);
    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + amount,
    };

    fetch(`https://smart-goal-752a.onrender.com/goals`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setGoals((prevGoals) =>
          prevGoals.map((g) => (g.id === goalId ? updated : g))
        );
      });
  }

  return (
    <div className="App">
      <h1>SMART Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDeposit={handleDeposit} />
    </div>
  );
}

export default App;





