import React from "react";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" flex justify-center items-center dark:bg-black dark:text-white">
        <div className="mt-28">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-semibold text-4xl">Contact Us</h1>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  Please enter your name
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
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
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <fieldset className="fieldset">
                <textarea
                  placeholder="Enter your name"
                  className="w-80 h-20 px-3 py-1 border rounded-md outline-none"
                  {...register("message", { required: true })}
                ></textarea>
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Please enter your query
                  </span>
                )}
              </fieldset>
            </div>
            <button
              className="mt-2 bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
