import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Marquee from "react-fast-marquee";

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
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <p className="text-2xl text-primary">Get more done</p>
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
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <p className="text-2xl text-primary">Clear your mind</p>
            <h1 className="text-5xl font-bold">
              Reach that mental clarity you’ve been longing for.
            </h1>
            <p className="py-6 text-xl">
              Your to-do lists are automatically sorted into Today, Upcoming and
              custom Filter views to help you focus on your most important
              things.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div>
          <h2 className="text-center text-3xl text-primary">
            Why Task Management?
          </h2>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/XZvBktw/images.jpg"
              className="w-full rounded-lg shadow-2xl"
            />
            <div>
              <p className="py-6 text-2xl">
                When it comes down to choosing task manager freeware, all you
                need is three things:
              </p>
              <ul className="list-disc text-2xl py-6 ps-5">
                <li>Free</li>
                <li>Easy to use</li>
                <li>Versatility</li>
              </ul>
              <p className="py-6 text-2xl">
                Coincidentally, that’s exactly what you get from Bitrix24 - a
                free online task management app that’s easy to use.
              </p>
              {!user ? (
                <Link to="/register">
                  <button className="btn btn-primary btn-md">
                    Get Started
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
      </div>
      <div className="shadow-md">
        <p className="text-2xl text-primary text-center py-6">
          Integrated with all your favorite tools
        </p>
        <Marquee>
          <img
            className="w-32 ml-7"
            src="https://i.ibb.co/C8CZsYg/mailchimp-vector-logo.png
"
            alt=""
          />
          <img
            className="w-32 ml-7"
            src="https://i.ibb.co/ZK4y5kc/microsoft-office.jpg
"
            alt=""
          />
          <img
            className="w-32 ml-7"
            src="https://i.ibb.co/127dSQT/zoom-logo-main.jpg
"
            alt=""
          />
          <img
            className="w-32 ml-7"
            src="https://i.ibb.co/RSCDZ3m/Amazon-logo.png
"
            alt=""
          />
          <img
            className="w-32 ml-7"
            src="https://i.ibb.co/0fD5B1X/google-logo.jpg
"
            alt=""
          />
          <img
            className="w-32 ml-7"
            src="https://i.ibb.co/7X7cD4k/meta-facebook-rebranding-name-news-dezeen-2364-col-hero2.jpg"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
