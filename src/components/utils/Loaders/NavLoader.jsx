

const NavLoader = () => {
    return (
      <div className="navbar bg-gray-100 mt-2 w-full animate-pulse">
        <div className=" w-1/4 p-4 bg-gray-200"></div>
        <div className="flex-none w-3/4 bg-gray-200 p-4 ml-4  ">
          <ul className="menu menu-horizontal px-1 bg-gray-200"></ul>
        </div>
      </div>
    );
};

export default NavLoader;