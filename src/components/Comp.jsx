import { Contact } from "./Contact";
import { Coursedetail } from "./Coursedetail";
import { Home1 } from "./Home1";
import { Route, Routes } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";

export const Comp = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coursedetail" element={<Coursedetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2 className="not-found">Page Not Found</h2>} />
      </Routes>
    </div>
  );
};