import React, { useEffect, useRef, useState } from "react";

import { FilterIcon, HeadDownIcon } from "./icons";
import { SelectCustom } from "./components";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [grouping, setGrouping] = useState("Status");
  const [sorting, setSorting] = useState("Priority");


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(`${grouping} ${sorting}`);
  }, [grouping, sorting]);

  return (
    <div
      style={{
        height: "3rem",
        background: "white",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "20px",
        color: "#626467",
      }}
    >
      {/* Display Button */}
      <div
        style={{
          display: "inline-flex",
          border: "1px solid #939599",
          borderRadius: "5px",
          padding: "3px",
          paddingBottom: "0",
          width: "fitContent",
          gap: "5px",
          cursor:"pointer",
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
          <FilterIcon />
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
            paddingTop: "4px",
            width: "20px",
            height: "24px",
          }}
        >
          <HeadDownIcon />
        </span>
      </div>

      {/* pop up menu */}
      {dropDown && (
        <div
          ref={dropdownRef}
          style={{
            position: "absolute",
            top: "2.7rem",
            width: "15rem",
            background: "#f9f9fa",
            border: "1px solid #939599",
            borderRadius: "5px",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
                setSelected={setGrouping}
              />
            </span>
          </div>

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
                setSelected={setSorting}
              />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
