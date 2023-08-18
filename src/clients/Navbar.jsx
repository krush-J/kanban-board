import React, { useEffect, useRef, useState } from "react";
import { SelectCustom } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { groupTickets, sortTickets } from "./redux/Actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const grouping = useSelector((state) => state.Reducer.grouping);
  const sorting = useSelector((state) => state.Reducer.sorting);

  const dropdownRef = useRef(null);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const setGroupingType = (value) => {
    dispatch(groupTickets(value));
  };

  const setSortingType = (value) => {
    dispatch(sortTickets(value));
  };

  return (
    <div
      style={{
        height: "3.5rem",
        background: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "20px",
        color: "#626467",
        overflow: "visible",
      }}
    >
      {/* Display Button */}
      <div
        style={{
          display: "inline-flex",
          boxShadow: "0px 2px 3px #7c8486",
          borderRadius: "5px",
          paddingTop: "3px",
          paddingBottom: "3px",
          paddingLeft: "6px",
          paddingRight: "6px",
          width: "fitContent",
          gap: "5px",
          cursor: "pointer",
        }}
        onClick={() => setDropDown(!dropDown)}
      >
        <span
          style={{
            paddingTop: "2px",
            width: "20px",
            height: "24px",
          }}
        >
          <i class="bi bi-sliders2"></i>
        </span>
        <span
          style={{
            fontWeight: "400",
          }}
        >
          Display
        </span>
        <span
          style={{
            paddingTop: "2px",
            width: "20px",
            height: "24px",
          }}
        >
          <i class="bi bi-chevron-down"></i>
        </span>
      </div>

      {/* pop up menu */}
      {dropDown && (
        <div
          ref={dropdownRef}
          style={{
            position: "absolute",
            top: "3rem",
            width: "15rem",
            background: "#f4f4f9",

            boxShadow: "0px 2px 3px #7c8486",
            borderRadius: "5px",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          {/* grouping row */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Grouping</span>
            <span>
              <SelectCustom
                options={["Status", "User", "Priority"]}
                selected={grouping}
                setSelected={setGroupingType}
              />
            </span>
          </div>

          {/* Ordering Row */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>Ordering</span>
            <span>
              <SelectCustom
                options={["Priority", "Title"]}
                selected={sorting}
                setSelected={setSortingType}
              />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
