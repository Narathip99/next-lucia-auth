"use server";

import { z } from "zod";
import { signUpSchema } from "./SignUpForm";
import clsx from "clsx";

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  try {
    console.log("sign up",values);
    /* // if user already exists, throw an error
    const existingUser = await prisma.user.findUnique({
      where: {
        email: values.email,
      },
    }); */
  } catch (error) {}
};
