import { useContext } from "react";
import { DataContext } from "../../../Providers/DataProvider";
import RecentJobs from "./RecentJobs";
import Banner from "./Banner";

const Home = () => {
  const { allJobs, allJobsLoading } = useContext(DataContext);

  const recentJobs = allJobs.slice(0, 12);

  return (
    <div>
      <div className="overflow-x-auto">
        {/* banner */}
        <div className="mt-8">
            <Banner />
        </div>
        {/* recent jobs */}
        <div className="mt-8">
          {!allJobsLoading ? (
            <RecentJobs recentJobs={recentJobs} />
          ) : (
            <div>Loading</div>
          )}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Home;
