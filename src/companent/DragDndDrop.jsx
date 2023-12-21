import { useDrag } from "react-dnd";

const DragDndDrop = ({ item, playerType, index,onDropPlayer }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: playerType,
        item: () => ({ ...item, index }),

        end: (item, monitor) => {
          const dropResult = monitor.getDropResult();
            console.log(dropResult);
          if (item) {
            onDropPlayer(item);
          }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
      console.log(isDragging);
    const {user_images,user_email,user_name,priority,title,current_date,deadline} = item
  return (
    <div className="rounded-md shadow-md bg-white/80 mb-2" ref={dragRef}>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={user_images}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm  "
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leadi">{user_name}</h2>
            <span className="inline-block text-xs leadi ">
              {user_email}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 text-black">
        <h1 className="text-xl">{title}</h1>
        <h2 className="text-lg">Priority {priority}</h2>
        <h2 className="text-sm">
          Currend Date{" : "}
          {current_date}
        </h2>
        <h2 className="text-sm">
          Deadline {" : "}
          {deadline}
        </h2>
      </div>
    </div>
  );
};

export default DragDndDrop;
