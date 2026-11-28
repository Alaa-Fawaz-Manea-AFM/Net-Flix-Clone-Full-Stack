import { CheckAuthLayout, HeroImgSignInUp } from "@/components";

const LayoutAuth = async ({ children }: { children: React.ReactNode }) => (
  <main className="flex items-center flex-col h-screen w-full select-none">
    <div className="z-[-1020] absolute">
      <HeroImgSignInUp />
    </div>
    <CheckAuthLayout>
      <div className="mt-32 absolute max-xsm:px-5 px-16 pt-12 pb-5 bg-black flex flex-col gap-5 w-4/5 md:w-lg rounded-2xl">
        {children}
      </div>
    </CheckAuthLayout>
  </main>
);

export default LayoutAuth;
