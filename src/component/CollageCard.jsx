const CollageCard = ({ collage }) => {
    const {_id, college_name, college_image, admission_dates, events, research_history, sports } = collage;
  
    return (
      <>
        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
          <figure className="h-64">
            <img src={college_image} alt="Shoes" />
          </figure>
          <div className="card-body">
         
         <p className="font-bold text-xl text-center">{college_name} </p>
            
         
            <hr></hr>
            <div className="flex justify-between">
              <p className="font-bold text-base">Admission Dates: </p>
              <p className="font-semibold">{admission_dates.spring}</p>
              
            </div>
              <hr></hr>
            <div className="flex justify-">
              <p className="font-bold text-base">Event</p>
             <p>
             <span className="font-semibold  capitalize">{events[2].event_name}
              </span> <br/>
               <span className="font-semibold">{events[2].date}</span>
             </p>
            </div>
                <hr></hr>
            <div className="flex justify-between">
              <p className="font-bold text-base">Research History</p>
             <p>
             <span className="font-semibold  capitalize">{research_history.research_areas[0]} </span> 
             </p>
            </div>
                <hr></hr>
                <div className="flex justify-">
              <p className="font-bold text-base">Sports</p>
             <p>
             <span className="font-semibold  capitalize">{sports.sports_teams[0]}
              </span> <br/>
               <span className="font-semibold">{sports.sports_teams[1]}</span>
             </p>
            </div>
            <hr></hr>
            <div className="card-actions ">
              <button className="btn  w-full hover:bg-[#044080] bg-[#007CFF]">View Details</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default CollageCard;
  