import { redirect } from "next/navigation";
import { getUser } from "@/lib/lucia"; // Ensure this path is correct

export const metadata = {
  title: "Redirecting...",
};

const Home = async () => {
  const user = await getUser(); // Fetch the user
  if (user) {
    redirect("/dashboard"); // Redirect if user exists
  } else {
    redirect("/authenticate"); // Redirect if no user
  }

  // Although the function will redirect and never reach this line,
  // it's good to return something as fallback.
  return <div>Redirecting...</div>;
};

export default Home;
