"use client";
import { useUserContext } from "@/context/MyState";
import { Heart, CheckCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { IMovieDetailHeart } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ToogleHeartAction } from "@/actions/cart";

const BtnHeart = ({
  movie,
  heartPage,
}: {
  heartPage?: boolean;
  movie: IMovieDetailHeart;
}) => {
  const { user, heart, setHeart } = useUserContext();
  const [like, setLike] = useState<boolean>(false);
  const getLike = () => setLike(heart?.has(Number(movie?.id)) || false);
  const route = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    return getLike();
  }, [heart]);

  const handleToogleHeartFun = async (movie: IMovieDetailHeart) => {
    setLoading(true);
    const body =
      like || heartPage
        ? {
            id: movie?.movieId || movie?.id,
          }
        : {
            id: movie?.id,
            backdrop_path: movie?.backdrop_path,
            title: movie?.title || movie?.name,
          };

    const result = await ToogleHeartAction(body);
    if (!result.success) {
      toast.error("Failed Toogle to My Heart");
      setLoading(false);
      return;
    }
    setHeart((pre) => {
      const newHeart = new Set(pre);

      if (result.liked) newHeart.add(Number(movie.id));
      else newHeart.delete(Number(movie?.movieId || movie?.id));
      return newHeart;
    });

    if (heartPage) route.refresh();
    toast.success(result?.message || "filme Heart successfully");
    setLoading(false);
  };

  return (
    <div
      onClick={() =>
        user
          ? handleToogleHeartFun(movie)
          : toast.error("Sorry, you must log In")
      }
      className="top-2 right-2 absolute cursor-pointer"
    >
      {heartPage ? (
        <CheckCheck
          size={30}
          strokeWidth={2}
          className={`${loading ? "opacity-50" : ""} cursor-pointer transition`}
        />
      ) : (
        <Heart
          size={30}
          fill={like ? "#ef4444" : "none"}
          strokeWidth={2}
          className={`${loading ? "opacity-50" : ""} cursor-pointer transition`}
        />
      )}
    </div>
  );
};

export default BtnHeart;
