"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  username: z.string().min(1, "Please enter your username"),
  password: z.string().min(1, "Please enter your password"),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Ambil data dari JSON lokal
    const res = await fetch("/json/user.json");
    const users = await res.json();
    console.log(users);
    const user = users.find((u: any) => u.username === data.username);

    if (user) {
      console.log("User ditemukan:", user);
      router.push("/"); // Redirect
    } else {
      console.error("User tidak ditemukan.");
    }
    router.push("/");
  };
  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-50">
      <div className="w-[400px] h-[376px] rounded-[12px] bg-white px-4 py-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[16px] text-[#111827] font-medium">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            placeholder="Input username"
            className="w-[368px] h-10 border border-[#E2E8F0] bg-white rounded-md px-3 py-2 outline-none focus:ring-blue-500 placeholder:text-[#6B7280] text-[#0F172A] text-sm"
          />
          {errors.username && (
            <p className="text-red-600 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[16px] text-[#111827] font-medium">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Input password"
            className="w-[368px] h-10 border border-[#E2E8F0] bg-white rounded-md px-3 py-2 outline-none focus:ring-blue-500 placeholder:text-[#6B7280] text-[#0F172A] text-sm"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className="w-[368px] h-10 rounded-md px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Login
        </button>

        <div className="flex items-center justify-center text-[#475569] gap-1 text-sm">
          Don’t have an account?&nbsp;
          <Link className="text-sm text-[#2563EB]" href="/user/auth/register">
            register
          </Link>
        </div>
      </div>
    </div>
  );
}
