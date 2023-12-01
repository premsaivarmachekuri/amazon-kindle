import { useState, useEffect } from "react";

export const getData = (arg) => {
  console.log(arg)
}

const BlogFetchData = ({value}) => {
  // console.log(value)
  const [blogData, setData] = useState({name:"Hello"});

  const endpoint =
  "https://destined-vulture-28.hasura.app/v1/graphql";
const headers = {
  "Content-type": "application/json",
  "Authorization": "W5gOT9Hcoj9LfxHmiE9sMjGHgtga64nERIvuD8uAK35y14kxZpQdsKi1hGWs36uw" //HASURA_ADMIN_SECRET
};
console.log(blogData)



  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Sairam")
        const gqlQuery = {
          query: `query @cached {
            kindle_books(limit: 10, distinct_on: author) {
              author
              category_id
              category_name
            }
          }
          `,
          variables: {},
        };
        const options = {
          method: "post",
          headers: headers,
          body: JSON.stringify(gqlQuery),
        };

        const response = await fetch(endpoint, options);
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [value]);

  return <p>{blogData["name"]}</p>
};

export default BlogFetchData;
