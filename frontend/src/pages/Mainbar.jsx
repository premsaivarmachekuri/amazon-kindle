import { useState, useEffect } from "react";
import Blog from "../components/Blog";

    const Mainbar = ({ blogsData }) => {
        // console.log(blogsData);
      
        return (
          <div className="w-full text-center">
            <h1 className="text-2xl font-bold">This is Mainbar</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {blogsData ? blogsData['kindle_books'].map(blog => <Blog data={blog} />) : ''}
            </div>
          </div>
        );
      };
      
      export default Mainbar;
      