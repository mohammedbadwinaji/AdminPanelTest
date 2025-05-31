import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Navigate to={"/dashboard"} />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="products" element={<DashBoard />} />
          <Route path="customers" element={<DashBoard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
