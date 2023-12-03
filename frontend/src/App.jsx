import React, { useState, createContext, useEffect } from 'react';  // Import React and createContext
// import CheckBox from './components/CheckBox';
import FetchData from './components/FetchData'
// import { printData} from './components/FetchData'
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import Mainbar from './pages/Mainbar'

export const DataContext = createContext(null);


function App() {
  const [queryData, setQuery] = useState({
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
});
  const [blogs, setBlogs] = useState({})
  // const 
  useEffect(() => {
    console.log("App")
  },[queryData])

  return (
    <DataContext.Provider value={{ queryData, setQuery, blogs, setBlogs }}>
      {/* <CheckBox /> */}
      <Navbar />
      <FetchData getdata={queryData} />
      <Sidebar />
      <Mainbar blogsData={blogs ? blogs : null} />
      {/* <BlogFetchData  value={query} /> */}
    </DataContext.Provider>
  );
}

export default App;
