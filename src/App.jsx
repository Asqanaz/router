import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SinglePostPage } from "./pages/SinglePostPage";
import { Layout } from "./сomponents/Layout";

function App() {
  const [userDatas, setUserDatas] = useState({
    login: "",
    password: "",
  });

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(userDatas));
  }, [userDatas]);

  console.log(userDatas);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/:id" element={<SinglePostPage />} />
        </Route>
        <Route
          path="/registration"
          element={
            <Register userDatas={userDatas} setUserDatas={setUserDatas} />
          }
        />
        <Route
          path="/login"
          element={<Login userDatas={userDatas} setUserDatas={setUserDatas} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
