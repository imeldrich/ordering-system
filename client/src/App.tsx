import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./page/Home";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
