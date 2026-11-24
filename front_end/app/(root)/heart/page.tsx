import { BtnHeart, HeroImgSignInUp } from "@/components/";
import { AxiosServer } from "@/lib/axios-server";
import { IMovieDetail } from "@/types";
import { Metadata } from "next";
import Image from "next/image";

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

      {/* <Card_My_heart /> */}
      <>
        {hearts.length === 0 ? (
          <div className="text-7xl max-xsm:text-3xl w-full flex sm:justify-center px-5 sm:p-0 sm:w-4/5 text-white absolute top-[30%] right-1/2 translate-x-1/2">
            There are no favorite movies
          </div>
        ) : (
          <div className="flex flex-wrap h-64 flex-col gap-5 overflow-x-auto scroll-smooth absolute top-[40%] px-10">
            {hearts.map((movie: IMovieDetail) => (
              <div
                key={movie.backdrop_path}
                className="w-56 h-56 relative group"
              >
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
      </>
    </div>
  );
};

export default MyHeartPage;

// import { AxiosServer } from "@/lib/axios-server";
// import { IMovieDetail } from "@/types";
// import BtnHeart from "./BtnHeart";
// import Image from "next/image";

// const Card_My_heart = async () => {
//   const { data } = await AxiosServer("get", "heart");
//   const hearts = data?.data?.hearts || [];

//   return (
//     <>
//       {hearts.length === 0 ? (
//         <div className="text-7xl max-xsm:text-3xl w-full flex sm:justify-center px-5 sm:p-0 sm:w-4/5 text-white absolute top-[30%] right-1/2 translate-x-1/2">
//           There are no favorite movies
//         </div>
//       ) : (
//         <div className="flex flex-wrap h-64 flex-col gap-5 overflow-x-auto scroll-smooth absolute top-[40%] px-10">
//           {hearts.map((movie: IMovieDetail) => (
//             <div key={movie.backdrop_path} className="w-56 h-56 relative group">
//               {movie?.backdrop_path && (
//                 <>
//                   <Image
//                     fill
//                     src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//                     alt="backdrop_path"
//                     className="w-full h-full object-cover"
//                     unoptimized
//                   />

//                   <BtnHeart movie={movie} heartPage />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Card_My_heart;
