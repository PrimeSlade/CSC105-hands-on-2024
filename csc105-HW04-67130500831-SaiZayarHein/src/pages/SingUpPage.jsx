import { NavLink } from "react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

const SignUpPage = () => {
  const userSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      console.log(data);
      alert("Both Passwords must be the same");
      return;
    } else {
      console.log("Form data:", data);
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm w-full p-6 bg-white shadow-lg rounded-2xl"
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
