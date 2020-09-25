import React from "react";

export default function Search({ setSearch }) {
  return (
    <div className="ui large fluid icon input">
      <input
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}
