import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import LoadingWraper from "./components/LoadingWrapper";
import useNotification from "antd/es/notification/useNotification";
const Home = lazy(() => import("./components/Home"));
const PostOffice = lazy(() => import("./components/PostOffices"));

function App() {
  const contextholder = useNotification()[1];

  return (
    <div className="App">
      <contextholder />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LoadingWraper Component={Home} />} />
          <Route
            path="post-office"
            element={<LoadingWraper Component={PostOffice} />}
          />
          <Route
            path="/PostOffice"
            element={<LoadingWraper Component={PostOffice} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
