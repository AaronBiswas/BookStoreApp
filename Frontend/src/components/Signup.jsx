import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
const location=useLocation();
const navigate=useNavigate();
const from= location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${API_BASE_URL}/user/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successful!"),
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error : " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="modal modal-open flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("username", { required: true })}
                />
                <br />
                {errors.username && (
                  <span className="text-sm text-red-500">
                    Please enter your name
                  </span>
                )}
              </div>
              {/*Email field*/}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Please enter the email
                  </span>
                )}
              </div>
              {/*Password field*/}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    Please enter the password
                  </span>
                )}
              </div>
              {/*Button*/}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>
                  Already Registered?
                  <button
                    to="/"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </button>
                  {""}
                </p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
