import React from "react";

export default function Ingredient({ name, amount }) {
  return (
    <>
      <div>{name}</div>
      <div>{amount}</div>
    </>
  );
}
