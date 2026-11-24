import { Loader_icon } from "@/public/assets";
import Image from "next/image";

const Loader = () => (
  <Image src={Loader_icon} alt="loading" width={22} height={22} unoptimized />
);

export default Loader;
