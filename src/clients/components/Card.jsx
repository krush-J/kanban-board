import React from "react";
import { useSelector } from "react-redux";
import Avtar from "./Avtar";
import {
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
} from "../icons/index";

const Tag = ({ name }) => {
  return (
    <div>
      <span
        style={{
          color: "#d4d4d4",
          paddingRight: "2px",
        }}
      >
        <i class="bi bi-circle-fill"></i>
      </span>
      <span
        style={{
          color: "#6b6e77",
        }}
      >
        {name}
      </span>
    </div>
  );
};

const Card = ({ ticket }) => {
  const grouping = useSelector((state) => state.Reducer.grouping);
  const { id, title, userName, userAvailable, tag, status, priority } = ticket;
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "270px",
        minWidth: "250px",
        background: "white",
        borderRadius: "10px",
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      {/* row 1 */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: "#6b6e77",
            fontWeight: "400",
            fontSize: "15px",
          }}
        >
          {id}
        </div>
        {grouping !== "User" && userName && (
          <div>
            <Avtar name={userName} available={userAvailable} />
          </div>
        )}
      </div>

      {/* row 2 */}
      <div
        style={{
          paddingBottom: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          marginTop: grouping === "User" ? "10px" : "0",
        }}
      >
        {grouping !== "Status" && (
          <div>
            {status === "Done" ? (
              <StatusDone />
            ) : status === "In progress" ? (
              <StatusProgress />
            ) : status === "Todo" ? (
              <StatusTodo />
            ) : status === "Backlog" ? (
              <StatusBacklog />
            ) : (
              <StatusCancel />
            )}
          </div>
        )}
        <div
          style={{
            height: "3rem",
            maxHeight: "3em",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: "500",
            color: "#282b2e",
            fontSize: "13px",
          }}
        >
          {title}
        </div>
      </div>

      {/* row 3 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "6px",
        }}
      >
        {grouping !== "Priority" && (
          <div
            style={{
              border: "1px solid #eef0f3",
              borderRadius: "5px",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
          >
            {priority === 0 ? (
              <PriorityNo />
            ) : priority === 1 ? (
              <PriorityLow />
            ) : priority === 2 ? (
              <PriorityMedium />
            ) : priority === 3 ? (
              <PriorityHigh />
            ) : (
              <PriorityUrgent />
            )}
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "6px",
            border: "1px solid #eef0f3",
            borderRadius: "5px",
            paddingTop: "3px",
            paddingBottom: "3px",
            paddingLeft: "5px",
            paddingRight: "5px",
            width: "fitContent",
          }}
        >
          {tag.map((t, index) => (
            <Tag key={index} name={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
