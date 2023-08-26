"use client";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section id="contact" className="flex flex-col items-center w-full py-10">
      <h1 className="font-bold text-4xl pb-5">Contact me</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2 max-w-sm w-full"
      >
        <input
          className="block w-full border rounded-lg p-3 text-xl"
          type="text"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        <input
          className="block w-full border rounded-lg p-3 text-xl"
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <textarea
          className="block w-full border rounded-lg min-h-[100px] max-h-[200px] p-3 text-xl"
          type="text"
          placeholder="Comments"
          {...register("Comments", { required: true })}
        />
        <div className="text-white flex justify-center items-center cursor-pointer border rounded-lg bg-blue-600 hover:bg-blue-700 w-[150px] h-[50px] transition duration-500 ease-in-out">
          <input type="submit" className="text-white text-2xl" />
        </div>
        <p>Form doesn't work now.</p>
      </form>
    </section>
  );
}
