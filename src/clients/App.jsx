import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import CardScreen from "./screens/CardScreen";
import { getData, groupTickets, sortTickets } from "./redux/Actions";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.zoom = "90%";
  }, []);
  const fetchAPI = async () => {
    await axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => dispatch(getData(response.data)));
    dispatch(groupTickets(localStorage.getItem("grouping") || "Status"));
    dispatch(sortTickets(localStorage.getItem("sorting") || "Priority"));
  };
  fetchAPI();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Navbar />
      <CardScreen />
    </div>
  );
};

export default App;
