"use client";
import {
  Dispatch,
  useState,
  useEffect,
  createContext,
  SetStateAction,
  useContext,
  useMemo,
} from "react";
import { IHeart, IUser } from "@/types";
import { getUserDataAction } from "@/actions/auth";

interface IValue {
  user: IUser | null;
  heart: Set<IHeart>;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setHeart: Dispatch<SetStateAction<Set<IHeart>>>;
}

const MyContext = createContext<IValue | null>(null);

export const useUserContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useUserContext must be used within MyState");
  }

  return context;
};

const MyState = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [heart, setHeart] = useState<Set<IHeart>>(new Set());
  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUserDataAction();
      if (!result.success) return setUser(null);
      setUser(result.data.user || []);
      setHeart(new Set(result.data.hearts) || new Set());
    };

    fetchUser();
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      heart,
      setHeart,
    }),
    [user, heart],
  );
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyState;
