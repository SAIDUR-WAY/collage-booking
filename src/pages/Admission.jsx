import { Link } from "react-router-dom";
import useCollages from "../hooks/useCollages";

const Admission = () => {
    const [collages] = useCollages();

    return (
        <>
           <section className="my-20">
            <div className="text-center text-gray-900 w-1/2 mx-auto pb-4">
            <h2 className="text-3xl font-bold uppercase pb-2">Admission Available Collages</h2>
            <p>There are always show in new application collages</p>
            </div>
                <div>
                    <ul className="text-center text-gray-900 font-semibold">
                {
                    
                collages?.map(collage => <li
                key={collage._id}
                className="border-b py-4 hover:bg-slate-500 hover:text-white transition-all"
                ><Link to="/studentAdmission">{collage.college_name}</Link></li>)

                
                }
                </ul>
                </div>
           </section>
        </>
    );
};

export default Admission;