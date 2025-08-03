import React from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      margin: "40px"
    }}>
      <div style={{ flex: 1 }}>
        <CourseDetails />
      </div>
      <div style={{ borderLeft: "5px solid green", borderRight: "5px solid green", flex: 1, margin: "0 30px", padding: "0 16px" }}>
        <BookDetails />
      </div>
      <div style={{ flex: 1 }}>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
