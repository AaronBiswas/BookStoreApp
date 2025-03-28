import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
import API_BASE_URL from "../config";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    await axios.post(`${API_BASE_URL}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if(res.data) {
          toast.success("Welcome!")
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users",JSON.stringify(res.data.user));
          }, 2000);
        }
      }).catch((err) => {
        if(err.response) {
          console.log(err);
          toast.error("Error : "+ err.response.data.message);
        }
      })
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => window.my_modal_3.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          <h3 className="font-bold text-lg">
            Login
          </h3>
          {/*Email field*/}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input type="email" 
            placeholder="Enter Your Email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("email", { required: true })}
            />
            <br/>
            {errors.email && <span className="text-sm text-red-500">Please enter the email</span>}
          </div>
          {/*Password field*/}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input type="text" 
            placeholder="Enter Your Password"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("password", { required: true })}
            />
            <br/>
            {errors.password && <span className="text-sm text-red-500">Please enter the password</span>}
          </div>
          {/*Button*/}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
            <p>Not Registered? <Link to="/Signup" className="underline text-blue-500">Sign Up</Link>{""}</p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
