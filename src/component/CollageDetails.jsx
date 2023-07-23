

const CollageDetails = ({}) => {
    return (
        <>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-64">
              <img src={college_image} alt="Shoes" />
            </figure>
            <div className="card-body">
            <p className="font-bold text-base">Collage Name</p>
              <p className="text-black ml-36"> {college_name}</p>
              <hr></hr>
              <div className="">
                <p className="font-bold text-base">Admission Dates</p>
                {Object.entries(admission_dates).map(([season, date]) => (
                  <p className="text-black ml-36" key={season}>
                    <span className="font-semibold  capitalize">{season} :</span> <span className="font-semibold">{date}</span>
                    <br/>
                  </p>
                ))}
                <hr></hr>
              </div>
              <div className="">
                <p className="font-bold text-base">Event</p>
                {events.map((even, index) => (
                  <p className="text-black ml-36" key={index + 1}>
                    <span className="font-semibold  capitalize">{even.event_name} :</span> <span className="font-semibold">{even.date}</span>
                    <br/>
                  </p>
                ))}
                <hr></hr>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      );
};

export default CollageDetails;