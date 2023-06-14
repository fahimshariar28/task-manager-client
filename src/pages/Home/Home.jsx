import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/6DftRB2/1-Svz-Kct-RCi8bw-B0-QPd-OZk-BP0p-Rhs-Oq-Zpl0wjs6y0.png')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="mb-5 text-5xl font-bold">
              Organize your <br /> work and life, finally.
            </h2>
            {!user ? (
              <Link to="/register">
                <button className="btn btn-primary btn-md">
                  Start for Free
                </button>
              </Link>
            ) : (
              <Link to="/yourtask">
                <button className="btn btn-primary btn-md">Your Task</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/k8mFc5c/task-management-tile-To-Do-0.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p>Get more done</p>
            <h1 className="text-5xl font-bold">
              Add your tasks. <br />
              Organize your life. <br /> Achieve more every day.
            </h1>
            <p className="py-6 text-xl">
              Add tasks like “Read work emails every day at 10am” to fill your
              to-do list in seconds using Todoist’s powerful natural language
              recognition and recurring dates.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/Vm60SSv/4-communication-woes-pm-can-solve-blog.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p>Clear your mind</p>
            <h1 className="text-5xl font-bold">
              Reach that mental clarity
              <br /> you’ve been longing for.
            </h1>
            <p className="py-6 text-xl">
              Your to-do lists are automatically sorted into Today, Upcoming and
              custom Filter views to help you focus on your most important
              things.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
