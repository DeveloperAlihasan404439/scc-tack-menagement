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
          <h1 className="text-2xl font-medium text-white">
            Total Task : {alltask.length}
          </h1>
          <Link to="/dashboard/addtask">
            <button className="dashbord tracking-[2px]">Add Task</button>
          </Link>
        </div>
        <div className="p-[1px] my-3 bg-white w-11/12 mx-auto"></div>
        <div className="w-11/12 mx-auto grid grid-cols-3 gap-5">
          <div>
            <h1 className="text-xl font-medium text-center text-white">
              Previous tasks
            </h1>
            <div className="mt-5">
              {alltask?.map((task) => (
                <div key={task._id}>
                  <div className="rounded-md shadow-md bg-white/80 mb-2">
                    <div className="flex items-center justify-between p-3">
                      <div className="flex items-center space-x-2">
                        <img
                          src={task.user_images}
                          alt=""
                          className="object-cover object-center w-8 h-8 rounded-full shadow-sm  "
                        />
                        <div className="-space-y-1">
                          <h2 className="text-sm font-semibold leadi">
                            {task.user_name}
                          </h2>
                          <span className="inline-block text-xs leadi ">
                            {task.user_email}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-black">
                      <h1 className="text-xl">{task.title}</h1>
                      <h2 className="text-lg">Priority {task.priority}</h2>
                      <h2 className="text-sm">
                        Currend Date{" : "}
                        {task.current_date}
                      </h2>
                      <h2 className="text-sm">
                        Deadline {" : "}
                        {task.deadline}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-xl font-medium text-center text-white">
              Ongoing tasks
            </h1>
            <div className="mt-5"></div>
          </div>
          <div>
            <h1 className="text-xl font-medium text-center text-white">
              Completed tasks
            </h1>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
