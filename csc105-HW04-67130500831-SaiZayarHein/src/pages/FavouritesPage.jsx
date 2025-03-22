import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

const FavouritesPage = () => {
  const favourite = z.object({
    num: z.number().min(1, "Select either 'love' or 'like'").max(100),
    fav: z.enum(["love", "like"], {
      errorMap: () => ({ message: "Select either 'love' or 'like'" }),
    }),
    size: z.enum(["small", "medium", "large"], {
      errorMap: () => ({ message: "Select a valid size" }),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(favourite),
    defaultValues: {
      num: 0,
      fav: "",
      size: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { num, fav, size } = data;
    navigate(`/fav/${num}?q=${fav}&size=${size}`);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-r from-blue-100 to-blue-300">
        <form
          action="submit"
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 bg-white rounded-2xl shadow-md space-y-4"
        >
          <label className="block text-gray-700 font-semibold">Number:</label>
          <input
            type="number"
            {...register("num", { valueAsNumber: true })}
            placeholder="Enter a number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.num && (
            <p className="text-red-500 text-sm">{errors.num.message}</p>
          )}

          <label className="block text-gray-700 font-semibold">Q:</label>
          <select
            name=""
            id=""
            {...register("fav")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="love">love</option>
            <option value="like">like</option>
          </select>
          {errors.fav && (
            <p className="text-red-500 text-sm">{errors.fav.message}</p>
          )}

          <label className="block text-gray-700 font-semibold">Size:</label>
          <select
            name=""
            id=""
            {...register("size")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
          {errors.size && (
            <p className="text-red-500 text-sm">{errors.size.message}</p>
          )}

          <button className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FavouritesPage;
