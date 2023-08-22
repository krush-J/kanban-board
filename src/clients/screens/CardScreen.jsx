import React from "react";
import { useSelector } from "react-redux";
import { Card, GroupHeader } from "../components";

const CardScreen = () => {
  const { current, sorting } = useSelector((state) => state.Reducer);
  const orderCurrent = ({ data }) => {
    if (sorting === "Title")
      return [...data].sort((a, b) => a.title.localeCompare(b.title));
    return [...data].sort((a, b) => b.priority - a.priority);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`, // Each column is a multiple of 260px
        width: "100%",
        gap: "1.5rem", // Adjust gap between columns
        margin: "0 auto", // Center the grid horizontally
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      {current &&
        Object.keys(current).map((key) => {
          return (
            <div
              key={key}
              style={{
                width: "100%",
                height: "auto", // Set the height of each column
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                alignItems: "center",
              }}
            >
              <GroupHeader text={key} total={current[key].length} />
              {orderCurrent({ data: current[key] }).map((t) => {
                return <Card key={t.id} ticket={t} />;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default CardScreen;
