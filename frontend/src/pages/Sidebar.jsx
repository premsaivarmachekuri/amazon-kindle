import CheckBox from '../components/CheckBox';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../App';

const Sidebar = () => {
  // Make sure DataContext is imported correctly
  const { queryData, setQuery } = useContext(DataContext);

  const [list, setList] = useState({
    // author: true,
    category_id: false,
    category_name: false,
    isBestSeller: false,
    isEditorsPick: false,
    isGoodReadsChoice: false,
    isKindleUnlimited: false
  });

  const handleCheck = (key) => {
    setList((prevList) => ({ ...prevList, [key]: !prevList[key] }));
  };

  useEffect(() => {
    const newQuery = Object.keys(list).filter(key => list[key]);
    // const gqlQuery = {
    //   "query": `
    //     query @cached {
    //       kindle_books(where: { price: { _in: ["5.00", "9.99"] } }) {
    //         author
    //         price
    //       }
    //     }
    //   `,
    //   "variables": {},
    // };
    const gqlQuery = {
      "query": `query @cached {
          kindle_books(where: { price: { _in: ["5.00", "9.99"] } }, limit: 10) {
            author
            asin
            category_id
            category_name
            imgUrl
            isBestSeller
            isEditorsPick
            isGoodReadsChoice
            isKindleUnlimited
            price
            productURL
            publishedDate
            reviews
            soldBy
            stars
            title
          }
        }`,
      "variables": {}
  };

    // console.log(gqlQuery)
    setQuery(gqlQuery);

  }, [list, setQuery]); // Include setQuery in the dependency array

  return (
    <div>
      <h1 className='text-2xl font-bold'>Hello</h1>
      {Object.entries(list).map(([key, value]) => (
        <CheckBox key={key} label={key} checked={value} onChange={() => handleCheck(key)} />
      ))}
    </div>
  );
};

export default Sidebar;
