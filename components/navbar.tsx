import Link from "next/link";
// import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import { ModeToggle } from "./mode-toggle";
// import ProfileDropdownMenu from "./profile-menu";
import { Button } from "./ui/button";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import AuthProviders from "./auth-provider";

const font = Poppins({ weight: "600", subsets: ["latin"] });

const Navbar = async () => {
  const user = await currentUser();

  return (
    <>
      <nav className="flex items-center justify-between gap-4 px-8 py-5 border-b border-nav-border bg-primary-foreground">
        <div className="flex items-center justify-start flex-1 gap-10">
          <Link href="/">
            <h1
              className={cn(
                "flex text-xl md:text-3xl font-bold text-primary",
                font.className
              )}
            >
              Graphy
            </h1>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          {user ? (
            <>
              <UserButton afterSignOutUrl="/" />
              {/* <ProfileDropdownMenu session={session} /> */}
              <ModeToggle />
              <Link href="/create-post">
                <Button variant="ghost">Post</Button>
              </Link>
            </>
          ) : (
            <>
              <ModeToggle />
              <AuthProviders />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
