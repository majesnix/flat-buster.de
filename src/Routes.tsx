import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Pictures from "./views/Pictures";
import Videos from "./views/Videos";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/images" element={<Pictures />} />
    <Route path="/videos" element={<Videos />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
