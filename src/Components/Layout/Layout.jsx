import Sidebar from "../HomePage/Sidebar";
import Rightbar from "../HomePage/Rightbar";
import Footer from "../HomePage/Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="home-container">
      <Sidebar />

      <div className="main-feed">
        {children}
        <Footer />
      </div>
      {location.pathname === "/home" && <Rightbar />}
    </div>
  );
}

export default Layout;
