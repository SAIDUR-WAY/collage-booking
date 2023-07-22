import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NaveBar from "../shared/NaveBar";


const MainLayout = () => {
    return (
        <>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;