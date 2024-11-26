"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link
          href={"/resumes"}
          className="flex items-center justify-center gap-2"
        >
          <Image
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight">
            AI Resume builder
          </span>
        </Link>
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: 35,
                height: 35,
              },
            },
          }}
        >
          <UserButton.MenuItems>
            <UserButton.Link
              href="/billing"
              label="Billing"
              labelIcon={<CreditCard className="size-4" />}
            />
          </UserButton.MenuItems>
        </UserButton>
      </div>
    </header>
  );
}
