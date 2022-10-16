import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom';

function AppLayout() {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }
  
  export default  AppLayout;
  