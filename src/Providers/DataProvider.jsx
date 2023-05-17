import { createContext, useEffect, useState } from "react";
import { baseURL } from "../components/Loaders/Loaders";

export const DataContext = createContext()

const DataProvider = ({children}) => {
    const [allJobs, setAllJobs] = useState([])
    const [allJobsLoading, setAllJobsLoading] = useState(true)


    const loadAllJobs = ()=> {
      fetch(`${baseURL}/alljobs`)
      .then(res=> res.json())
      .then(data => {
        setAllJobs(data)
        setAllJobsLoading(false)
      })
      .catch(error => {
        console.log(error);
        setAllJobsLoading(false)
      })
    }


    useEffect(() => {
       loadAllJobs();   
        
    }, [])
    

   


    const data = {
      allJobs,
      allJobsLoading
    }

    return (
      <>
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      </>
    );
};

export default DataProvider;