import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const CollageDetails = () => {
    const collage = useLoaderData()
    
    const {_id, college_name, college_image, admission_dates, events, research_history, sports, } = collage;
    return (
        <>
        
          <div className="card card-compact w-full bg-base-100 shadow-xl mb-10">
            <figure className="h-64">
              <img src={college_image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="grid grid-cols-2 justify-between">
                <div>
                <p className="font-bold text-lg ">Collage Name</p>
              <p className="font-bold text-black text-center text-3xl"> {college_name}</p>
                </div>
                <div>
                <h3 className="font-bold text-lg">Admission Dates</h3>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(admission_dates).map(([season, date]) => (
                  <div>
                    <div className="text-black ml-36" key={season}>
                    <p className="font-bold text-gray-600 text-lg  capitalize">{season}</p> 

                    <hr></hr>

                    <p className="font-semibold">{date}</p>
                    <br/>
                  </div>
                  </div>
                ))}
              </div>
              </div>
                </div>
                <hr></hr>
                <p className="font-bold text-3xl">Event</p>
              <div className="grid grid-cols-4 gap-2 my-10">
                {events.map((even, index) => (
                    <div className="card w-full border hover:bg-slate-500 transition-all hover:shadow-slate-700 border-gray-400 bg-base-100 shadow-xl" key={index + 1}>
                    <div className="card-body">
                      <h2 className="card-title"> {even.event_name} :</h2>
                      <p>{even.date}</p>
                      <p><span className="font-bold text-gray-700">Location: </span> {even.location}</p>
                      <div className="card-actions justify-end">
                        <button className="btn hover:bg-[#024e9e] bg-[#007CFF] btn-primary w-32 rounded-tl-full">Joining Form</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                <hr></hr>
              <div>
                <h2 className="font-bold text-3xl pb-10">Research History</h2>
                <p className="text-black text-center text-3xl">Founded Year</p>
                <p className="text-black text-center text-3xl divide-y-8">{research_history.year_founded}</p>
                <hr />
                <div className="my-10">
                    <h3 className="text-black text-center text-xl pb-4" >Research Area</h3>
                    <ul className="flex justify-center text-lg text-center space-x-10">
                    {
                        research_history.research_areas.map((research, index )=> <li
                        key={index + 1}
                        
                        >{research}</li>)
                    }
                    </ul>
                    <div className="my-10">
                    <h3 className="text-black text-center text-xl pb-4" >Achievements </h3>
                    <ul className=" text-lg text-center text space-x-10">
                    {
                        research_history.achievements.map((achievement, index )=> <li
                        key={index + 1}
                        
                        >{achievement}</li>)
                    }
                    </ul>
                </div>
                </div>
                </div>
                <hr></hr>
                <div >
                    <h3 className="font-bold text-3xl pb-10">Sports Category</h3>
                    <Tabs>
    <TabList className="flex justify-center text-base uppercase my-10">
      <Tab className="hover:bg-[#007CFF] border-2 rounded px-4 mx-2 m">Sports Teams</Tab>
      <Tab className="hover:bg-[#007CFF] border-2 rounded px-4 mx-2 m">facilities</Tab>
      <Tab className="hover:bg-[#007CFF] border-2 rounded px-4 mx-2 m">sports_events</Tab>

      
    </TabList>

    <TabPanel>
      <div className="border-2 rounded h-20">
        <ul>
          {
            sports.sports_teams.map((team, index ) => <li
            key={index + 1}
            className="hover:bg-[#007CFF]  rounded px-4 mx-2 inline-flex my-2 "
            >{team}</li>)
          }
        </ul>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="border-2 rounded h-20">
        <ul>
          {
            sports.facilities.map((facilit, index) => <li
            key={index + 1}
            className="hover:bg-[#007CFF]  rounded px-4 mx-2 inline-flex my-2 "
            >{facilit}</li>)
          }
        </ul>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="flex justify-center gap-4">
        {
          sports.sports_events.map((even, index)=>
          <div className="card w-full border hover:bg-slate-500 transition-all hover:shadow-slate-700 border-gray-400 bg-base-100 shadow-xl" key={index + 1}>
          <div className="card-body">
            <h2 className="card-title"> {even.event_name} :</h2>
            <p>{even.date}</p>
            <p><span className="font-bold text-gray-700">Location: </span> {even.location}</p>
            <p><span className="font-bold text-gray-700">Discription: </span> {even.description}</p>
            <div className="card-actions justify-end">
              <button className="btn hover:bg-[#024e9e] bg-[#007CFF] btn-primary w-32 rounded-tl-full">Joining Form</button>
            </div>
          </div>
        </div>
          )
        }
      </div>
    </TabPanel>
  </Tabs>
                </div>
            </div>
          </div>
        </>
      );
};

export default CollageDetails;