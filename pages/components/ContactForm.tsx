"use client";

import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast"; // updated code

type FormInput = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  /**
   * The function sends a POST request to a server with form data and displays a success notification.
   * @param {FormInput} formData - The formData parameter is an object that contains the input values
   * from the form.
   */
  async function onSubmit(formData: FormInput) {
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    }).then(() => {
      // Toast notification
      toast.success("Your email message has been sent successfully");
    });

    reset();
  }

  return (
    <div className="">
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 mt-5 flex w-full flex-col rounded-md bg-transparent"
      >
        <input
          className="mt-4 bg-transparent border-[2.5px] focus:transition-all duration-1000 ease-in-out placeholder:text-primary_dark mb-3 h-14 block w-full rounded-md border-tertiary px-3 text-primary_dark focus:text-primary_dark outline-none focus:border-accent focus:outline-none md:mb-0"
          type="text"
          placeholder="Name"
          required
          {...register("name")}
        />
        <input
          className="mt-4 mb-3 h-14 block w-full rounded-md border-tertiary border-[2.5px] focus:transition-all duration-1000 ease-in-out bg-transparent placeholder:text-tertiary px-3 text-gray-600 outline-none focus:border-accent focus:outline-none md:mb-0"
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <textarea
          className="mt-4 mb-5 py-2 block w-full rounded-md border-tertiary border-[2.5px] bg-transparent px-3 text-gray-600 placeholder:text-primary_dark outline-none focus:transition-all duration-1000 ease-in-out focus:border-accent focus:outline-none md:mb-0"
          placeholder="Message for me"
          rows={6}
          required
          {...register("message")}
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-tertiary px-6 py-3 hover:drop-shadow-xl text-primary hover:text-accent transition duration-500 ease-in-out disabled:bg-primary_dark block-primary rounded-md cursor-pointer text-primary-50 mt-4 font-bold"
        >
          Send it 🚀
        </button>
      </form>
    </div>
  );
}
