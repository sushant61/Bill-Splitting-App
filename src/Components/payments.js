import React from "react";
import { useGlobalContext } from "../Context";
const Payments = () => {
  const { list, amount, description, setAmount, setDescription } =
    useGlobalContext();
  const addPayment = (e) => {
    e.preventDefault();
    setAmount(0);
    setDescription("");
  };
  return (
    <>
      <form>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Description : </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
      <button onClick={addPayment}>Add</button>
      {list.map((item) => {
        return item;
      })}
    </>
  );
};

export default Payments;
