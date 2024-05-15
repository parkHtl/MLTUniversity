'use client';
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <section className="relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
            <h2 className="text-3xl font-semibold md:text-5xl">
              Keep In Touch, We Want To Hear From You - Send Us Message
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
              Become the first choice in seat of learning which shall embrace the human development.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mb-4 rounded-3xl border border-solid border-black bg-white px-4 py-10 [box-shadow:rgb(0,_0,_0)_9px_9px] sm:px-8 sm:py-16 md:px-20"
            >
              <div className="mb-4 grid w-full grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="first-name" className="mb-1 font-semibold">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className={`block h-9 w-full rounded-md border border-solid p-2 text-sm focus:outline-0 ${
                      errors.firstName ? 'border-red-500' : 'border-black'
                    }`}
                    {...register("firstName", { required: "First name is required" })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="last-name" className="mb-1 font-medium">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className={`block h-9 w-full rounded-md border border-solid p-2 text-sm focus:outline-0 ${
                      errors.lastName ? 'border-red-500' : 'border-black'
                    }`}
                    {...register("lastName", { required: "Last name is required" })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-4 grid w-full grid-cols-2 gap-6">
                <div className="relative mb-4">
                  <label htmlFor="phone" className="mb-1 font-medium">Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    className={`block h-9 w-full rounded-md border border-solid p-2 text-sm focus:outline-0 ${
                      errors.phone ? 'border-red-500' : 'border-black'
                    }`}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`block h-9 w-full rounded-md border border-solid p-2 text-sm focus:outline-0 ${
                      errors.email ? 'border-red-500' : 'border-black'
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="relative mb-5 md:mb-6 lg:mb-8">
                <label htmlFor="message" className="mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  maxLength="5000"
                  className={`min-h-[120px] w-full rounded-md border border-solid p-2 text-sm focus:outline-0 ${
                    errors.message ? 'border-red-500' : 'border-black'
                  }`}
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>
              <label className="flex pb-4 pl-5 font-medium">
                <input
                  type="checkbox"
                  name="checkbox-2"
                  className="float-left -ml-[20px] mt-1"
                  {...register("privacyPolicy", { required: "You must agree to the privacy policy" })}
                />
                <span className="ml-4 inline-block cursor-pointer text-sm font-normal">
                  By selecting this, you agree to the
                  <a href="#" className="font-bold text-[#1353fe]"> Privacy Policy</a>
                </span>
              </label>
              {errors.privacyPolicy && (
                <p className="text-red-500 text-xs mt-1">{errors.privacyPolicy.message}</p>
              )}
              <input
                type="submit"
                value="Submit"
                className="inline-block w-full cursor-pointer rounded-xl bg-black px-8 py-4 text-center font-semibold text-white no-underline [box-shadow:rgb(19,_83,_254)_6px_6px]"
              />
            </form>
          </div>
        </div>
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976df71dd20857114e6dd_Frame%20427322429.svg"
          alt=""
          className="absolute bottom-auto left-0 right-0 top-0 -z-10 inline-block w-full"
        />
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976df71dd20857114e6dd_Frame%20427322429.svg"
          alt=""
          className="absolute bottom-0 left-0 right-0 top-auto -z-30 inline-block w-full"
        />
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976de093252d906117e82_Ornament%2049.svg"
          alt=""
          className="absolute bottom-0 left-[5%] right-auto top-auto -z-30 hidden md:inline-block"
        />
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639976de093252d906117e82_Ornament%2049.svg"
          alt=""
          className="absolute bottom-auto left-auto right-[5%] top-0 -z-30 hidden md:inline-block"
        />
      </section>
    </div>
  );
}
