import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("https://real-estate-app-4rfh.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen">
      <div className="lg:w-1/2 bg-white p-3">
        <div className="max-w-lg mx-auto h-full flex flex-col justify-center">
          <h1 className="text-4xl text-left font-semibold my-7 text-[#2e1460]">
            Sign In{" "}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
           
            <input
              type="email"
              placeholder="email"
              className="border p-3 rounded-lg focus:outline-none focus:border-green-700"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="border p-3 rounded-lg focus:outline-none focus:border-green-700"
              id="password"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-[#156b6a] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading.." : "Sign In"}
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Dont have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-700 ">Sign up</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </div>

      <div className="lg:w-1/2">
        <img
          src="/signup-bg.jpg"
          alt="Signup Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
