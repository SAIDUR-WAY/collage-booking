import ImageGallery from "../component/ImageGallery";
import Researched from "../component/Researched";
import Review from "../component/Review";
import SomeCollage from "../component/SomeCollage";


const Home = () => {
    return (
        <>
           <SomeCollage></SomeCollage>
           <ImageGallery></ImageGallery>
           <Researched></Researched>
           <Review></Review>
        </>
    );
};

export default Home;