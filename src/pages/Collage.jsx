import CollageCard from "../component/CollageCard";
import useCollages from "../hooks/useCollages";

const Collage = () => {
    const [collages] = useCollages();
    console.log(collages);
    return (
        <>
                   <section className="mt-10 mb-10 pt-10 pb-10  rounded-3xl border-[#adb1ab] bg-[#E9F2E7]">
        <h3 className="text-3xl text-center font-bold pb-10 uppercase">All Collages</h3>
        <div className="grid grid-cols-3 gap-4 justify-center">
           {
            collages?.map((collage) => <CollageCard
            key={collage._id}
            collage={collage}
            ></CollageCard>)
           }
        </div>
        </section> 
        </>
    );
};

export default Collage;