import AccountCard from "@/components/account-card";
import { UserButton, currentUser } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const page = async ({}) => {
  const user = await currentUser();
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen p-24 text-center">
        <AccountCard user={user} />
      </main>
    </>
  );
};

export default page;
