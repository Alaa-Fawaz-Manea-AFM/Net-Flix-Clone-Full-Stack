"use client";
import { useUserContext } from "@/context/MyState";
import { redirect } from "next/navigation";

const CheckAuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserContext();

  if (user !== null) redirect("/");
  return (
    <div className="mt-32 absolute max-xsm:px-5 px-16 pt-12 pb-5 bg-black flex flex-col gap-5 w-4/5 md:w-lg rounded-2xl">
      {children}
    </div>
  );
};

export default CheckAuthLayout;
