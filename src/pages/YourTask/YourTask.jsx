import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const YourTask = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTask = async () => {
      try {
        const { data } = await axiosSecure.get("/tasks");
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTask();
  }, [user, axiosSecure]);

  const handleComplete = async (id) => {
    try {
      await axiosSecure.patch(`/completeTask?id=${id}`);
      const { data } = await axiosSecure.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl text-center">Your Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {tasks.map((task) => (
          <div key={task._id} className="card  bg-base-200 ">
            <div className="card-body">
              <h2 className="card-title">{task.taskName}</h2>
              <p>{task.taskDescription}</p>
              <div className="card-actions justify-end">
                {task.status === "incomplete" ? (
                  <p className="text-red-600">Incomplete</p>
                ) : (
                  <p className="text-primary">Complete</p>
                )}
                {task.status === "incomplete" && (
                  <button
                    onClick={() => handleComplete(task._id)}
                    className="btn btn-primary"
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourTask;
