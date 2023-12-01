import CheckBox from '../components/CheckBox';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [list, setList] = useState({
    author: false,
    category_id: false,
    category_name: false,
    isBestSeller: false,
    isEditorsPick: false,
    isGoodReadsChoice: false,
    isKindleUnlimited: false
  });

  const handleCheck = (key) => {
    // const res = await setList((prevList) => ({ ...prevList, [key]: !prevList[key] }));
    const res = setList((prevList) => ({...prevList, [key]: !prevList[key]}));
    
  };

  const gqlQuery = {
    query: `
      query @cached {
        kindle_books(where: { price: { _in: ["5.00", "9.99"] } }) {
          asin
          imgUrl
          price
        }
      }
    `,
    variables: {},
  };
  useEffect(() => {
    console.log(list)
  }, [list])

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
