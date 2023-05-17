import { useRouteError } from "react-router-dom";


const Error = () => {
      const error = useRouteError();
    return (
      <div className="h-screen w-screed flex justify-center items-center">
        <div>
          <div id="error-page" className="text-center flex flex-col gap-8">
            <h1 className="text-6xl text-rose-400 font-semibold">Oops!</h1>
            <p className="text-xl font-semibold text-orange-400">Sorry, an unexpected error has occurred.</p>
            <p className="text-3xl text-red-600 font-semibold">
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Error;