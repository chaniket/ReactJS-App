import React, { useEffect, useState } from "react";

const useFetch = ( url ) => {
  const logger = "useFetch ";
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  console.log(logger + JSON.stringify(data));

  useEffect(() => {
    debugger;
    async function getAllUser() {
      const data = await fetch(url).catch((error) => {
        console.error("getAllUser :", error);
        setError(error);
      });
      try {
        const res = await data.json();
        if (data.ok) {
          console.log("GET ALL USERS " + res.content);
          setData(res.content);
        } else {
          setData([]);
        }
      } catch (e) {
        //console.log("Error Handled..." + e);
      }
    }
    getAllUser();
  }, []);

  return [data];
};

export default useFetch;
