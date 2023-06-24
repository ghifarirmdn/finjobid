import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);

  let getData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let state = { data, setData };
  let handleFunction = { getData };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
