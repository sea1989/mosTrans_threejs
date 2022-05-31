import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import PageLand from "./pages/page_land";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLand />} />
        {/* <Route path="/reg" element={<PageReg />} />
        <Route path="/land" element={<PageLand />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
