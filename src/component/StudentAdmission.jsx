import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";


const StudentAdmission = () => {
  const {user} = useContext(authContext);
  console.log(user)
    return (
        <>
    <div className="w-3/4 mx-auto my-20">
      <div className=" w-full  bg-base-200">
        <div className="card w-full  shadow-2xl bg-base-100">
            <h2 className="text-3xl font-bold text-center ">Admission Form</h2>
          <form className="card-body w-full">
            <div className="md:flex gap-x-4">
              <div className="w-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="subject"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Candidate Name</span>
                  </label>
                  <input
                    type="text"
                    name="candidateName"
                    defaultValue={user?.displayName}
                    placeholder="Candidate Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
          <div>
          {/* <div className="form-control w-full max-w-xs">
  <label className="label">
     Class Image
  </label>
  <input type="file" name='imageUrl'  className="file-input file-input-bordered w-full max-w-xs" />
  <label className="label">
  </label>

</div> */}
          <div className="form-control">
              <label className="label">
                <span className="label-text">Date Of Birth</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                defaultValue={user?.email}
                placeholder="Date Of Barth"
                className="input input-bordered"
              />
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Candidate Email</span>
              </label>
              <input
                type="email"
                name="CandidateEmail"
                defaultValue={user?.email}
                placeholder="Candidate Email"
                className="input input-bordered"
              />
            </div>
          </div>

            </div>
            <div className="md:flex gap-x-4">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Phone number</span>
                </label>
                <input
                  type="text"
                  name="phonenumber"
    
                  placeholder="Phone number"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full  md:w-1/2">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-black text-red-700">Add button</button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </>
    );
};

export default StudentAdmission;