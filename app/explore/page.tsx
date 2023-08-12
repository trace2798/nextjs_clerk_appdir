import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div>Fetch all post here by the user here</div>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default page;
