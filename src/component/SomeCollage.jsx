import useCollages from "../hooks/useCollages";
import CollageCard from "./CollageCard";


const SomeCollage = () => {
    const [collages] = useCollages();
    // console.log(collages)
    const displayedCollages = collages.slice(0, 3);
    return (
        <>
        <section className="mt-10 mb-10 pt-10 pb-10 border-b-4 border-t-4 rounded-3xl border-[#adb1ab] bg-[#E9F2E7]">
        <div className="grid grid-cols-3 gap-4 justify-center">
           {
            displayedCollages.map((collage) => <CollageCard
            key={collage._id}
            collage={collage}
            ></CollageCard>)
           }
        </div>
        </section>
        </>
    );
};

export default SomeCollage;