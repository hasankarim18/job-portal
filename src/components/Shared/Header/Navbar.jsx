import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { baseURL } from "../../Loaders/Loaders";
import NavLoader from "../../utils/Loaders/NavLoader";


const Navbar = () => {
  // const [navArray, setNavArray] = useState([])
  const [navArray, setNavArray] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${baseURL}/navmenus`)
    .then(res => res.json())
    .then(data => {
      setIsLoading(false)
      setNavArray(data);
    })
    .catch(error => console.log(error))
  }, [])

  const navLinkClasses = "capitalize text-2xl font-semibold text-gray-600 hover:text-red-500 hover:underline "
  
  
    return (
      <>       
        {" "}
        {isLoading ? <NavLoader /> :
        <div className="navbar flex justify-between items-center bg-base-100">
          <div className="">
            <Link className=" normal-case h-auto text-gray-600 text-6xl hover:text-red-400  ">
              Job Portal
            </Link>
          </div>
          <div className="flex items-center justify-center ">
            <ul className="flex gap-8 mr-4 px-1">
            
              {navArray.map((item) => {             
                const {slug, name} = item.navItem
                return (
                  <li key={item._id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? ` ${navLinkClasses} text-red-400`
                          : `${navLinkClasses}`
                      }
                      to={`/${slug}`}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div>
              <Link 
               to="/login"
               className="btn ml-4 btn-sm btn-success text-white tracking-wider  ">
                Login
              </Link>
              <Link 
               to="/signup" 
               className="btn ml-4 btn-sm btn-success text-white tracking-wider  ">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
}
  <hr/>
      </>
            
    );
};

export default Navbar;