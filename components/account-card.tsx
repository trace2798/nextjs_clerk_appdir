"use client";
import { cn } from "@/lib/utils";
import { User } from "@clerk/nextjs/server";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { FC } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface AccountCardProps {
  user: User | null;
}

const AccountCard: FC<AccountCardProps> = (user) => {
  return (
    <>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Information</CardTitle>
          <CardDescription>Your information</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center p-4 space-x-4 border rounded-md ">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">First Name</p>
              <p className="text-sm text-muted-foreground">
                {user?.user?.firstName}
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 space-x-4 border rounded-md ">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Last Name</p>
              <p className="text-sm text-muted-foreground">
                {user?.user?.lastName}
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 space-x-4 border rounded-md ">
            <div className="flex-1 space-y-1">
              <Avatar>
                <AvatarImage src={user?.user?.imageUrl} />
              </Avatar>
            </div>
          </div>
          <div>
            {user?.user?.emailAddresses.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex w-2 h-2 translate-y-1 rounded-full" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.emailAddress}
                  </p>
                  <p className="text-sm capitalize text-muted-foreground">
                    {notification.verification?.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default AccountCard;
