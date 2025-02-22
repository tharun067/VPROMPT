"use client";

import Image from "next/image";
import Link from "next/link";
import {  signOut,useSession} from 'next-auth/react';
import { useState } from "react";
import { useRouter } from "next/navigation";

function Nav() {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const router = useRouter();
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Vpromt Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">VPrompt</p>
      </Link>
      {/**Desktop navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">Create Post</Link>
            <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
            <Link href="/profile">
              <Image src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            <button className="black_btn"
              onClick={()=>router.push("/signup")}
            >Sign In
            </button>
          </>
        )}
      </div>
      {/**Mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button type="button"
                  onClick={
                    () => {
                      setToggleDropdown(false);
                      signOut;
                    }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="black_btn"
              onClick={()=>router.push("/signup")}
            >Sign In</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
