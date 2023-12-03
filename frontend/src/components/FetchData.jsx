import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
export const getData = (arg) => {
  console.log(arg);
};

const FetchData = ({ getdata }) => {
  const {setBlogs} = useContext(DataContext)
  const endpoint = "https://destined-vulture-28.hasura.app/v1/graphql";
  const headers = {
    "Content-Type": "application/json",
    Authorization:'W5gOT9Hcoj9LfxHmiE9sMjGHgtga64nERIvuD8uAK35y14kxZpQdsKi1hGWs36uw'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "post",
          headers: headers,
          body: JSON.stringify(getdata),
        };

        const response = await fetch(endpoint, options);
        const data = await response.json();

        if (data) {
          console.log("it is data")
          setBlogs(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <p>Hello</p>;
};

export default FetchData;
