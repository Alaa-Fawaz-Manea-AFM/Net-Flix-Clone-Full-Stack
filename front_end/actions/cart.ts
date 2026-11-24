"use server";
import { AxiosServer } from "@/lib/axios-server";

export const getUserDataAction = async () => {
  try {
    const { data } = await AxiosServer("get", "auth/me");
    return {
      success: true,
      data: data?.data,
    };
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

export const ToogleHeartAction = async (
  body:
    | {
        id: string;
      }
    | {
        id: string;
        backdrop_path: string;
        title: string;
      },
) => {
  try {
    const { data } = await AxiosServer("post", "heart", undefined, body);
    return {
      liked: data.data,
      success: true,
      message: data.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong, Please try again later",
    };
  }
};
