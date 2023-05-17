

const RecentJobs = ({ recentJobs }) => {
    console.log(recentJobs);
  return (
    <div>
      <h2 className="text-3xl font-bold my-4">Recent Jobs</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 md:gap-8 ">
        {recentJobs.map((item) => {
          const { job_title, location, salary } = item;
          return (
            <div
              key={item._id}
              className="card w-full bg-base-100  border border-1 "
            >
              <div className="card-body">
                <h2 className="card-title">
                  Job Title: <span className="text-red-400 font-bold">{job_title}</span>
                </h2>
                <p className="capitalize text-xl">
                  <strong>Location: </strong>{" "}
                  <span className="text-red-400"> {location} </span>
                </p>
                <p className="capitalize text-xl font-semibold">
                  Salary Range: {salary}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn w-full btn-outline btn-sm mt-4">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentJobs;