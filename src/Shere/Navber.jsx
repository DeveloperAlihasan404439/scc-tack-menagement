import { Link } from "react-router-dom";
import Auth from "./Auth/Auth";

const Navber = () => {
  const { user,logOut } = Auth();
  return (
    <div
      className={`border-b border-[#3D8AD0] bg-gradient-to-r from-[#07163d] to-[#3D8AD0] shadow sticky top-0 left-0`}
    >
      <div className="flex items-center justify-between lg:py-3 text-white md:w-11/12 mx-auto">
        <div className="py-2  flex justify-start items-center w-[90%] lg:w-[30%]  mx-auto flex-row-reverse lg:flex-row">
          <div className="block lg:hidden ">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button text-2xl">
                  open
                </label>
              </div>
              <div className="drawer-side mt-12">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-[100%] md:w-[60%] flex-col gap-2 min-h-full bg-black text-white text-sm">
                  <li className="flex justify-center items-center w-full">
                    ghgh
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-medium tracking-[3px]">Priority Pulse</h1>
        </div>
        <div className="hidden lg:flex w-[70%]">
          <ul className="w-full flex gap-3 items-center justify-end text-lg">
            <Link to="/">Home</Link>
            <Link>Skill</Link>
            {user ? (
              <>
                <div className=" border border-[#01040a] rounded-[50%] w-[40px] h-[40px]">
                <img src={user.photoURL} title={user.email} className="w-full h-full rounded-[50%]"/>
                </div>
                <button onClick={logOut}
                  className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                >
                  Log In
                </Link>
                <Link
                  to="/signUp"
                  className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
