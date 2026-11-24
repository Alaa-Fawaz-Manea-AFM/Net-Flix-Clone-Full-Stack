import axios from "axios";
import { cookies } from "next/headers";
// import { DOMAIN } from "./axios-client";
const DOMAIN: string = `${process.env.NEXT_PUBLIC_API_URL}`;

export const AxiosServer = async (
  method: "get" | "post" | "delete" | "patch" | "put",
  url: string,
  query?: Record<string, unknown>,
  data?: unknown,
) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const cookieHeader = [accessToken ? `accessToken=${accessToken}` : null]
    .filter(Boolean)
    .join("; ");

  // .getAll()
  //   .map((c) => `${c.name}=${c.value}`)
  //   .join("; ");

  return axios({
    method,
    url: `${DOMAIN}${url}`,
    data,
    params: query,
    headers: {
      Cookie: cookieHeader,
    },
  });
};
