import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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

  const handleEdit = async (task) => {
    try {
      const result = await Swal.fire({
        title: "Edit Task",
        html:
          `<input id="swal-input-taskName" class="swal2-input" value="${task.taskName}" placeholder="Task Name">` +
          `<input id="swal-input-taskDescription" class="swal2-input" value="${task.taskDescription}" placeholder="Task Description">`,
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          return {
            taskName: document.getElementById("swal-input-taskName").value,
            taskDescription: document.getElementById(
              "swal-input-taskDescription"
            ).value,
          };
        },
      });

      if (result.isConfirmed) {
        const formValues = result.value;
        console.log(formValues);

        await axiosSecure.patch(`/updateTask?id=${task._id}`, formValues);
        const { data } = await axiosSecure.get("/tasks");
        setTasks(data);

        Swal.fire("Task Updated", "", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/deleteTask?id=${id}`);
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
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {tasks.map((task) => (
            <div key={task._id} className="card  bg-base-200 ">
              <div className="card-body">
                <h2 className="card-title">{task.taskName}</h2>
                <p>{task.taskDescription}</p>
                <p>{task.date}</p>
                {task.status === "incomplete" ? (
                  <p className="text-red-600">Incomplete</p>
                ) : (
                  <p className="text-primary">Complete</p>
                )}
                <div className="card-actions flex ">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-error text-white"
                  >
                    Delete
                  </button>
                  {task.status === "incomplete" && (
                    <>
                      <button
                        onClick={() => handleEdit(task)}
                        className="btn btn-warning text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleComplete(task._id)}
                        className="btn btn-primary"
                      >
                        Mark as Complete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="text-2xl text-center">
            No Tasks, Go to{" "}
            <Link to="/addtask" className="text-primary">
              Add task
            </Link>
          </h2>
        </div>
      )}
    </div>
  );
};

export default YourTask;
