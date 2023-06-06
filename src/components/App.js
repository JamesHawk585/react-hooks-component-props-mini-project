import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* <Header name= /> */}
      <Header name={blogData.name} />
    </div>
  );
}

export default App;
