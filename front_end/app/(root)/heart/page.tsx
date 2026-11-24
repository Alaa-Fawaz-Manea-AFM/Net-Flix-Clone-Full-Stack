import { BtnHeart, HeroImgSignInUp } from "@/components/";
import { AxiosServer } from "@/lib/axios-server";
import { IMovieDetail } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "heart",
  description:
    "شاهد الأفلام، الأفلام عبر الإنترنت، شاهد التلفزيون، التلفزيون عبر الإنترنت، عروض تلفزيونية عبر الأنترنت، شاهد العروض التلفزيونية، بث الأفلام، بث التلفزيون، بث مباشر، متابعة عبر الإنترنت، أفلام، شاهد أفلام من مصر، شاهد تلفزيون عبر الإنترنت، لن تحتاج للتنزيل، أفلام بوقتها الكامل",
};

const MyHeartPage = async () => {
  const { data } = await AxiosServer("get", "heart");
  const hearts = data?.data?.hearts || [];

  return (
    <div className="relative">
      <HeroImgSignInUp height />

      {hearts.length === 0 ? (
        <div className="absolute inset-x-0 top-[30%] flex justify-center px-5">
          <div className="flex flex-col items-center text-center gap-5 max-w-lg">
            <div className="w-24 h-24 rounded-full bg-red-600/10 flex items-center justify-center">
              <span className="text-6xl text-red-600">♡</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Your List Is Empty
              </h2>

              <p className="text-gray-400 text-base sm:text-lg">
                You haven&apos;t added any movies to your favorites yet. Explore
                movies and save the ones you love!
              </p>
            </div>

            <Link
              href="/"
              className="bg-red-600 hover:bg-red-700 transition-colors px-8 py-3 rounded-md text-white font-semibold"
            >
              Explore Movies
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap h-64 flex-col gap-5 overflow-x-auto scroll-smooth absolute top-[40%] px-10">
          {hearts.map((movie: IMovieDetail) => (
            <div key={movie.backdrop_path} className="w-56 h-56 relative group">
              {movie?.backdrop_path && (
                <>
                  <Image
                    fill
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="backdrop_path"
                    className="w-full h-full object-cover"
                    unoptimized
                  />

                  <BtnHeart movie={movie} heartPage />
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyHeartPage;
