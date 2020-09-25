import React from "react";

export default function Transaction({
  id,
  date,
  description,
  category,
  amount,
  delTransaction,
}) {
  return (
    <tr>
      <td>{date}</td>
      <td>
        {description}{" "}
        <button
          className="delBtn"
        
          onClick={() => delTransaction(id)}
        >
          X
        </button>
      </td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}
