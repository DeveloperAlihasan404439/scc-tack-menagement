import { useEffect, useState } from "react";
import useAxios from "../../Shere/Hoot/useAxios";
import { Link } from "react-router-dom";
import DragDndDrop from "../../companent/DragDndDrop";
import { useDrop } from "react-dnd";
import Auth from "../../Shere/Auth/Auth";

const AllTask = () => {

  const [alltask, setAllTask] = useState([]);
  const [team, setTeam] = useState([]);
  const axiosSecure = useAxios();
  const {user} = Auth()
  useEffect(() => {
    axiosSecure.get(`/alltask?email=${user?.email}`).then((result) => {
      setAllTask(result.data);
    });
  }, [axiosSecure,user]);
//   drag and  drop 

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  console.log(isOver);
  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
console.log(isPlayerOver);
  const movePlayerToTeam = (item) => {
    console.log(item);
    setAllTask((prev) => prev.filter((_, i) => item.index !== i));
    setTeam((prev) => [...prev, item]);
  };
  const removePlayerFromTeam = (item) => {
    setTeam((prev) => prev.filter((_, i) => item.index !== i));
    setAllTask((prev) => [...prev, item]);
  };

  return (
    <div
      className="w-full bg-scroll h-full"
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
        <div className="w-10/12 mx-auto mt-5 flex justify-center md:justify-between items-center flex-wrap">
          <h1 className="text-2xl font-medium text-white">
          Previous Task : {alltask.length}
          </h1>
          {
            team.length?<h1 className="text-2xl font-medium text-white">
            Ongoing Task : {team.length}
            </h1>:""
          }
          
          <Link to="/dashboard/addtask">
            <button className="dashbord tracking-[2px]">Add Task</button>
          </Link>
        </div>
        <div className="p-[1px] my-3 bg-white w-11/12 mx-auto"></div>
        <div className="w-11/12 mx-auto md:grid grid-cols-3 gap-5">
          <div>
            <h1 className="text-xl font-medium text-center text-white">
              Previous tasks
            </h1>
            <div className="mt-5" 
            ref={removeFromTeamRef}>
              {alltask?.map((task, i) => (
                <DragDndDrop 
                item={task}
                key={i}
                playerType="player"
                onDropPlayer={movePlayerToTeam}
                index={i}/>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-xl font-medium text-center text-white">
              Ongoing tasks
            </h1>
            <div className="mt-5" ref={addToTeamRef}>
            {team?.map((task, i) => (
                <DragDndDrop 
                item={task}
                key={i}
                index={i}
                playerType="team"
                onDropPlayer={removePlayerFromTeam}/>
              ))}
            </div>
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
