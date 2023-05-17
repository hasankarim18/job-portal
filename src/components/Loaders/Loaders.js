// import axios from "axios";


// const loadPrimaryData = ()=> {
    
// }

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000",
  
// });

export const  baseURL= "http://localhost:5000";

const getInitialData = ()=> {

    let data = {}
 //   const dataError = {}
  
    // axiosInstance.get("/navmenus")
    // .then(response =>  {
    //     data.nav = response
    // })
    // .catch(error => {
    //     dataError.navmenuError = error 
    // })

    fetch(`${baseURL}/navmenus`)
    .then(res => res.json())
    .then(navData => {
        data.nav = navData 
    })

    return data 
}


export default getInitialData
