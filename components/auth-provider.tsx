"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const AuthProviders = () => {
  return (
    <>
      <Link href="/explore">
        <Button>Get Started</Button>
      </Link>
    </>
  );
};

export default AuthProviders;
