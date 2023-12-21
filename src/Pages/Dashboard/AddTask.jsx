import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Auth from "../../Shere/Auth/Auth";
import useAxios from "../../Shere/Hoot/useAxios";
import Swal from "sweetalert2";
const AddTask = () => {
  const { user } = Auth();
  const axiosSecure = useAxios()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const tastData = {
      title: data.title,
      current_date: data.current,
      priority: data.pricrity,
      deadline: data.deadline,
      discription: data.discription,
      user_name: user.displayName,
      user_email: user.email,
      user_images: user.photoURL,
    };
    axiosSecure.post('/alltask', tastData)
    .then(result =>{
        if(result.data.insertedId){
            reset()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfull Create User",
                showConfirmButton: false,
                background: "#07163d",
                color: "white",
                timer: 2000,
              });
        }
    })
  };
  return (
    <div className="flex items-center justify-center lg:h-[100vh]">
      <div className="w-full max-w-3xl p-8 space-y-3 rounded-xl bg-base-200 ">
        <h1 className="text-2xl font-bold text-center">Add Task</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="md:flex gap-5 w-full">
            <div className="md:w-[50%] space-y-1 text-sm">
              <label htmlFor="title" className="block text-lg text-black">
                Task Title
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                id="title"
                placeholder="Task Title"
                className="w-full px-4 py-3 rounded-md    focus:"
              />
            </div>
            <div className="md:w-[50%] space-y-1 text-sm relative">
              <label htmlFor="current" className="block text-lg text-black">
                Current Data
              </label>
              <input
                {...register("current", { required: true })}
                type="date"
                id="current"
                placeholder="Current Data"
                className="w-full px-4 py-3 rounded-md    focus:"
              />
            </div>
          </div>
          <div className="md:flex gap-5 w-full">
            <div className="md:w-[50%] space-y-1 text-sm">
              <label htmlFor="pricrity" className="block text-lg text-black">
                Priority
              </label>
              <select
                {...register("pricrity", { required: true })}
                id="pricrity"
                className="w-full px-4 py-3 rounded-md    focus:"
              >
                <option>Select Task Priority</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="md:w-[50%] space-y-1 text-sm relative">
              <label htmlFor="deadline" className="block text-lg text-black">
                Deatline
              </label>
              <input
                {...register("deadline", { required: true })}
                type="date"
                id="deadline"
                placeholder="Deadline"
                className="w-full px-4 py-3 rounded-md    focus:"
              />
            </div>
          </div>
          <div className=" space-y-1 text-sm relative">
            <label htmlFor="discription" className="block text-lg text-black">
              Task Discription
            </label>
            <textarea
              cols="15"
              rows="5"
              {...register("discription", { required: true })}
              type="text"
              id="discription"
              placeholder="Task Discription"
              className="w-full px-4 py-3 rounded-md    focus:"
            />
          </div>
          <input
            type="submit"
            className="block w-full p-2 text-center bg-[#06213a] hover:bg-[#07163d] text-white rounded "
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
