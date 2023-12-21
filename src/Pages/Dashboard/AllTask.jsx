import { useEffect, useState } from "react";
import useAxios from "../../Shere/Hoot/useAxios";
import { Link } from "react-router-dom";

const AllTask = () => {
  const [alltask, setAllTask] = useState([]);
  const axiosSecure = useAxios();
  useEffect(() => {
    axiosSecure.get("/alltask").then((result) => {
      setAllTask(result.data);
    });
  }, [axiosSecure]);
  console.log(alltask);
  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full">
        <h1
          className="text-center text-4xl font-medium text-white pt-10
                "
        >
          Task Management
        </h1>
        <div className="w-10/12 mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-medium text-white">
            Total Task : {alltask.length}
          </h1>
          <Link to="/dashboard/addtask">
            <button className="dashbord tracking-[2px]">Add Task</button>
          </Link>
        </div>
        <div className="p-[1px] my-3 bg-white w-11/12 mx-auto"></div>
      </div>
    </div>
  );
};

export default AllTask;
