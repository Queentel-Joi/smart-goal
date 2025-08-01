import React, { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import AddGoalForm from "./components/AddGoalForm";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://json-server-r702.onrender.com/goals")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setGoals(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching goals:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);


  function handleAddGoal(newGoal) {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }


  function handleDeleteGoal(id) {
    fetch(`https://json-server-r702.onrender.com/goals/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
  }

  // Update a goal (e.g. deposit savings)
  function handleUpdateGoal(updatedGoal) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal))
    );
  }


  const totalGoals = goals.length;
  const completedGoals = goals.filter((goal) => goal.savedAmount >= goal.targetAmount).length;
  const completionRate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  return (
    <div className="App">
      <h1>SMART Goal Planner</h1>

      <div className="overview">
        <h2>Overview</h2>
        {isLoading ? (
          <p>Loading goals...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : (
          <>
            <p>Total Goals: {totalGoals}</p>
            <p>Completed Goals: {completedGoals}</p>
            <p>Completion Rate: {completionRate}%</p>
          </>
        )}
      </div>

      <AddGoalForm onAddGoal={handleAddGoal} />

      <GoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
        onUpdateGoal={handleUpdateGoal}
      />
    </div>
  );
}

export default App;
