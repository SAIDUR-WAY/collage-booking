import React, { useEffect, useState } from 'react';

const Researched = () => {
    const [researchLink, setResearchLink] = useState()
    console.log(researchLink)
    useEffect(() => {
        fetch('https://collage-booking-server-sigma.vercel.app/research')
        .then(res => res.json())
        .then(data => setResearchLink(data))
    },[])
    return (
        <section className="mt-10 mb-10 pt-10 pb-10  border-t-4  rounded-3xl border-[#adb1ab] bg-[#E9F2E7]">
            <h3 className='text-3xl text-center pb-10 font-bold'>Research Paper Link</h3>
            <div>
                <ul className='grid grid-cols-2 gap-2 '>
                    {
                      researchLink?.map(research => <li
                      key={research._id}
                      className='underline '
                      ><a href={research.research_link} 
                      className='hover:bg-gray-200 py-2 px-4'
                      >{research.college_name}</a></li>)  
                    }
                </ul>
            </div> 
            
        </section>
    );
};

export default Researched;