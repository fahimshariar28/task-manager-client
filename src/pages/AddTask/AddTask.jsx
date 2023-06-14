import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "incomplete";
    console.log(data);
    axiosSecure.post("/addTask", data).then((response) => {
      console.log(response);
      navigate("/yourtask");
      Swal.fire({
        icon: "success",
        title: "Class added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col md:flex-row">
          <input
            className="p-3 m-1 border-2 w-1/2"
            defaultValue={user.displayName}
            {...register("userName")}
            readOnly
          />
          <input
            className="p-3 m-1 border-2 w-1/2"
            defaultValue={user.email}
            {...register("email")}
            readOnly
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <input
            required
            className="p-3 m-1 border-2 w-1/2"
            placeholder="Task Title"
            {...register("taskName")}
          />
          <input
            type="date"
            {...register("date", { required: true })}
            className="p-3 m-1 border-2 w-1/2"
          />
        </div>
        <br />
        <textarea
          {...register("taskDescription", { required: true })}
          className="p-3 m-1 border-2 w-full"
          placeholder="Task Description"
        />
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddTask;
