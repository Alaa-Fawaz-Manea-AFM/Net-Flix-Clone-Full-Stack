"use server";
import { AxiosServer } from "@/lib/axios-server";
import { IForm } from "@/types";
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";

export const logInAndSignUpAction = async (link: string, form: IForm) => {
  try {
    const response = await AxiosServer("post", link, undefined, form);

    await saveAuthCookies(response);

    return {
      success: true,
      data: response.data.data || null,
    };
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

const saveAuthCookies = async (response: AxiosResponse) => {
  const cookieStore = await cookies();

  response.headers["set-cookie"]?.forEach((cookie) => {
    const [pair] = cookie.split(";");
    const [name, ...value] = pair.split("=");

    if (["accessToken"].includes(name)) {
      cookieStore.set(name, value.join("="), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });
    }
  });
};

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

export const logoutAction = async () => {
  try {
    await AxiosServer("post", "auth/logout");
  } catch {
    return { success: false };
  }

  const cookieStore = await cookies();

  cookieStore.delete("accessToken");

  return { success: true };
};
