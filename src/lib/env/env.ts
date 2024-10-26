"use server";

export const getEnv = async () => ({
  NEXT_PUBLIC_MSG: process.env.NEXT_PUBLIC_MSG,
});
