import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstaHomePage from "../Components/Pages/InstaHomePage";
import InstaLoginPage from "../Components/Pages/InstaLoginPage";
import SavedPosts from "../Components/Save/SavedPosts";


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<InstaLoginPage />} />
          <Route path="/home" element={<InstaHomePage />} />
          <Route path="/save" element={<SavedPosts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
