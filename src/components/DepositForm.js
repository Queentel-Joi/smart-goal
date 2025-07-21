import React, { useState } from "react";

function DepositForm({ goalId, onDeposit }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onDeposit(goalId, parseFloat(amount));
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Deposit amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
