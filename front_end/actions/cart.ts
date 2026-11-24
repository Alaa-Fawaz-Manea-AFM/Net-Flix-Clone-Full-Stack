"use server";
import { AxiosServer } from "@/lib/axios-server";
import { IMovieDetailHeart } from "@/types";

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
  // movie: IMovieDetailHeart,
  // setHeart: Dispatch<SetStateAction<Set<IHeart>>>,
  // route: AppRouterInstance,
  // like: boolean,
  // heartPage?: boolean,
) => {
  try {
    // const body =
    //   like || heartPage
    //     ? {
    //         id: movie?.movieId || movie?.id,
    //       }
    //     : {
    //         id: movie?.id,
    //         backdrop_path: movie?.backdrop_path,
    //         title: movie?.title || movie?.name,
    //       };

    const { data } = await AxiosServer("post", "heart", body);
    return {
      liked: data.data,
      success: true,
      message: data.message,
    };
    // setHeart((pre) => {
    //   const newHeart = new Set(pre);

    //   if (data?.data) {
    //     newHeart.add(Number(movie.id));
    //   } else {
    //     newHeart.delete(Number(movie?.movieId || movie?.id));
    //   }

    //   return newHeart;
    // });

    // if (heartPage) route.refresh();
    // toast.success(data?.message || "filme Heart successfully");
  } catch {
    return {
      success: false,
      message: "Something went wrong, Please try again.",
    };
    // toast.error("Failed Toogle to My Heart");
  }
};
