import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthCreate } from "./Auth/AuthContext";

const Navber = () => {
  const {name} = useContext(AuthCreate)
  console.log(name);
  return (
    <div
      className={`border-b border-[#3D8AD0] bg-gradient-to-r from-[#07163d] to-[#3D8AD0] shadow sticky top-0 left-0`}
    >
      <div className="flex items-center justify-between lg:py-3 text-white md:w-11/12 mx-auto">
        <div className="py-2  flex justify-between items-center w-[92%] mx-auto flex-row-reverse lg:flex-row">
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
        <div className="hidden lg:flex">
          <ul className="flex gap-3 items-center text-lg">
            <Link>
              About
            </Link>
            <Link>
              Skill
            </Link>
            <Link>
              Projects
            </Link>
            <Link
              to="https://drive.google.com/file/d/125ZZ5dx_Oz4RqkutuUOMfiBe6xfv6UJu/view?usp=sharing"
              title="Show Resume"
            >
              <button className="resume px-5 py-1">
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text"> Resume</span>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
