import React, { useState, createContext, useEffect } from 'react';  // Import React and createContext
// import CheckBox from './components/CheckBox';
// import BlogFetchData from './components/FetchData'
import { printData} from './components/FetchData'
import Sidebar from './pages/Sidebar';
export const DataContext = createContext(null);


function App() {
  const [query, setQuery] = useState(`query @cached {
    kindle_books(limit: 10, distinct_on: author) {
      author
    }
  }`);
  // const 
  useEffect(() => {
    printData("Hello")
  },[query])

  return (
    <DataContext.Provider value={{ query, setQuery }}>
      {/* <CheckBox /> */}
      <Sidebar />
      {/* <BlogFetchData  value={query} /> */}
    </DataContext.Provider>
  );
}

export default App;
