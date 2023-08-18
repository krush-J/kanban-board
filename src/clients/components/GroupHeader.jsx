import React from "react";
import { useSelector } from "react-redux";
import {
  HeadDown,
  PlusIcon,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
  PriorityNo,
  PriorityUrgent,
  StatusBacklog,
  StatusCancel,
  StatusDone,
  StatusProgress,
  StatusTodo,
} from "../icons";
import Avtar from "./Avtar";

const priorities = {
  0: { name: "No Priority", icon: <PriorityNo color={"#94969a"} /> },
  1: { name: "Low", icon: <PriorityLow color={"#94969a"} /> },
  2: { name: "Medium", icon: <PriorityMedium color={"#94969a"} /> },
  3: { name: "High", icon: <PriorityHigh color={"#94969a"} /> },
  4: { name: "Urgent", icon: <PriorityUrgent /> },
};

const statuses = {
  "In progress": <StatusProgress />,
  Cancelled: <StatusCancel />,
  Backlog: <StatusBacklog />,
  Done: <StatusDone />,
  Todo: <StatusTodo />,
};

const GroupHeader = ({ text, total }) => {
  const grouping = useSelector((state) => state.Reducer.grouping);
  const user = useSelector(
    (state) => state.Reducer.users.find((user) => user.id === text) || null
  );
  return (
    <div
      style={{
        minWidth: "280px",
        display: "flex",
        flexDirection: "row",
        paddingTop: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            color: "#94969a",
          }}
        >
          {}
          <span>
            {grouping === "Status" ? (
              statuses[text]
            ) : grouping === "Priority" ? (
              priorities[text].icon
            ) : (
              <Avtar name={user.name} available={user.available} />
            )}
          </span>
          <span style={{ color: "#333438" }}>
            {grouping === "Status"
              ? text
              : grouping === "Priority"
              ? priorities[text].name
              : user.name}
          </span>
          <span>{total}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <span>
            <PlusIcon color={"#94969a"} />
          </span>
          <span>
            <HeadDown color={"#94969a"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupHeader;
