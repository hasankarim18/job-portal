import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        {/* form start */}

        <div className="card w-full  flex-shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <form className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className=" text-xl  label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mt-6 text-xl">
              Dont have an account?{" "}
              <Link className="hover:text-rose-400" to="/signup">
                Sign up{" "}
              </Link>{" "}
            </p>
            <div>
              <div>Sign in with google</div>
            </div>
          </div>
        </div>

        {/* form end */}
      </div>
    </div>
  );
};

export default Login;
