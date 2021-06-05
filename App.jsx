import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Note1 from "./Note1";
import "./styles.css";
function App(){
  return(
    <div>
      <Header />
      <Footer />
      <Note />
      <Note1 />
      <Note />
      <Note1 />

      </div>
  );
}
export default App;