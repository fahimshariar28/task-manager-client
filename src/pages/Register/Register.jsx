import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    const name = data.name;
    const email = data.email;
    const photoUrl = data.photoUrl;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUserProfile(name, photoUrl).then(() => {
          const savedUser = { name, email, image: photoUrl };
          fetch("http://localhost:5000/adduser", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              navigate("/");
              Swal.fire({
                icon: "success",
                title: "Registration successful",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-3/5 mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            {...register("photoUrl", { required: true })}
            type="text"
            placeholder="Your Photo Url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            type="password"
            placeholder="********"
            className="input input-bordered"
          />
          <label className="label">
            {errors.exampleRequired && <span>This field is required</span>}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>{" "}
      <p className="p-5 text-center">
        Already Have an Account? <Link to="/login">Login</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
